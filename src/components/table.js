'use client';

import React, { useState } from 'react';
import ItemTable from './item-table';
import PropTypes from 'prop-types';
import ItemTableModal from './item-table-modal';

function Table({data}) {


	const [state,setState]=useState(false)
	const [code,setCode]=useState(null)

	const setShowModal=(state,code)=>{
		setState(state);
		setCode(code)
	}
	
	return (
		<div className='min-h-table'>
			<ItemTableModal state={state} code={code} setState={setState} />
			<table className='table-auto w-full  '>
				<thead>
					<tr className='text-start border-b border-gray-700'>
						<th className='text-start py-2 '>#</th>
						<th className='text-start py-2 '>GAME</th>
						<th className='text-start py-2 w-1/5 '>GENRE</th>
						<th className='text-end py-2 w-1/5'>PLATFORM</th>
					</tr>
				</thead>

				<tbody>
					{data?.map((item, ind) => (
						<ItemTable
							setShowModal={setShowModal}
							key={item?.code}
							number={ind}
							data={item}
						/>
					))}
				</tbody>
			</table>
			{data.length === 0 && (
				<div className='min-h-table font-bold text-slate-200 text-3xl flex items-center justify-center w-full'>
					EMPTY
				</div>
			)}
		</div>
	);
}

export default Table;

Table.propTypes = {
	data: PropTypes.array,
};
