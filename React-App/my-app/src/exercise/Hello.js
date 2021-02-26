import React from 'react';

import ReactDOM from 'react-dom';
function Hello(props)
{
	 
	return(<div>
				<p>{this.state.name}</p>
				<input type="text"/><br/><br/>
				<button className="btn btn-info">Change Text</button>
			</div>);
}
export default Hello;