
import React from 'react';
import { shallow } from 'enzyme';


import Navbar from '../src/Search.js';


const stub_hotels = [
  {
    'name': 'hotelnine',
    'starRating': 1,
    'facilities': ['car park', 'pool']
  },
  {
    'name': 'hotelseven',
    'starRating': 3,
    'facilities': ['wifi', 'late bar']
  }
];


describe('Search tests', () => {
	
	beforeEach(() => {
		fetch.resetMocks()
		fetch.mockResponseOnce(JSON.stringify(stub_hotels))
	})
	
	it('renders without crashing', () => {

		const 	navbar = shallow(<Navbar />),
				header = <h2>Search Results</h2>;

		expect(navbar.contains(header)).toEqual(true);
		
		expect(navbar).toMatchSnapshot();
	});
	
	it('renders with data', () => {

		shallow(<Navbar />);	
				
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toEqual('./data/data.json');
	});
	
});
