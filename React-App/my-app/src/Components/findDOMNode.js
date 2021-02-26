import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class DOMNode extends React.Component{

changeImage()
{
	var container = document.getElementById('img');

	ReactDOM.findDOMNode(container).src="https://rabbil.com/storage/react.jpg";
}
render()
{
	return <div>
		<img id="img" src="https://rabbil.com/storage/laravel.jpg" style={{height:'500px', width:'500px', borderRadius:'100%'}}/><br/><br/>
		<button onClick={this.changeImage} className="btn btn-success">Change Image</button>
	</div>
}
}
export default DOMNode;