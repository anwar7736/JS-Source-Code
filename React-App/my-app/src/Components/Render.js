import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Render extends React.Component{

ChangeName()
{
	var container = document.getElementById('demo');
	var element   = 'Hello, Hossain';
	var callback  = function(){
		alert('Name has been changed');
	}
	ReactDOM.render(element, container, callback);
}
render(){
	return <div>
		<h1 id="demo">Hello, Anwar</h1>
		<button onClick={this.ChangeName} className="btn btn-info btn-sm">Click</button>
	</div>
}
}
export default Render;