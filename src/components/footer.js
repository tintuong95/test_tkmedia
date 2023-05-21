import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Logo, Logo2 } from '../contants/image';

export default function Footer() {
  return (
			<footer className='flex flex-col items-center gap-4 bg-linear-gradient text-white p-7'>
				<div className='text-3xl font-bold my-3 flex gap-2 items-center'>
					<Image src={Logo2} className='w-10 bg-white rounded-full p-2' alt='logo' />
					CHAINPLAY
				</div>
				<div className='flex gap-2 mb-4'>
					<Link href='#' className='hover:underline'>
						FAQ
					</Link>
					<div>|</div>
					<Link href='#' className='hover:underline'>
						Newsletter
					</Link>
					<div>|</div>
					<Link href='#' className='hover:underline'>
						Advertise
					</Link>
					<div>|</div>
					<Link href='#' className='hover:underline'>
						Contact Us
					</Link>
					<div>|</div>
					<Link href='#' className='hover:underline'>
						Press Kit
					</Link>
					<div>|</div>
					<Link href='#' className='hover:underline'>
						Privacy
					</Link>
					<div>|</div>
					<Link href='#' className='hover:underline'>
						Terms
					</Link>
				</div>
				<p className='opacity-70'>© 2021 PlayToEarn.net - all rights reserved</p>
			</footer>
		);
}
