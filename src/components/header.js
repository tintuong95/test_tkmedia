
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchInput from './search-input';
import { Logo } from '../contants/image';

export default function Header() {
	return (
		<header className='flex justify-between items-center px-12 py-4 border-b shadow-sm '>
			<div className='flex items-center gap-7'>
				<div className='logo text-3xl font-semibold flex items-center gap-2'>
					<Image src={Logo} className='w-9' alt='logo' />
					CHAINPLAY
				</div>
				<div className='navbar flex items-center gap-6'>
					<div className='menu flex items-center gap-5'>
						<Link href='#' className='font-bold hover:text-orange-600'>
							Explore
						</Link>
						<Link href='#' className='font-bold hover:text-orange-600'>
							Genres
						</Link>
						<Link href='#' className='font-bold hover:text-orange-600'>
							Whitelists
						</Link>
						<Link href='#' className='font-bold hover:text-orange-600'>
							Learn
						</Link>
						<Link href='#' className='font-bold hover:text-orange-600'>
							Community
						</Link>
					</div>
					<div className='search-input '>
						<SearchInput />
						{/* <FiSearch className='absolute right-0 translate-y-1/2'/> */}
					</div>
				</div>
			</div>
			<div className='group-login-signup flex gap-5 items-center'>
				<button>Log in</button>
				<button className='bg-linear-gradient rounded-lg px-4 py-2 hover:bg-opacity-50 text-white'>
					Sign up
				</button>
			</div>
		</header>
	);
}
