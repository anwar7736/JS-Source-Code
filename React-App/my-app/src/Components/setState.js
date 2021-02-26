import React,{Component} from 'react';

class setState extends React.Component{
	constructor(){
		super();
		this.state ={
			name : 'Anwar'
		}
	}
	change(e){
		this.setState({name: e});
	}
		
	render()
	{
		return <div>
			 <h1 className="text-danger">Hello, <span className="text-success">{this.state.name}</span></h1>
			 <button onClick={this.change.bind(this, 'Hossain')}className="btn btn-primary btn-sm">Change Name</button>
		</div>
	}
}
export default setState;