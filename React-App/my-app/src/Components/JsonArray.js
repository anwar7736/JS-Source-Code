import React, {Component} from 'react';

class JsonArray extends React.Component{
	render()
	{
		const array = [
			{
			 name : 'Anwar',
			 age  : '24',
			},
			{
			 name : 'Hossain',
			 age  : '25',
			},
			{
			 name : 'Sujon',
			 age  : '26',
			},

		];
		const arrayName = array.map((data)=>{
			return <option>{data.name}</option>
		});
		const arrayAge = array.map((data)=>{
			return <option>{data.age}</option>
		});
		return(
			<div>
				<select>
					{arrayName}
				</select>
				<select>
					{arrayAge}
				</select>
			</div>
			);
	}
}
export default JsonArray;