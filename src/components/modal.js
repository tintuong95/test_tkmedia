'use client';

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/navigation';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';

function Modal({children, submit,state,setState}) {
	// const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const onVisibleChange = () => {
		setState(!state);
	};

	return (
		<>
			{/* <span role='button' aria-hidden onClick={onVisibleChange}>
				{button}
			</span> */}

			<div
				aria-hidden='true'
				className={`fixed left-0 top-0  bg-sky-200 bg-opacity-30 w-screen h-screen  overflow-x-hidden overflow-y-hidden  ${
					!state && 'hidden'
				}`}>
				<div className='relative w-full max-w-2xl max-h-full m-auto mt-16'>
					<div className='relative bg-white rounded-md shadow dark:bg-gray-700'>
						<div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
								Information Game
							</h3>
							<button
								onClick={onVisibleChange}
								type='button'
								className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
								data-modal-hide='staticModal'>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
							</button>
						</div>

						<div className='p-6 space-y-6'>{children}</div>

						<div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b '>
							<button
								onClick={() => {
									setLoading(true);
									submit()
										.then((result) => {
											setState(!state);
										})
										.catch((err) => {
											console.log(err);
										})
										.finally(() => {
											setLoading(false);

											// Call this function whenever you want to
											// refresh props!

											router.refresh();
										});
								}}
								className='text-white w-24 h-10 flex items-center justify-center bg-linear-gradient  font-medium rounded-lg text-sm px-5 py-2.5 text-center '>
								{!loading && 'Update'}
								{loading && <AiOutlineLoading3Quarters className='animate-spin' />}
							</button>
							<button
								onClick={() => {
									setState(!state);
								}}
								type='button'
								className='text-white  bg-slate-500 hover:bg-opacity-80 rounded-lg font-medium text-sm px-5 py-2.5 text-center '>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Modal.propTypes = {
	state: PropTypes.bool,
	setState: PropTypes.func,
	children: PropTypes.node,
	submit: PropTypes.func,
};

export default Modal;
