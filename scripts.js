
const gallery = document.getElementsByClassName('allCats')[0];

let cats = {
  Tigger: {
    name: 'Tigger',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71IA1C6JqXL._CR0,289,1154,1154_UX256.jpg',
    count: 0
  },
  Harvey: {
    name: 'Harvey',
    img: 'https://indiewebcat.com/images/profile.jpg',
    count: 0
  },
  Samantha: {
    name: 'Samantha',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71RZzZI7LlL._CR204,0,1224,1224_UX256.jpg',
    count: 0
  }
}

function makeItem(obj) { // constructs presenational elements

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
  gallery.appendChild(box);

}

function addCatClick(cat, counter) {
  cats[cat].count ++;
  counter.innerHTML = cats[cat].count;
}

for (var key in cats) {
  makeItem(cats[key]);
}
