'use client';

import React from 'react';

import {useRouter} from 'next/navigation';
import {useDebouncedCallback} from 'use-debounce';
function SearchInput(props) {
	const navigation = useRouter();

	const debounced = useDebouncedCallback(
		(value) => {
			navigation.push(`/1?search=${value}`);
		},

		500
	);

	return (
		<div className='relative'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<svg
					aria-hidden='true'
					className='w-5 h-5 primary-color '
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
				</svg>
			</div>
			<input
				onChange={(e) => debounced(e.target.value)}
				className='blue-gray-100  py-2 px-12 rounded-full w-96'
				type='text'
				placeholder='Search NFTs / Collections / Addresses'
			/>
		</div>
	);
}

SearchInput.propTypes = {};

export default SearchInput;
