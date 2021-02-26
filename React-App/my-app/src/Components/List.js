import React, {Component} from 'react';

class List extends React.Component{
	array=(data)=>{
			return <option>{data*2}</option>
	}
	render()
	{
		const items = [1,2,3,4,5];
		const itemList = items.map(this.array);
		return(<div>
				<select>
					{itemList}
				</select>
			</div>);
	}
}
export default List;