import React,{Component} from 'react';
import ReactTable from 'react-table';


class MyTable extends React.Component{
	render()
	{
		const data = [];
		const columns = [{Header: 'Code', accessor: ''}, {Header: 'Name', accessor: ''}];
		return(<div>
					<ReactTable
						data={data}
						columns={columns}
						defaultPageSize={3}
						pageSizeOptions={[2,4,6,7,20]}/>
					
			  </div>);	
	}
}
export default MyTable;