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
  if (!type || !title) return [];
  const products = Object.keys(PRODUCTS[type].articles);
  if (!products.length > 1) return [];
  const productsArray = products.map((pkey) => PRODUCTS[type].articles[pkey]);
  return productsArray.filter((p) => p.title !== title);
};

export const getServiceList = () => {
  const window = Object.keys(PRODUCTS["window"].articles);
  const door = Object.keys(PRODUCTS["door"].articles);
  const glazing = Object.keys(PRODUCTS["glazing"].articles);
  const schuco = Object.keys(PRODUCTS["schuco"].articles);

  console.log(door);
  const getObject = (type, key) => {
    {
      const product = getProduct(type, key);
      return {
        serviceTitle: product.name,
        sidebarLink: "single-services",
        type,
        key,
      };
    }
  };

  const windowsArray = window.map((w) => getObject("window", w));
  const doorsArray = door.map((w) => getObject("door", w));
  const glzingArray = glazing.map((w) => getObject("glazing", w));
  const schucoArray = schuco.map((w) => getObject("schuco", w));

  return [...windowsArray, ...doorsArray, ...glzingArray, ...schucoArray];
};
