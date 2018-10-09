
import getData from '../src/API.js';


const stub_hotels = [
  {
    'name': 'hotelnine',
    'starRating': 1,
    'facilities': ['car park', 'pool']
  }
];


describe('Search tests', () => {
	
	beforeEach(() => {
		fetch.resetMocks();
	})
	
	it('test with stub path to return data', () => {
		
		fetch.mockResponseOnce(JSON.stringify(stub_hotels));	
		
		const stubPath = './data/data1234.json';
		
		getData(stubPath).then(res => {
			expect(res).toEqual(stub_hotels);
		});	
				
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toEqual(stubPath);
	});
	
	it('test with no stub path to fail', () => {
		
		fetch.mockResponseOnce(JSON.stringify(''));	
		
		const stubPath2 = '';

		expect(getData(stubPath2)).toEqual('no argument provided');

		expect(fetch.mock.calls.length).toEqual(0);
	});
	
});
