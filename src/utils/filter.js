import { enums, string } from 'fun-enums';
// Data
export const MONTHS = [
  { name: 'January', shortName: 'Jan.' },
  { name: 'February', shortName: 'Feb.' },
  { name: 'March', shortName: 'Mar.' },
  { name: 'April', shortName: 'Apr.' },
  { name: 'May', shortName: 'May' },
  { name: 'June', shortName: 'June' },
  { name: 'July', shortName: 'July' },
  { name: 'August', shortName: 'Aug.' },
  { name: 'September', shortName: 'Sept.' },
  { name: 'October', shortName: 'Oct.' },
  { name: 'November', shortName: 'Nov.' },
  { name: 'December', shortName: 'Dec.' },
]
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

function isActive(critter, { hemisphere, active, month }) {
  if (!active) return true;
  return (
    critter.season[hemisphere] === true ||
    critter.season[hemisphere].includes(month)
  );
}
