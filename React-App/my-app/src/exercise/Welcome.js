import React, {Component} from 'react';

class Welcome extends React.Component{
	constructor()
	{
		super();
		this.state = {
			name : '',
			pass : '',
		}
	}
	change=(event)=>
	{
		var name  = event.target.name;
		var value = event.target.value;
		this.setState({[name]:value});


		if(name==='name')
		{
			var pattern = "/^[a-zA-Z-' ]*$/";
			if(!pattern.test(name))
			{
				this.setState({name: 'Invaild'});
			}

		}
	
	
	submit=()=>{
		alert("Username : "+this.state.name+" Password : "+this.state.pass)
	}
	render()
	{
		return(<div>
			<p className="text-light">{this.state.name}</p>
			<p className="text-light">{this.state.pass}</p>
		
					<input onChange={this.change} name="name" type="text" placeholder="Username..."/><br/><br/>
					<input onChange={this.change} name="pass" type="password" placeholder="Password..."/><br/><br/>
					
			
			</div>
			);
	}

}
export default Welcome;