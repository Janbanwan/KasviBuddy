const plants = [
  {
    id: '1337',
    nickName: 'Keihäs',
    commonName: 'Keihäs Anopinkieli',
    scientificName: 'Sansevieria cylindrica',
    guide: {
      watering: 'Every 2 weeks',
      light: 'No direct light',
      fertilizing: 'Every 2 weeks',
      soil: 'cactus soil',
    },
    careHistory: {
      lastWateringDate: 'DateTime eg 2020.05.05T12:00',
      fertilizing: {
        lastFertilizingDate: 'DateTime eg 2020.05.05T12:00',
        amount: '2 drops',
        product: 'Biolan kasviravinne',
      },
      lastSoilChange: 'DateTime eg 2020.05.05T12:00',
    },
  },
  {
    id: '127',
    nickName: 'Aloe',
    commonName: 'Keihäs Anopinkieli',
    scientificName: 'Sansevieria cylindrica',
    guide: {
      watering: 'Every 2 weeks',
      light: 'No direct light',
      fertilizing: 'Every 2 weeks',
      soil: 'cactus soil',
    },
    careHistory: {
      lastWateringDate: 'DateTime eg 2020.05.05T12:00',
      fertilizing: {
        lastFertilizingDate: 'DateTime eg 2020.05.05T12:00',
        amount: '2 drops',
        product: 'Biolan kasviravinne',
      },
      lastSoilChange: 'DateTime eg 2020.05.05T12:00',
    },
  },
  {
    id: '1997',
    nickName: 'kasvinen',
    commonName: 'Keihäs Anopinkieli',
    scientificName: 'Sansevieria cylindrica',
    guide: {
      watering: 'Every 2 weeks',
      light: 'No direct light',
      fertilizing: 'Every 2 weeks',
      soil: 'cactus soil',
    },
    careHistory: {
      lastWateringDate: 'DateTime eg 2020.05.05T12:00',
      fertilizing: {
        lastFertilizingDate: 'DateTime eg 2020.05.05T12:00',
        amount: '2 drops',
        product: 'Biolan kasviravinne',
      },
      lastSoilChange: 'DateTime eg 2020.05.05T12:00',
    },
  },
];

export const mockDatabase = () => {
  return plants;
};
