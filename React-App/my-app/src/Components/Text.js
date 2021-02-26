import React, {Component} from 'react';

class Text extends React.Component{
	constructor()
	{
		super();
		this.state = {
			details : ''
		}
	}
	textHandler=(event)=>
	{
		var textValue = event.target.value;
		this.setState({details:textValue});
	}
	render()
	{
		return <div className="text-center">
			<textarea onChange={this.textHandler}placeholder="Please enter some text here..."/>
			<p>{this.state.details}</p>
		</div>
	}
}
export default Text;