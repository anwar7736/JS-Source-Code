import React,{Component} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import axios from 'axios';
class Table extends React.Component{
	constructor()
	{
		super();
		this.state = {
			tableData : [],
		}
	}
	componentDidMount()
	{
		axios.get('https://restcountries.eu/rest/v2/all')
		.then(response=>{
			this.setState({tableData: response.data});
		})
		.catch(error=>{
			alert('Something went wrong!');
		})
	}
	render()
	{
		const data = this.state.tableData;
		const columns = [{Header: 'Code', accessor:'alpha2Code'}, {Header: 'Name', accessor:'name'}, {Header: 'Population', accessor: 'population'}];
		return(<div>
					<ReactTable
						data={data}
						columns={columns}
						defaultPageSize={10}
						pageSizeOptions={[10,20,25,30]}
					/>
				</div>);
	}
}
export default Table;