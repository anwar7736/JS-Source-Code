import React from 'react';

const Alert=(data)=>{
	alert(data)
}
const Arrow=()=>{
	return(
		 <h2 onClick={Alert.bind(this, 'Hello Everybody')}>This is Arrow Function</h2>
		 );


}
export default Arrow;
