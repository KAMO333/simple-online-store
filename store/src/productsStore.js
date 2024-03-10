// Coffee: price_1Os4UfA5KUVkF7qQnmSOzit2
// sunglasses: price_1Os4WuA5KUVkF7qQaZFEXw4Y
// camera : price_1Os4YXA5KUVkF7qQwkrGUGfy

const productsArray = [
  {
    id: "price_1Os4UfA5KUVkF7qQnmSOzit2",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1Os4WuA5KUVkF7qQaZFEXw4Y",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1Os4YXA5KUVkF7qQwkrGUGfy",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
