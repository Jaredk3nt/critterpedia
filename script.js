const list = {
  fish: [
    {
      name: 'Bitterling',
      location: 'River',
      size: 'Tiny',
      value: '900',
      time: true,
      season: {
        full: 'November-March (Northern) / May-September (Southern)',
        northern: [10, 11, 0, 1, 2],
        southern: [4, 5, 6, 7, 8, 9],
      },
    },
    {
      name: 'Pale Chub',
      location: 'River',
      size: 'Tiny',
      value: '160',
      time: [{ start: 9, end: 16 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Crucian Carp',
      location: 'River',
      size: 'Small',
      value: '160',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Dace',
      location: 'River',
      size: 'Medium',
      value: '240',
      time: [{ start: 16, end: 9 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Carp',
      location: 'Pond',
      size: 'Large',
      value: '300',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Koi',
      location: 'Pond',
      size: 'Large',
      value: '4,000',
      time: [{ start: 16, end: 9 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Goldfish',
      location: 'Pond',
      size: 'Tiny',
      value: '1,300',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Pop-eyed Goldfish',
      location: 'Pond',
      size: 'Tiny',
      value: '1,300',
      time: [{ start: 9, end: 16 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Ranchu Goldfish',
      location: 'Pond',
      size: 'Small',
      value: '4,500',
      time: [{ start: 9, end: 16 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Killifish',
      location: 'Pond',
      size: 'Tiny',
      value: '300',
      time: true,
      season: {
        full: 'April-August (Northern) / October-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Crawfish',
      location: 'Pond',
      size: 'Small',
      value: '200',
      time: true,
      season: {
        full: 'April-September (Northern) / October-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Soft-shelled Turtle',
      location: 'River',
      size: 'Large',
      value: '3,750',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'August-September (Northern) / February-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Snapping Turtle',
      location: 'River',
      size: 'Huge',
      value: '5,000',
      time: [{ start: 9, end: 16 }],
      season: {
        full: 'April-October (Northern) / October-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Tadpole',
      location: 'Pond',
      size: 'Tiny',
      value: '100',
      time: true,
      season: {
        full: 'March-July (Northern) / September-January (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Frog',
      location: 'Pond',
      size: 'Small',
      value: '120',
      time: true,
      season: {
        full: 'May-August (Northern) / November-Feburary (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Freshwater Goby',
      location: 'River',
      size: 'Small',
      value: '400',
      time: [{ start: 16, end: 9 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Loach',
      location: 'River',
      size: 'Small',
      value: '400',
      time: true,
      season: {
        full: 'March-May (Northern) / September-November (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Catfish',
      location: 'Pond',
      size: 'Large',
      value: '800',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'May-October (Northern) / November-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Giant Snakehead',
      location: 'Pond',
      size: 'Huge',
      value: '5,500',
      time: [{ start: 9, end: 16 }],
      season: {
        full: 'June-August (Northern) / December-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Bluegill',
      location: 'River',
      size: 'Small',
      value: '180',
      time: [{ start: 9, end: 16 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Yellow Perch',
      location: 'River',
      size: 'Medium',
      value: '300',
      time: true,
      season: {
        full: 'October-March (Northern) / April-September (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Black Bass',
      location: 'River',
      size: 'Large',
      value: '400',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Tilapia',
      location: 'River',
      size: 'Medium',
      value: '800',
      time: true,
      season: {
        full: 'June-October (Northern) / December-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Pike',
      location: 'River',
      size: 'Huge',
      value: '1,800',
      time: true,
      season: {
        full: 'September-December (Northern) / March-June (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Pond Smelt',
      location: 'River',
      size: 'Small',
      value: '500',
      time: true,
      season: {
        full: 'December-February (Northern) / June-August (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Sweetfish',
      location: 'River',
      size: 'Medium',
      value: '900',
      time: true,
      season: {
        full: 'July-September (Northern) / January-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Cherry Salmon',
      location: 'River (Clifftop)',
      size: 'Medium',
      value: '1,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full:
          'March-June, September-November (Northern) / March-May, September-December (Southern)',
      },
    },
    {
      name: 'Char',
      location: 'River (Clifftop)/Pond',
      size: 'Medium',
      value: '3,800',
      time: [{ start: 16, end: 9 }],
      season: {
        full:
          'March-June, September-November (Northern) / March-May, September-December (Southern)',
      },
    },
    {
      name: 'Golden Trout',
      location: 'River (Clifftop)',
      size: 'Medium',
      value: '15,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full:
          'March-June, September-November (Northern) / March-May, September-December (Southern)',
      },
    },
    {
      name: 'Stringfish',
      location: 'River (Clifftop)',
      size: 'Giant',
      value: '15,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'December-March (Northern) / June-September (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Salmon',
      location: 'River (mouth)',
      size: 'Small',
      value: '700',
      time: true,
      season: {
        full: 'September (Northern) / March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'King Salmon',
      location: 'River (mouth)',
      size: 'Tiny',
      value: '1,800',
      time: true,
      season: {
        full: 'September (Northern) / March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Mitten Crab',
      location: 'River',
      size: 'Small',
      value: '2,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'September-November (Northern) / March-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Guppy',
      location: 'River',
      size: 'Tiny',
      value: '1,300',
      time: [{ start: 9, end: 14 }],
      season: {
        full: 'April-November (Northern) / October-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Nibble Fish',
      location: 'River',
      size: 'Small',
      value: '1,500',
      time: [{ start: 9, end: 14 }],
      season: {
        full: 'May-September (Northern) / November-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Angelfish',
      location: 'River',
      size: 'Small',
      value: '3,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'May-October (Northern) / November-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Betta',
      location: 'River',
      size: 'Small',
      value: '2,500',
      time: [{ start: 9, end: 14 }],
      season: {
        full: 'May-October (Northern) / November-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Neon Tetra',
      location: 'River',
      size: 'Tiny',
      value: '500',
      time: [{ start: 9, end: 14 }],
      season: {
        full: 'April-November (Northern) / October-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Rainbowfish',
      location: 'River',
      size: 'Small',
      value: '800',
      time: [{ start: 9, end: 14 }],
      season: {
        full: 'May-October (Northern) / November-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Piranha',
      location: 'River',
      size: 'Small',
      value: '2,500',
      time: [
        { start: 9, end: 16 },
        { start: 16, end: 4 },
      ],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Arowana',
      location: 'River',
      size: 'Large',
      value: '10,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Dorado',
      location: 'River',
      size: 'Huge',
      value: '15,000',
      time: [{ start: 4, end: 21 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Gar',
      location: 'Pond',
      size: 'Giant',
      value: '6,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Arapaima',
      location: 'River',
      size: 'Giant',
      value: '10,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Saddled Bichir',
      location: 'River',
      size: 'Large',
      value: '4,000',
      time: [{ start: 21, end: 4 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Sturgeon',
      location: 'River (mouth)',
      size: 'Giant',
      value: '10,000',
      time: true,
      season: {
        full: 'September-March (Northern) / March-September (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Sea Butterfly',
      location: 'Sea',
      size: 'Tiny',
      value: '1,000',
      time: true,
      season: {
        full: 'December-March (Northern) / June-September (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Sea Horse',
      location: 'Sea',
      size: 'Tiny',
      value: '1,100',
      time: true,
      season: {
        full: 'April-November (Northern) / October-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Clown Fish',
      location: 'Sea',
      size: 'Tiny',
      value: '650',
      time: true,
      season: {
        full: 'April-September (Northern) / October-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Surgeonfish',
      location: 'Sea',
      size: 'Small',
      value: '1,000',
      time: true,
      season: {
        full: 'April-September (Northern) / October-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Butterfly Fish',
      location: 'Sea',
      size: 'Small',
      value: '1,000',
      time: true,
      season: {
        full: 'April-September (Northern) / October-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Napoleonfish',
      location: 'Sea',
      size: 'Giant',
      value: '10,000',
      time: [{ start: 4, end: 21 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Zebra Turkeyfish',
      location: 'Sea',
      size: 'Medium',
      value: '500',
      time: true,
      season: {
        full: 'April-November (Northern) / October-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Blowfish',
      location: 'Sea',
      size: 'Medium',
      value: '5,000',
      time: [{ start: 18, end: 4 }],
      season: {
        full: 'November-February (Northern) / May-August (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Puffer Fish',
      location: 'Sea',
      size: 'Medium',
      value: '250',
      time: true,
      season: {
        full: 'July-September (Northern) / January-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Anchovy',
      location: 'Sea',
      size: 'Small',
      value: '200',
      time: [{ start: 4, end: 21 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Horse Mackerel',
      location: 'Sea',
      size: 'Small',
      value: '150',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Barred Knifejaw',
      location: 'Sea',
      size: 'Medium',
      value: '5,000',
      time: true,
      season: {
        full: 'March-November (Northern) / September-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Sea Bass',
      location: 'Sea',
      size: 'Huge',
      value: '400',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Red Snapper',
      location: 'Sea',
      size: 'Large',
      value: '3,000',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Dab',
      location: 'Sea',
      size: 'Medium',
      value: '300',
      time: true,
      season: {
        full: 'October-April (Northern) / April-October (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Olive Flounder',
      location: 'Sea',
      size: 'Large',
      value: '800',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Squid',
      location: 'Sea',
      size: 'Medium',
      value: '500',
      time: true,
      season: {
        full: 'December-August (Northern) / June-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Moray Eel',
      location: 'Sea',
      size: 'Huge',
      value: '2,000',
      time: true,
      season: {
        full: 'August-October (Northern) / February-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Ribbon Eel',
      location: 'Sea',
      size: 'Narrow',
      value: '600',
      time: true,
      season: {
        full: 'June-October (Northern) / December-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Tuna',
      location: 'Pier',
      size: 'Huge',
      value: '7,000',
      time: true,
      season: {
        full: 'November-April (Northern) / May-October (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Blue Marlin',
      location: 'Pier',
      size: 'Huge',
      value: '10,000',
      time: true,
      season: {
        full:
          'July-September, November-April (Northern) / January-March, May-November (Southern)',
      },
    },
    {
      name: 'Giant Trevally',
      location: 'Pier',
      size: 'Large',
      value: '4,500',
      time: true,
      season: {
        full: 'May-October (Northern) / November-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Mahi-mahi',
      location: 'Sea',
      size: 'Large',
      value: '6,000',
      time: true,
      season: {
        full: 'May-October (Northern) / November-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Ocean Sunfish',
      location: 'Sea',
      size: 'Largest (Fin)',
      value: '4,000',
      time: [{ start: 4, end: 21 }],
      season: {
        full: 'July-September (Northern) / January-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Ray',
      location: 'Sea',
      size: 'Huge',
      value: '3,000',
      time: [{ start: 4, end: 21 }],
      season: {
        full: 'August-November (Northern) / February-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Saw Shark',
      location: 'Sea',
      size: 'Largest (Fin)',
      value: '12,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Hammerhead Shark',
      location: 'Sea',
      size: 'Largest (Fin)',
      value: '8,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Great White Shark',
      location: 'Sea',
      size: 'Largest (Fin)',
      value: '15,000',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Whale Shark',
      location: 'Sea',
      size: 'Largest (Fin)',
      value: '13,000',
      time: true,
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Suckerfish',
      location: 'Sea',
      size: '(Fin)',
      value: '1,500',
      time: true,
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Football Fish',
      location: 'Sea',
      size: 'Large',
      value: '2,500',
      time: [{ start: 16, end: 9 }],
      season: {
        full: 'November-March (Northern) / May-September (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Oarfish',
      location: 'Sea',
      size: 'Giant',
      value: '9,000',
      time: true,
      season: {
        full: 'December-May (Northern) / June-November (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Barreleye',
      location: 'Sea',
      size: 'Small',
      value: '15,000',
      time: [{ start: 21, end: 4 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Coelacanth',
      location: 'Sea (rainy days)',
      size: 'Giant',
      value: '15,000',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
  ],
  bugs: [
    {
      name: 'Common Butterfly',
      location: 'Flying',
      value: '160',
      time: [{ start: 4, end: 19 }],
      season: {
        full: 'September-June (Northern) / March-December (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Yellow Butterfly',
      location: 'Flying',
      value: '160',
      time: [{ start: 4, end: 19 }],
      season: {
        full:
          'March-June, September-October (Northern) / March-April, September-December (Southern)',
      },
    },
    {
      name: 'Tiger Butterfly',
      location: 'Flying',
      value: '240',
      time: [{ start: 4, end: 19 }],
      season: {
        full: 'March-September (Northern) / September-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Peacock Butterfly',
      location: 'Flying',
      value: '2,500',
      time: [{ start: 4, end: 19 }],
      season: {
        full: 'March-June (Northern) / September-December (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Common Bluebottle',
      location: 'Flying',
      value: '300',
      time: [{ start: 4, end: 19 }],
      season: {
        full: 'April-August (Northern) / October-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Paper Kite Butterfly',
      location: 'Flying',
      value: '1,000',
      time: [{ start: 8, end: 19 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Great Purple Emperor',
      location: 'Flying',
      value: '3,000',
      time: [{ start: 4, end: 19 }],
      season: {
        full: 'May-August (Northern) / November-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Monach Butterfly',
      location: 'Flying',
      value: '140',
      time: [{ start: 4, end: 17 }],
      season: {
        full: 'September-November (Northern) / March-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Emperor Butterfly',
      location: 'Flying',
      value: '4,000',
      time: [{ start: 17, end: 8 }],
      season: {
        full:
          'June-September, December-March (Northern) / December-March, June-September (Southern)',
      },
    },
    {
      name: 'Agrias Butterfly',
      location: 'Flying',
      value: '3,000',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'April-September (Northern) / November-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: "Raja Brooke's Birdwing",
      location: 'Flying',
      value: '2,500',
      time: [{ start: 8, end: 17 }],
      season: {
        full:
          'April-September, December-February (Northern) / November-March, June-August (Southern)',
      },
    },
    {
      name: "Queen Alexandra's Birdwing",
      location: 'Flying',
      value: '4,000',
      time: [{ start: 8, end: 16 }],
      season: {
        full: 'May-September (Northern) / November-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Moth',
      location: 'Flying by light',
      value: '130',
      time: [{ start: 19, end: 4 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Atlas Moth',
      location: 'On trees',
      value: '3,000',
      time: [{ start: 19, end: 4 }],
      season: {
        full: 'April-September (Northern) / October-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Madagascan Sunset Moth',
      location: 'Flying',
      value: '2,500',
      time: [{ start: 8, end: 16 }],
      season: {
        full: 'April-September (Northern) / October-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Long Locust',
      location: 'On ground',
      value: '200',
      time: [{ start: 8, end: 19 }],
      season: {
        full: 'April-November (Northern) / November-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Migratory Locust',
      location: 'On ground',
      value: '600',
      time: [{ start: 8, end: 19 }],
      season: {
        full: 'August-November (Northern) / February-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Rice Grasshopper',
      location: 'On ground',
      value: '160',
      time: [{ start: 8, end: 19 }],
      season: {
        full: 'August-November (Northern) / February-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Grasshopper',
      location: 'On ground',
      value: '160',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'July-September (Northern) / January-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Cricket',
      location: 'Dig at cricket noise',
      value: '130',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'September-November (Northern) / March-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Bell Cricket',
      location: 'On ground',
      value: '430',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'September-October (Northern) / March-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Mantis',
      location: 'On flowers',
      value: '430',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'March-November (Northern) / September-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Orchid Mantis',
      location: 'On white flowers',
      value: '2,400',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'March-November (Northern) / September-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Honeybee',
      location: 'Flying',
      value: '200',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'March-July (Northern) / March-July (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Wasp',
      location: 'Falls from shaking trees',
      value: '2,500',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Brown Cicada',
      location: 'On trees',
      value: '',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Robust Cicada',
      location: 'On trees',
      value: '',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Giant Cicada',
      location: 'On trees',
      value: '',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Walker Cicada',
      location: 'On trees',
      value: '400',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'August-September (Northern) / February-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Evening Cicada',
      location: 'On trees',
      value: '',
      time: [
        { start: 4, end: 8 },
        { start: 16, end: 19 },
      ],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Cicada Shell',
      location: 'On trees',
      value: '',
      time: true,
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Red Dragonfly',
      location: 'Flying',
      value: '180',
      time: [{ start: 8, end: 19 }],
      season: {
        full: 'September-October (Northern) / March-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Darner Dragonfly',
      location: 'Flying',
      value: '230',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'April-October (Northern) / October-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Banded Dragonfly',
      location: 'Flying',
      value: '4,500',
      time: [{ start: 8, end: 17 }],
      season: {
        full: 'May-October (Northern) / November-April (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Damselfly',
      location: 'Flying',
      value: '',
      time: true,
      season: {
        full: 'November-February (Northern) / May-August (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Firefly',
      location: 'Flying',
      value: '',
      time: [{ start: 19, end: 4 }],
      season: {
        full: 'June (Northern) / December (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Mole Cricket',
      location: 'Underground',
      value: '500',
      time: true,
      season: {
        full: 'November-May (Northern) / May-November (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Pondskater',
      location: 'Ponds',
      value: '130',
      time: [{ start: 8, end: 19 }],
      season: {
        full: 'May-September (Northern) / November-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Diving Beetle',
      location: 'Ponds and rivers',
      value: '800',
      time: [{ start: 8, end: 19 }],
      season: {
        full: 'May-September (Northern) / November-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Giant Water Bug',
      location: 'Ponds and rivers',
      value: '2,000',
      time: [{ start: 19, end: 8 }],
      season: {
        full: 'April-September (Northern) / October-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Stinkbug',
      location: 'On flowers',
      value: '120',
      time: true,
      season: {
        full: 'March-November (Northern) / September-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Man-faced Stink Bug',
      location: 'On flowers',
      value: '1,000',
      time: [{ start: 19, end: 8 }],
      season: {
        full: 'March-November (Northern) / September-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Ladybug',
      location: 'On flowers',
      value: '200',
      time: [{ start: 8, end: 17 }],
      season: {
        full:
          'March-June, October (Northern) / September-December, April (Southern)',
      },
    },
    {
      name: 'Tiger Beetle',
      location: 'On ground',
      value: '1,500',
      time: true,
      season: {
        full: 'February-November (Northern) / August-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Jewel Beetle',
      location: 'On trees',
      value: '2,400',
      time: true,
      season: {
        full: 'April-August (Northern) / October-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Violin Beetle',
      location: 'On tree stumps',
      value: '450',
      time: true,
      season: {
        full:
          'May-June, September-November (Northern) / November-December, March-April (Southern)',
      },
    },
    {
      name: 'Citrus Long-horned Beetle',
      location: 'On tree stumps',
      value: '350',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Rosalia Batesi Beetle',
      location: 'On tree stumps',
      value: '3,000',
      time: true,
      season: {
        full: 'May-September (Northern) / November-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Blue Weevil Beetle',
      location: '',
      value: '',
      time: true,
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Dung Beetle',
      location: 'Pushing snowballs',
      value: '',
      time: false,
      season: {
        full: 'December-February (Northern) / June-August (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Earth-boring Dung Beetle',
      location: 'On ground',
      value: '300',
      time: true,
      season: {
        full: 'July-September (Northern) / January-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Scarab Beetle',
      location: 'On trees',
      value: '',
      time: [{ start: 23, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Drone Beetle',
      location: 'On trees',
      value: '',
      time: true,
      season: {
        full: 'June-August (Northern) / December-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Goliath Beetle',
      location: 'On trees',
      value: '8,000',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Saw Stag',
      location: 'On trees',
      value: '',
      time: true,
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Miyama Stag',
      location: 'On trees',
      value: '',
      time: true,
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Giant Stag',
      location: 'On trees',
      value: '',
      time: [{ start: 23, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Rainbow Stag',
      location: 'On trees',
      value: '6,000',
      time: [{ start: 19, end: 8 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Cyclommatus Stag',
      location: 'On trees',
      value: '',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Golden Stag',
      location: 'On trees',
      value: '',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Giraffe Stag',
      location: 'On trees',
      value: '',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Horned Dynastid',
      location: 'On trees',
      value: '',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Horned Atlas',
      location: 'On trees',
      value: '',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Horned Elephant',
      location: 'On trees',
      value: '',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Horned Herucles',
      location: 'On trees',
      value: '',
      time: [{ start: 17, end: 8 }],
      season: {
        full: 'July-August (Northern) / January-February (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Walking Stick',
      location: 'Falls from shaking trees',
      value: '',
      time: [
        { start: 4, end: 8 },
        { start: 17, end: 19 },
      ],
      season: {
        full: 'July-November (Northern) / January-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Walking Leaf',
      location: 'Near trees, disguised as furniture leaf',
      value: '600',
      time: true,
      season: {
        full: 'July-August (Northern) / January-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Bagworm',
      location: 'Falls from shaking trees',
      value: '600',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Ant',
      location: 'On rotten food',
      value: '',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Hermit Crab',
      location: 'Beach',
      value: '1,000',
      time: [{ start: 19, end: 8 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Wharf Roach',
      location: 'On rocks at beach',
      value: '200',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Fly',
      location: 'On trash items',
      value: '',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Mosquito',
      location: 'Flying',
      value: '130',
      time: [{ start: 17, end: 4 }],
      season: {
        full: 'June-September (Northern) / December-March (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Flea',
      location: 'On villagers',
      value: '',
      time: true,
      season: {
        full: 'April-November (Northern) / October-May (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Snail',
      location: 'On rocks (raining)',
      value: '250',
      time: true,
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Pill Bug',
      location: 'Hit rocks',
      value: '250',
      time: [{ start: 23, end: 16 }],
      season: {
        full: 'September-June (Northern) / March-December (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Centipede',
      location: 'Hit rocks',
      value: '300',
      time: [{ start: 16, end: 23 }],
      season: {
        full: 'September-June (Northern) / March-December (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Spider',
      location: 'Falls from shaking trees',
      value: '480',
      time: [{ start: 19, end: 8 }],
      season: {
        northern: true,
        southern: true,
      },
    },
    {
      name: 'Tarantula',
      location: 'On ground',
      value: '8,000',
      time: [{ start: 19, end: 4 }],
      season: {
        full: 'November-April (Northern) / May-October (Southern)',
        northern: [],
        southern: [],
      },
    },
    {
      name: 'Scorpion',
      location: 'On ground',
      value: '8,000',
      time: [{ start: 19, end: 4 }],
      season: {
        full: 'May-October (Northern) / November-April (Southern)',
        northern: [],
        southern: [],
      },
    },
  ],
};

function parseHemispheres(str) {
  return str.split('/').map(str => str.trim());
}

function parseTimes(str) {
  return str.split(',').map(str => str.trim());
}

function parseMonths(str) {
  return str.split('-').map(str => str.trim());
}

function removeHemispheres(str) {
  const times = str.split('(');
  if (times && times.length > 0) {
    return times[0].trim();
  }
  return '';
}

/**
 *  "season": {
        "full": "April-September (Northern) / October-March (Southern)",
        "northern": [],
        "southern": []
      }
 */
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const fish = list.fish.map(item => {
  const seasonString = item.season.full || '';

  const hemispheres = parseHemispheres(seasonString).map(str => {
    return parseTimes(removeHemispheres(str)).map(str =>
      parseMonths(str).map(str => {
        return MONTHS.findIndex(month => month === str);
      })
    );
  });
  if (hemispheres[0][0][0] === -1) {
    return item;
  }

  // console.log(hemispheres[0])

  return {
    ...item,
    season: {
      northern: hemispheres[0].map(h => ({
        start: h[0],
        end: h[1],
      })),
      souther: hemispheres[1].map(h => ({
        start: h[0],
        end: h[1],
      })),
    },
  };
});
const bugs = list.bugs.map(item => {
  const seasonString = item.season.full || '';

  const hemispheres = parseHemispheres(seasonString).map(str => {
    return parseTimes(removeHemispheres(str)).map(str =>
      parseMonths(str).map(str => {
        return MONTHS.findIndex(month => month === str);
      })
    );
  });
  if (hemispheres[0][0][0] === -1) {
    return item;
  }

  // console.log(hemispheres[0])

  return {
    ...item,
    season: {
      northern: hemispheres[0].map(h => ({
        start: h[0],
        end: h[1],
      })),
      souther: hemispheres[1].map(h => ({
        start: h[0],
        end: h[1],
      })),
    },
  };
});

// finalList.forEach(item => console.log(item.season));
const finalList = { fish, bugs };
console.log(JSON.stringify(finalList));
