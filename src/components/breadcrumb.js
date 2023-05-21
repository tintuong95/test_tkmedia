import React from 'react';
import {MdArrowForwardIos} from 'react-icons/md';
import Link from 'next/link';

function Breadcrumb() {
	return (
		<div className='breadcrumb flex items-center gap-2 text-sm text-slate-700 '>
			<Link href='#' className='hover:underline'>
				Home
			</Link>
			<div>
				<MdArrowForwardIos />
			</div>
			<Link href='#' className='hover:underline'>
				Games
			</Link>
			<div>
				<MdArrowForwardIos />
			</div>
			<Link href='#' className='hover:underline'>
				Best Free P2E NFT Games in 2022
			</Link>
		</div>
	);
}

Breadcrumb.propTypes = {};

export default Breadcrumb;
