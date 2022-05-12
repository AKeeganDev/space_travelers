import mockRocketData from './__mock__/mockRocketData';
import { changeRocketReservation } from '../redux/rockets/rockets';

const store = {
  rockets: {
    value: [mockRocketData],
  },
};

const correctUpdate = [
  {
    id: 1,
    flickr_images: 'https://imgur.com/DaCfMsj.jpg',
    rocket_name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    reserved: false,
  },
];

describe('tests that the store updating updates the store properly', () => {
  it('updates the mocked rocket reserved status from false to true', () => {
    expect(changeRocketReservation(store, { type: 'rockets/changeRocketReservation', payload: true }).payload.rockets.value).toStrictEqual(correctUpdate);
  });
});
