
const listBox = document.getElementsByClassName('listBox')[0];
const bigDisplay = document.getElementsByClassName('bigDisplay')[0];

let cats = {
  Mark: {
    name: 'Mark',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71IA1C6JqXL._CR0,289,1154,1154_UX256.jpg',
    count: 0
  },
  Johnny: {
    name: 'Johnny',
    img: 'https://indiewebcat.com/images/profile.jpg',
    count: 0
  },
  Camille: {
    name: 'Camille',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71RZzZI7LlL._CR204,0,1224,1224_UX256.jpg',
    count: 0
  },
  Nancy: {
    name: 'Nancy',
    img: 'https://cdn.neighbourly.co.nz/images/cache/message_image_thumbnail/message_images/58f563fc3955d5.38067264.jpeg?170410',
    count: 0
  },
  Keir: {
    name: 'Keir',
    img: 'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
    count: 0
  },
  Ben: {
    name: 'Ben',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71gvV3PrFGL._SL256_.jpg',
    count: 0
  }
}
const placeholder = {name:'', img: 'http://www.clipartbest.com/cliparts/jix/adA/jixadAxGT.png'}
const catList = document.createElement('ul');

function addToList(obj) {
  const item = document.createElement('li');
  const name = document.createTextNode(obj.name);
  item.addEventListener('click', function() {
    makeItem(obj);
    item.classList.add('highlight');
    }
  );
  item.appendChild(name);
  catList.appendChild(item);
  listBox.appendChild(catList);
}

makeItem(placeholder);

for (var key in cats) {
  addToList(cats[key]);
}

function makeItem(obj) { // constructs presenational elements
  bigDisplay.innerHTML = '';
  const box = document.createElement('div'); // container
  box.className = 'displayBox';

  const nameHeading = document.createElement('h2');
  const name = document.createTextNode(obj.name);
  nameHeading.append(name);

  const picture = document.createElement('img');
  picture.src = obj.img;
  function clickMe() {
    return addCatClick(obj.name, countHeading);
  }
  picture.addEventListener('click', clickMe);

  const countHeading = document.createElement('h2');
  const count = document.createTextNode(obj.count);

  countHeading.append(count);

  box.append(nameHeading);
  box.appendChild(picture);
  box.append(countHeading);
  bigDisplay.appendChild(box);

}

function addCatClick(cat, counter) {
  cats[cat].count ++;
  counter.innerHTML = cats[cat].count;
}