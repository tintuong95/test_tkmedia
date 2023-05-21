"use client"

import React from 'react'
import PropTypes from 'prop-types'
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { LogoBlock, LogoEtherum } from '../contants/image';

function SelectFilter({blockchains}) {
    const router =useRouter()
	const searchParams = useSearchParams()

    const onFilterChanged=(e)=>{
        const {value}=e.target
        router.push(`/1?blockchains=${value}`);
    }

  return (
			<div className='relative'>
				<select
					defaultValue={searchParams.get('blockchains')}
					onChange={onFilterChanged}
					className='blue-gray-100 px-3 py-2 pl-7 rounded-lg'>
					<option value=''>All Blockchain</option>
					{blockchains?.map((item) => (
						<option key={item.Code} value={item.Code}>
							{item.Name}
						</option>
					))}
				</select>

				<Image
					src={LogoBlock}
					alt='block'
					className='absolute top-1/2 left-2 transform  -translate-y-1/2 '
				/>
			</div>
		);
}

SelectFilter.propTypes = {
	blockchains:PropTypes.array
};

export default SelectFilter
