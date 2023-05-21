'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useRouter, useSearchParams} from 'next/navigation';

function Pagination({currentPage, totalPages, total}) {

const searchParams = useSearchParams()


	const handleNextPage = () => {
		if (currentPage == totalPages) return totalPages - 1;
		else if (currentPage == 1) return currentPage + 2;
		else return currentPage + 1;
	};

	const handlePrevPage = () => {
		if (currentPage == totalPages) return totalPages - 2;
		else if (currentPage == 1) return currentPage + 1;
		else return currentPage - 1;
	};

	
	return (
		<div className='flex justify-between text-slate-600'>
			<div>
				Showing {currentPage} - {currentPage!=totalPages? currentPage*10:total} out of {total}
			</div>
			{totalPages > 3 && (
				<div className='flex gap-1'>
					<Link
						href={'1?' + searchParams.toString()}
						className={` w-8 h-8  flex items-center justify-center rounded-md ${
							currentPage === 1 && 'bg-rose-600 text-white'
						}`}>
						1
					</Link>

					{currentPage != 1 && currentPage != 2 && (
						<button
							className={'flex items-center justify-center w-8 h-8 t rounded-md'}>
							..
						</button>
					)}
					{currentPage != 2 && (
						<Link
							href={String(handlePrevPage()) + '?' + searchParams.toString()}
							className={'flex items-center justify-center w-8 h-8  rounded-md'}>
							{handlePrevPage()}
						</Link>
					)}
					{currentPage !== totalPages && currentPage !== 1 && (
						<Link
							href={String(currentPage) + '?' + searchParams.toString()}
							className={
								'bg-rose-700 w-8 h-8 text-white rounded-md flex items-center justify-center'
							}>
							{currentPage}
						</Link>
					)}

					{currentPage != totalPages - 1 && (
						<Link
							href={String(handleNextPage()) + '?' + searchParams.toString()}
							className={'flex items-center justify-center w-8 h-8  rounded-md'}>
							{handleNextPage()}
						</Link>
					)}
					{currentPage !== totalPages && currentPage !== totalPages - 1 && (
						<button
							className={'flex items-center justify-center w-8 h-8 t rounded-md'}>
							..
						</button>
					)}
					<Link
						href={String(totalPages) + '?' + searchParams.toString()}
						className={`flex items-center justify-center w-8 h-8  rounded-md ${
							currentPage === totalPages && 'bg-rose-600 text-white'
						}`}>
						{totalPages}
					</Link>
				</div>
			)}

			{totalPages <= 3 && (
				<div className='flex gap-1'>
					{Array.from(Array(totalPages).keys()).map((item) => {
						return (
							<Link
								key={item}
								href={`/${item + 1}` + '?' + searchParams.toString()}
								className={` w-8 h-8  flex items-center justify-center rounded-md ${
									currentPage === item + 1 && 'bg-rose-600 text-white'
								}`}>
								{item + 1}
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
}

Pagination.propTypes = {
	currentPage: PropTypes.number,
	totalPages: PropTypes.number,
	total: PropTypes.number,
	searchParams: PropTypes.object,
};

export default Pagination;
