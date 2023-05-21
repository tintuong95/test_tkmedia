import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';



import ItemTableModal from './item-table-modal';
import { PLATFORM_CODE } from '../contants/table';
import { LogoAndroid, LogoApple, LogoWindow } from '../contants/image';
import { MdModeEditOutline } from 'react-icons/md';
function ItemTable({data, number, setShowModal}) {
	return (
		<tr className='border-b hover:bg-slate-100 transition duration-150 ease-in-out group '>
			<td className='text-start  py-4 px-4   w-10'>{++number}</td>
			<td className=' py-4'>
				<div className='flex gap-3 items-center'>
					<div>
						<Image
							className='rounded-full'
							src={data?.ImageUrl}
							width={40}
							height={40}
							alt={data?.Name}
						/>
					</div>
					<div className='flex flex-col'>
						<div className='token-name font-bold flex gap-2'>
							{data?.Name || 'Undefined'}
							<div className='font-medium text-slate-500'>
								{String(data?.Symbol).toUpperCase() || 'Undefined'}
							</div>
						</div>
						<div className='text-sm text-slate-500 flex gap-2'>
							<Image width={20} height={20} src={data?.BlockChains[0].ExtendValue} />
							{data?.BlockChains[0].Name || 'Undefined'}
						</div>
					</div>
				</div>
			</td>
			<td className=' py-4 space-x-4'>
				{data?.Genres?.map((i) => i?.Name).join(' | ')}
			</td>
			<td className=' py-4'>
				<div className='flex gap-2 items-center justify-end'>
					{/* {JSON.stringify(data?.Platforms)} */}

					{data?.Platforms?.map((i) => {
						if (i?.Code === PLATFORM_CODE.Windows)
							return <Image src={LogoWindow} alt={i?.Name} />;
						if (i?.Code === PLATFORM_CODE.Apple)
							return <Image src={LogoApple} alt={i?.Name} />;
						if (i?.Code === PLATFORM_CODE.Android)
							return <Image src={LogoAndroid} alt={i?.Name} />;
					})}
				</div>
			</td>
			<td className=' py-4 w-10 pr-2'>
				<div className='flex justify-center items-center'>
					<MdModeEditOutline
						onClick={() => {
							setShowModal(true,data?.Code);
							
						}}
						className='hidden group-hover:block'
					/>
				</div>
			</td>
		</tr>
	);
}

ItemTable.propTypes = {
	data: PropTypes.object,
	number: PropTypes.number,
	setShowModal: PropTypes.func,
};

export default ItemTable;
