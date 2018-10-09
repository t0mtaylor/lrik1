
import React, { Component } from 'react';
import image from './assets/img/logo-laterooms.com.png';

import getData from './API';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hotels: []
        }
    }

    
    componentWillMount() {
		
        localStorage.getItem('hotels') && this.setState({
            contacts: JSON.parse(localStorage.getItem('hotels')),
            isLoading: false
        })
    }
    

    componentDidMount() {
		
		this.fetchData();

        const date = localStorage.getItem('hotelsDate');
        const hotelsDate = date && new Date(parseInt(date));
        const now = new Date();

        const dataAge = Math.round((now - hotelsDate) / (1000 * 60));
        const tooOld = dataAge >= 1;

        if (tooOld) {
            this.fetchData();            
        } 

    }

    fetchData(){

        this.setState({
            isLoading: true,
            hotels: []
        })

		getData('./data/data.json')
        .then((data) => data.map(result => (
            {
                name: `${result.name}`,
                starRating: `${result.starRating}`,
                facilities: result.facilities
            }
        )))
        .then(hotels => this.setState({
            hotels,
            isLoading: false
        }));
        
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('hotels', JSON.stringify(nextState.hotels));
        localStorage.setItem('hotelsDate', Date.now());
    }

  render() {

	const {isLoading, hotels} = this.state;

    return (
		<div>
			<header>
				<img src={image} width="200" alt="LR.com"/>
				<h1>lrik1 - hotel results</h1>
			</header>
			<div className="search">
				<h2>Search Results</h2>
				<div className={`content ${isLoading ? 'is-loading' : ''}`}>
					<div className="panel-group">
						{
							!isLoading && hotels.length > 0 ? hotels.map(hotel => {
								const {name, starRating, facilities} = hotel;

								return <div key={name} title={name}>
									<h3>{name}</h3>
									<p>Star Rating: {starRating} {facilities.length > 0 ? ` | Facilities:  ${facilities}` : ''}</p>
								</div>
							}) : null
						}
					</div>
					<div className="loader">
						<div className="icon"></div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Search;
