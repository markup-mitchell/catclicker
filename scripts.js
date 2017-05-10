
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

  // currentCat: this.catData[0],
  giveData: function() {
    return this.catData;
  }
}

const octopus = {
  init: function() {
    selectionView.init;
    displayView.init;
  },

  getData: function() {
    return model.giveData();
  }


}


const selectionView = { 
  
  init: function(){

 },

  render: function() {
        const list = document.getElementsByClassName('list')[0]; 
        octopus.getData().forEach(function(obj) {
          let item = document.createElement('li');
          let text = document.createTextNode(obj.name);
          item.appendChild(text);
          list.appendChild(item);
      }, this);

 }
}

const displayView = {
  init: function() {

  },
  render: function() {
    

  }
}

selectionView.render();