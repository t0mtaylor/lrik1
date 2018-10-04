
import React from 'react';
import { shallow } from 'enzyme';


import Navbar from '../src/Search.js';


describe('Search tests', () => {
	
	it('renders without crashing', () => {

		const 	wrapper = shallow(<Navbar />),
				header = <h2>Search Results</h2>;

		expect(wrapper.contains(header)).toEqual(true);
	});
	
});
