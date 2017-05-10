
const model = {
  catData: [
  { name: 'Mark',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71IA1C6JqXL._CR0,289,1154,1154_UX256.jpg',
      count: 0 },
  { name: 'Johnny',
      img: 'https://indiewebcat.com/images/profile.jpg',
      count: 0
    },
  { name: 'Camille',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71RZzZI7LlL._CR204,0,1224,1224_UX256.jpg',
      count: 0
    },
  { name: 'Nancy',
      img: 'https://cdn.neighbourly.co.nz/images/cache/message_image_thumbnail/message_images/58f563fc3955d5.38067264.jpeg?170410',
      count: 0
    },
  { name: 'Keir',
      img: 'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
      count: 0
    },
  { name: 'Ben',
     img: 'https://images-na.ssl-images-amazon.com/images/I/71gvV3PrFGL._SL256_.jpg',
      count: 0
    }
  ],

  currentCat: {
    name:'Pick A Cat!', 
    img: 'http://www.clipartbest.com/cliparts/jix/adA/jixadAxGT.png',
    count: ''
  },
  
  giveData: function() {
    return this.catData;
  }
}

// ---------------------------------------------------

const octopus = {
  init: function() {
    selectionView.init();
    displayView.init(model.currentCat);
  },

  getData: function() {
    return model.giveData();
  },
  
  fetchCat() {
    let nameClicked = this.innerHTML;
    model.currentCat = model.catData.filter((cat) => cat.name === nameClicked)[0]; 
    displayView.render(model.currentCat);
  },

  countClick() {
    let pictureClicked = this.id;
    let catMatch = model.catData.filter((cat) => cat.name === pictureClicked)[0];
    // ^^^^ this will cause problems if the name changes! use numeric ID instead?
    // do I need this? can't I use currentCat?
    catMatch.count ++;
    displayView.render(catMatch);
  }
}

// ---------------------------------------------------


const selectionView = { 
   
  init: function(){
    const list = document.getElementsByClassName('list')[0]; 
    const objArray = octopus.getData();
 },

  render: function() {
    objArray.forEach(function(obj) {
      let item = document.createElement('li');
      let text = document.createTextNode(obj.name);
      item.addEventListener('click', octopus.fetchCat);
      item.appendChild(text);
      list.appendChild(item);
    }, this); // what is `this` doing here?
    this.render();
  }
}

const displayView = {
  init: function(placeholder) {
    const displayBox = document.getElementsByClassName('displayBox')[0];
    const nameBox = document.getElementsByClassName('catName')[0];
    const picture = document.getElementsByClassName('picture')[0];
    const clickBox = document.getElementsByClassName('counter')[0];
    this.render(placeholder);
  },
  
  render: function(obj) {
    
    // generate name components and compose:
    nameBox.innerHTML = (obj.name);
    
    // generate picture component
    picture.src = obj.img;
    picture.id = obj.name;
    picture.addEventListener('click', octopus.countClick);

    // generate click counter components and compose
    clickBox.innerHTML = obj.count;
    }
}


octopus.init();