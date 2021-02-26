import React,{Component} from 'react';

import axios from 'axios';

class Post extends React.Component{

	constructor(){
		super();
		this.state = {
			PostData : '',
			Result   : '',
			Error   : '',
		}
	}

	onChange=(event)=>{
		var getData = event.target.value;
		this.setState({PostData:getData});
	}
	onClick=()=>{
		axios.post('http://localhost:808/Test.php', this.state.PostData)
		.then(response=>{
			this.setState({Result:response.data});
		})
		.catch(error=>{
				this.setState({Error:'Server not found!'});
		})
	}
	render(){

		return (<div>
				<input onChange={this.onChange} type="text" style={{height:'38px'}} placeholder="Enter any input..."/>
				<button onClick={this.onClick} className="btn btn-dark mb-1">SEND</button><br/><br/>
				<h3>{this.state.Result}</h3>
				<h3 className="text-danger">{this.state.Error}</h3>
			</div>);
	}
}
export default Post;