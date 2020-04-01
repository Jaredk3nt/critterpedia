// TODO: MAKE THESE MORE ELEGANT SO BRUTE FORCE
export function parseSeason(season) {
  const fullSeason = [];
  if (season === true) {
    fullSeason.push(...Array(12).keys());
  } else {
    for (let period of season) {
      if (!period.end) {
        fullSeason.push(period.start);
      } else {
        if (period.start > period.end) {
          for (let i = period.start; i <= 12; i++) {
            fullSeason.push(i);
          }
          for (let i = 0; i <= period.end; i++) {
            fullSeason.push(i);
          }
        } else {
          for (let i = period.start; i <= period.end; i++) {
            fullSeason.push(i);
          }
        }
        
      }
    }
  }
  return fullSeason;
}

export function parseTime(time) {
  const fullHours = [];

  if (time === true) {
    fullHours.push(...Array(24).keys());
  } else if (time !== undefined && Array.isArray(time)) {
    for (let period of time) {
      if (!period.end) {
        fullHours.push(period.start);
      } else {
        if (period.start > period.end) {
          for (let i = period.start; i <= 24; i++) {
            fullHours.push(i);
          }
          for (let i = 0; i <= period.end; i++) {
            fullHours.push(i);
          }
        } else {
          for (let i = period.start; i <= period.end; i++) {
            fullHours.push(i);
          }
        }
      }
    }
  }

  return fullHours;
}