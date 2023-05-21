'use client';

import React, {use, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ItemGenres from './item-genres';
import ItemPlatform from './item-platform';
import {MdModeEditOutline} from 'react-icons/md';
import Modal from './modal';
import Image from 'next/image';
import {getGameDetails, updateGame} from '../apis/games';
import {getListGenres} from '../apis/genres';
import {getListPlatforms} from '../apis/platforms';

function ItemTableModal({state, code, setState}) {
	const [listPlatforms, setListPlatforms] = useState([]);
	const [listGenres, setListGenres] = useState([]);
	const [initialData, setInitialData] = useState(null);

	const onChange = (evt) => {
		const {name, value} = evt.target;
		setInitialData({...initialData, [name]: value});
	};

	const fetchUpateGames = () => {
		return updateGame(initialData?.Code, initialData);
	};

	const fetchGameList = () => {
		getGameDetails(code)
			.then((result) => {
				setInitialData(result.result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const fetchListGenres = () => {
		getListGenres()
			.then((result) => {
				setListGenres(result.result);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const fetchListPlatforms = () => {
		getListPlatforms()
			.then((result) => {
				setListPlatforms(result.result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		if (state && code) {
			fetchGameList();
			fetchListGenres();
			fetchListPlatforms();
		}
		return () => {};
	}, [code]);
	return (
		<div className='flex justify-end items-center   '>
			<Modal submit={fetchUpateGames} state={state} setState={setState}>
				<div>
					<div className='grid grid-cols-5 items-center '>
						<label htmlFor='#' className='col-span-1'>
							Icon :
						</label>
						<Image
							width={40}
							height={40}
							className='col-span-4 rounded-full '
							src={initialData?.ImageUrl}
							alt={initialData?.Name}
						/>
					</div>
					<hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='grid grid-cols-5 items-center '>
						<label htmlFor='#' className='col-span-1'>
							Name :
						</label>
						<input
							className='col-span-4 blue-gray-100 p-2 '
							value={initialData?.Name}
							type='text'
							onChange={onChange}
							name='Name'
							readOnly
						/>
					</div>
					<hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='grid grid-cols-5 items-center '>
						<label htmlFor='#' className='col-span-1'>
							Symbol :
						</label>
						<input
							className='col-span-4 blue-gray-100 p-2'
							value={initialData?.Symbol}
							type='text'
							onChange={onChange}
							name='Symbol'
						/>
					</div>
					<hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='grid grid-cols-5 items-center '>
						<label htmlFor='#' className='col-span-1'>
							Price :
						</label>
						<input
							className='col-span-4 blue-gray-100 p-2'
							value={initialData?.Price}
							type='number'
							// onChange={onChange}
							name='Price'
						/>
					</div>
					<hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='grid grid-cols-5 items-center  '>
						<ItemGenres
							listGenres={listGenres}
							setData={setInitialData}
							data={initialData}
						/>
					</div>
					<hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700'></hr>
					<div className='grid grid-cols-5 items-center '>
						<ItemPlatform
							listPlatforms={listPlatforms}
							setData={setInitialData}
							data={initialData}
						/>
					</div>
				</div>
			</Modal>
		</div>
	);
}

ItemTableModal.propTypes = {
	state: PropTypes.bool,
	code: PropTypes.string,
	setState: PropTypes.func,
};

export default ItemTableModal;
