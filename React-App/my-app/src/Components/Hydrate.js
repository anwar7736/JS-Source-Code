import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hydrate extends React.Component{

Change()
{
	var container = document.getElementById('data');
	var element   = 'Hello, Sujon';
	var callback  = function(){
		alert('Name has been changed');
	}
	ReactDOM.hydrate(element, container, callback);
}
render(){
	return <div>
		<h1 id="data">Hello, Hossain</h1>
		<button onClick={this.Change} className="btn btn-info btn-sm">Click</button>
	</div>
}
}
export default Hydrate;