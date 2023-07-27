'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

// AppState.prototype.saveToLocalStorage = function () {
//   const productSave = JSON.stringify(this.allProducts);
//   localStorage.setItem('productData', productSave);
// }

// AppState.prototype.loadItems = function () {

//   localStorage.getItem('productData');
//   JSON.parse(localStorage.getItem('productSave'));
//       this.instantiateProducts();
// }

AppState.prototype.saveToLocalStorage = function () {
  const productsSave = JSON.stringify(this.allProducts);
  localStorage.setItem('productsData', productsSave);
}

AppState.prototype.loadItems = function () {
const productsSave = localStorage.getItem('productsData');
  if (productsSave) {
    this.allProducts = JSON.parse(productsSave);
  } else {
    this.instantiateProducts();
  }
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
