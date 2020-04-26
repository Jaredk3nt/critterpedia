import { enums, string } from 'fun-enums';
// Data
const currentMonth = new Date().getMonth();
export const FILTER_TYPES = enums(string)('fish', 'bug', 'all', 'none');

export function filterCritters(critters, filters) {
  return critters.filter((critter) => {
    return isType(critter, filters) && isActive(critter, filters);
  });
}

function isType(critter, { critterType }) {
  if (critterType === FILTER_TYPES.all) return true;
  return critter.type === critterType;
}

function isActive(critter, { hemisphere, active }) {
  if (!active) return true;
  return (
    critter.season[hemisphere] === true ||
    critter.season[hemisphere].includes(currentMonth)
  );
}
