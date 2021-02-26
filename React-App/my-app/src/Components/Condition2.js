import React, {Component} from 'react';

class Condition1 extends React.Component{
		logout(a){
		alert(a);
	}
	login(a){
		alert(a);
	}
	constructor(){
		super();
		this.state = {
			login : false,
		}
	}
	render()
	{

			return (
					 this.state.login? (<button onClick={this.logout.bind(this, 'Logout Successfully')} className="btn btn-danger btn-sm mt-2">Logout</button>) : (<button onClick={this.login.bind(this, 'Login Successfully')}className="btn btn-success btn-sm mt-2">Login</button>)
				   )
	}
}
export default Condition1;