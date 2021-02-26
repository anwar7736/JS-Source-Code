import React, {Component} from 'react';

class State extends React.Component{
	constructor(){
		super();
		this.state = {
			name : 'Md. Anwar Hossain',
			age : {
				a : [24, 34, 54]
			},
			gender : {
				m : 'Male',
				f : 'Female'
			},
			weight : {
				w : [10, 20, 40, 70, 74]
			},
			height : '5 Feet 7 Inch',
		}
	}
	render()
	{
		return <div className="alert alert-success text-danger">
			<h1>Name : {this.state.name}</h1>
			<h1>Age : {this.state.age.a[2]} years old</h1>
			<h1>Gender : {this.state.gender.m}</h1>
			<h1>Height : {this.state.height}</h1>
			<h1>Weight : {this.state.weight.w[4]} KG</h1>
		</div>
	}
}
export default State;