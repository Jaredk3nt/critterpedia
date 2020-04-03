import { enums } from 'fun-enums';
import { ACTIVE_LEVELS } from './season';
const currentMonth = new Date().getMonth();

export const SORT_TYPES = enums()({
  nameA: 'Critter Name: A - Z',
  nameZ: 'Critter Name: Z - A',
  priceLow: 'Price: Low - High',
  priceHigh: 'Price: High - Low',
});

export function critterFilter({ showBugs, showFish, active, hemisphere }) {
  return critter => {
    return (
      ((critter.type === 'fish' && showFish) ||
        (critter.type === 'bug' && showBugs)) &&
      ((active === ACTIVE_LEVELS[0] &&
        critter.season[hemisphere].includes(currentMonth)) ||
        active === ACTIVE_LEVELS[1])
    );
  };
}

function stringSortByKey(getValue) {
  function stringSort(a, b) {
    if (getValue(a) < getValue(b)) return -1;
    if (getValue(a) > getValue(b)) return 1;
    return 0;
  }

  return stringSort;
}

const nameSort = stringSortByKey(v => v.name);

function priceSort(a, b) {
  const priceA = a.value ? parseInt(a.value.replace(',', '')) : 0;
  const priceB = b.value ? parseInt(b.value.replace(',', '')) : 0;
  return priceA - priceB;
}

export function sortBy(list, type) {
  switch (type) {
    case SORT_TYPES.nameA:
      const newList = list.sort(nameSort);
      console.log({ newList, list });
      return newList;
    case SORT_TYPES.nameZ:
      return list.sort((a, b) => nameSort(b, a));
    case SORT_TYPES.priceLow:
      return list.sort(priceSort);
    case SORT_TYPES.priceHigh:
      return list.sort((a, b) => priceSort(b, a));
    default:
      return list;
  }
}
