'use client';
import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineClose} from 'react-icons/ai';



function ItemPlatform({data, setData, listPlatforms}) {
	const renderListOptions = () => {
		const newListOptions = data?.Platforms?.map((item) => item.Code);

		const newList = listPlatforms?.filter((item) => {
			if (newListOptions?.includes(item.Code)) return false;
			else return true;
		});

		return newList.map((item) => (
			<option key={item.Code} value={item.Code}>
				{item.Name}
			</option>
		));
	};

	const onChange = (e) => {
		const {value} = e.target;
		const findIndex = listPlatforms.findIndex((item) => item.Code === value);
		data?.Platforms.push(listPlatforms[findIndex]);
		setData({...data, Platforms: data?.Platforms});
	};

	const onRemove = (code) => {
		const newData = data?.Platforms.filter((item) => item.Code !== code);
		setData({...data, Platforms: newData});
	};
	return (
		<>
			<label htmlFor='#' className='col-span-1'>
				Platforms :
			</label>
			<div className='flex gap-2 col-span-4 flex-wrap'>
				{data?.Platforms?.map((item) => (
					<div
						key={item?.Code}
						className='flex items-center justify-center gap-2 blue-gray-100 p-2 px-4'>
						<span className=' inline-block  ' type='text'>
							{item?.Name}
						</span>
						<AiOutlineClose
							onClick={() => {
								console.log('d');
								onRemove(item?.Code);
							}}
							className=''
						/>
					</div>
				))}
				<select
					onChange={onChange}
					type='text'
					className='blue-gray-100 px-2 w-20'
					placeholder='Text'>
					<option value={''}>Select</option>
					{renderListOptions()}
				</select>
				{/* <button className=' p-2' value={'Hello'} type='text'>
					<AiOutlinePlus />
				</button> */}
			</div>
		</>
	);
}

ItemPlatform.propTypes = {
	setData: PropTypes.func,
	data: PropTypes.object,
	listPlatforms: PropTypes.object,
};

export default ItemPlatform;
