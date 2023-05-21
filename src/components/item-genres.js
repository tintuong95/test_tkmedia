'use client';
import React from 'react';
import PropTypes from 'prop-types';
import {
	AiOutlineClose,

} from 'react-icons/ai';





function ItemGenres({data, setData, listGenres}) {
	const renderListOptions = () => {
		const newListOptions = data?.Genres?.map((item) => item.Code);

		const newList = listGenres?.filter((item) => {
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
		const findIndex = listGenres.findIndex((item) => item.Code === value);
		data?.Genres.push(listGenres[findIndex]);

		setData({...data, Genres: data?.Genres});
	};

	const onRemove = (code) => {
		const newData = data?.Genres.filter((item) => item.Code !== code);
		setData({...data, Genres: newData});
	};

	return (
		<>
			<label htmlFor='#' className='col-span-1'>
				Genres :
			</label>
			<div className='flex gap-2 col-span-4 flex-wrap'>
				{data?.Genres?.map((item) => (
					<div
						key={item?.Code}
						className='flex items-center justify-center gap-2 blue-gray-100 p-2 px-4'>
						<span className=' inline-block  ' type='text'>
							{item?.Name}
						</span>
						<AiOutlineClose
							onClick={() => {
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
					placeholder='Text'
					defaultValue={''}>
					<option value=''>Select</option>
					{renderListOptions()}
				</select>
				{/* <button className=' p-2' value={'Hello'} type='text'>
					<AiOutlinePlus />
				</button> */}
			</div>
		</>
	);
}

ItemGenres.propTypes = {
	setData: PropTypes.func,
	data: PropTypes.object,
	listGenres: PropTypes.object,
};

export default ItemGenres;
