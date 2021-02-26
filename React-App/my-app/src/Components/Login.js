import React from 'react';

function Login(props)
{
	function Alert(a)
	{
		alert(a);
	}
	return(
			<div className="alert alert-success">
				<button onClick={Alert.bind(this, 'Login Successfully')} type={props.type} className="btn btn-success">{props.name}</button>
			</div>
			

		  );
}
export default Login;
