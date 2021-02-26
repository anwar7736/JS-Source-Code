import React,{Component} from 'react';
import axios from 'axios';
class CountryList extends React.Component{
	constructor()
	{
		super();
		this.state = {
			mydata : []
		}
	}
	componentDidMount()
		{
			axios.get('https://restcountries.eu/rest/v2/all')
			.then(response=>{
				this.setState({mydata:response.data});
			})
			.catch(error=>{
				console.log(error);
			})
		}
	render()
	{
		const countries = this.state.mydata;
		const countryCode = countries.map((c)=>{
			return <p>{c.alpha2Code}</p>
		});
		const countryName = countries.map((myList)=>{
			return <p>{myList.name}</p>
		});
		const countryPopulation = countries.map((Data)=>{
			return <p>{Data.population}</p>
		});
		return(
				<div><h3 style={{color:'red'}}>Total Country : <span style={{color:'green'}}>{countryName.length}</span></h3>
					<table className="table table-bordered table-striped">
						<tr>
							<th>Code</th>
							<th>Country</th>
							<th>Population</th>
						</tr>
						<tr>
							<td>{countryCode}</td>
							<td>{countryName}</td>
							<td>{countryPopulation}</td>
						</tr>
					</table>

				</div>
			);
	}
}
export default CountryList;