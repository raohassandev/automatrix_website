import { PRODUCTS } from "./products";

export const getProduct = (type, key) => {
  //   console.log(productsArray);
  return {
    type: type,
    name: PRODUCTS[type].articles[key].name,
    bgImg: PRODUCTS[type].image,
    title: PRODUCTS[type].articles[key].title,
    image: PRODUCTS[type].articles[key].image,
    desPartOne: PRODUCTS[type].articles[key].desPartOne,
    desPartTwo: PRODUCTS[type].articles[key].desPartTwo,
  };
};

export const getBottomArray = (type, title) => {
  const products = Object.keys(PRODUCTS[type].articles);
  const productsArray = products.map((pkey) => PRODUCTS[type].articles[pkey]);
  return productsArray.filter(p=>p.title !== title);
};
