import React, {Component} from 'react';

class Form extends React.Component{
	constructor()
	{
		super();
		this.state = {
			username : '',
			password : '',
		}
	}
	onChange=(event)=>
	{
		var name = event.target.name;
		var value = event.target.value;
		this.setState({[name]: value});
		if(name==="username")
		{
			var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if(value=='')
			{
				this.setState({username: 'Username field is required'});
			}

			else if(!mail.test(value))
			{
				this.setState({username: 'Invalid Email Format'});
			}
		}
		if(name==='password')
		{	
			var pass = /^([a-zA-Z])*$/;
			if(value=='')
			{
				this.setState({password: 'Password field is required'});
			}
			else if(value.length<3)
			{
				this.setState({password: 'Password is too short'});
			}

		}
	}
	formSubmit=()=>
	{
		alert('Username : ' + this.state.username+ ' & Password : ' + this.state.password);
	}
	render()
	{
		return(
				<form onSubmit={this.formSubmit} method="" className="text-center">
					 <h2>User Login Form</h2>
					 <div className="form-group">
					 	<label className="mr-2"><strong>Username : </strong></label>
					 	<input  onChange={this.onChange} type="text" name="username" id="username" className="p-1" placeholder="Enter your username"/>
					 </div> 
					 <div className="form-group">
					 	<label className="mr-2"><strong>Password : </strong></label>
					 	<input  onChange={this.onChange} type="password" name="password" id="password" className="p-1" placeholder="Enter your password"/>
					 </div>
					  <div className="form-group">
					  		<button type="button" className="btn btn-danger">Login</button>
					 </div>
					 <h3>Username : {this.state.username}</h3>
					 <h3>Password : {this.state.password}</h3>
				</form>

			
			);
	}
}
export default Form;