import React, {Component} from 'react';

class Anwar extends Component{
	constructor()
	{
		super();
		this.state = {
			name : 'Anwar',
			age  : [25,39,40,50,56,],
			gender : {
				male : 'Male',
				female : 'Female'
			},
			weight : {
				 w : [20, 50, 70, 74, 80, 100]
			},
			login : false,
		}
		this.changeName = this.changeName.bind(this);
	}
	changeName=(a)=>
	{
		this.setState({name:a});
		this.forceUpdate();
	}
	render(){
		return (<div>
			<h1>Name : {this.state.name}</h1>
			<h1>Age : {this.state.age[0]}</h1>
			<h1>Gender : {this.state.gender.male}</h1>
			<h1>Weight : {this.state.weight.w[3]} KG</h1>
			<h1>{Math.random()}</h1><br/>
			<input type="email" name="user" placeholder="Email Address"/><br/><br/>
			<input type="password" name="pass" placeholder="Password"/><br/><br/>
			<button onClick={this.changeName.bind(this, 'Md Anwar Hossain (Sujon)')} className="btn btn-info btn-sm">Click me!</button>

		</div>)

			 
}
}
export default Anwar;