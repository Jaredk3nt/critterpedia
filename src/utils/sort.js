export const SORTS = {
  az: 'A to Z',
  za: 'Z to A',
  priceLow: 'Price Low to High',
  priceHigh: 'Price High to Low',
};

export function sortCritters(list, sortType) {
  const newList = [...list];
  switch (sortType) {
    case SORTS.az:
      newList.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      break;
    case SORTS.za:
      newList.sort((b, a) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      break;
    case SORTS.priceLow:
      newList.sort(priceSort);
      break;
    case SORTS.priceHigh:
      newList.sort((a, b) => priceSort(b, a));
      break;
    default:
      break;
  }
  return newList;
}

function priceSort(a, b) {
  const priceA = a.value ? parseInt(a.value.replace(',', '')) : 0;
  const priceB = b.value ? parseInt(b.value.replace(',', '')) : 0;
  return priceA - priceB;
}
