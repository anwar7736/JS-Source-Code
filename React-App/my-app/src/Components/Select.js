import React, {Component} from 'react';

class Select extends React.Component{
	constructor()
	{
		super();
		this.state = {
			name1 : 'আনোয়ার',
			name2 : 'হোসেন',
			name3 : 'সুজন',
			show  : 'সুজন',
			selected : 'সুজন',
		}
	}
	ChangeName=(event)=>
	{
		var selected = event.target.value;
		this.setState({show:selected, selected:selected});
	}
	render()
	{
	const style = {
		width : '100px',
		margin : '0 auto',
	}	
		return (<div>
				<select onChange = {this.ChangeName} value={this.state.selected} className="form-control mt-5 bg-dark text-light" style={style}>
					<option value={this.state.name1}>{this.state.name1}</option>
					<option value={this.state.name2}>{this.state.name2}</option>
					<option value={this.state.name3}>{this.state.name3}</option>
				</select>
				<br/>
				<h1><span className="text-danger">হ্যালো,</span> <span className="text-success">{this.state.show}</span></h1><br/><br/>
				<button className="btn btn-primary ">লগ ইন</button><br/><br/>
				<button className="btn btn-success ">রেজিস্ট্রেশন</button><br/><br/>
				<button className="btn btn-danger ">লগ আউট</button>
			</div>);
	}
}
export default Select;