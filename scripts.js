
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
    this.list = document.getElementsByClassName('list')[0]; 
    this.render();
 },

  render: function() {
   octopus.getData().forEach(function(obj) {
      let item = document.createElement('li');
      let text = document.createTextNode(obj.name);
      item.addEventListener('click', octopus.fetchCat);
      item.appendChild(text);
      this.list.appendChild(item);
    }, this); // Q: what is `this` doing here? A: sets `this` value inside callback - ie selectionView
  }
}

const displayView = {
  init: function(placeholder) {
    this.displayBox = document.getElementsByClassName('displayBox')[0];
    this.nameBox = document.getElementsByClassName('catName')[0];
    this.picture = document.getElementsByClassName('picture')[0];
    this.clickBox = document.getElementsByClassName('counter')[0];
    this.render(placeholder);
  },
  
  render: function(obj) {
    this.nameBox.innerHTML = (obj.name);
    this.picture.src = obj.img;
    this.picture.id = obj.name;
    this.picture.addEventListener('click', octopus.countClick); // closure required?
    this.clickBox.innerHTML = obj.count;
    }
}

octopus.init();