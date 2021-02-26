import React,{Component} from 'react';

class Register extends React.Component{
    Alert(b)
	{
		alert(b);
	}
	render(){
		return <div type={this.props.type}className="alert alert-danger"><button onClick={this.Alert.bind(this, 'Logout Successfully')} className="btn btn-danger ml-2">{this.props.name}</button></div>
	}
}
export default Register;