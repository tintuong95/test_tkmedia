

import {getListGames} from '../../apis/games';
import Breadcrumb from '../../components/breadcrumb';
import Pagination from '../../components/pagination';
import Table from '../../components/table';
import React from 'react';
import PropTypes from 'prop-types';
import SelectFilter from '../../components/select-filter';
import ItemTableModal from '../../components/item-table-modal';

const blockchains = [
	{
		Name: 'Ethereum',
		Code: 'ethereum',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/ethereum_20220613095445.png',
	},
	{
		Name: 'Solana',
		Code: 'solana',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/solana_20220613095447.png',
	},
	{
		Name: 'BNB Chain',
		Code: 'bsc',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/bsc_20220613095442.png',
	},
	{
		Name: 'Immutable-X',
		Code: 'immutable-x',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/immutablex_20220613095446.png',
	},
	{
		Name: 'Other',
		Code: 'other',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/other_20220613095443.png',
	},
	{
		Name: 'NEAR',
		Code: 'near',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/near_20220613095454.png',
	},
	{
		Name: 'Polygon',
		Code: 'polygon',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/polygon_20220613095444.png',
	},
	{
		Name: 'NEO',
		Code: 'neo',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/neo_20220613095450.png',
	},
	{
		Name: 'Avalanche',
		Code: 'avalanche',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/avalanche_20220613095455.png',
	},
	{
		Name: 'Harmony',
		Code: 'harmony',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/harmony_20220613095457.png',
	},
	{
		Name: 'BNB Sidechain',
		Code: 'bnb-sidechain',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/BNBSidechain_20220805110008.jpg',
	},
	{
		Name: 'Fantom',
		Code: 'fantom',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/fantom_20220613095509.png',
	},
	{
		Name: 'Arbitrum One',
		Code: 'arbitrum-one',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/ArbitrumOne_20220806101641.jpg',
	},
	{
		Name: 'Moonriver',
		Code: 'moonriver',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/moonriver_20220613095514.png',
	},
	{
		Name: 'Moonbeam',
		Code: 'moonbeam',
		ExtendValue: null,
	},
	{
		Name: 'Cronos',
		Code: 'cronos',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/Cronoschain_20220806002025.jpg',
	},
	{
		Name: 'OKExChain',
		Code: 'okexchain',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/okexchain_20220613095458.png',
	},
	{
		Name: 'Wanchain',
		Code: 'wanchain',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/Wanchain_20220806101721.jpg',
	},
	{
		Name: 'Celo',
		Code: 'celo',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/celo_20220613095506.png',
	},
	{
		Name: 'Qtum',
		Code: 'qtum',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/qtum_20220613095510.png',
	},
	{
		Name: 'Terra',
		Code: 'terra',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/terra_20220613095502.png',
	},
	{
		Name: 'TRON',
		Code: 'tron',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/tron_20220613095449.png',
	},
	{
		Name: 'Aurora',
		Code: 'aurora',
		ExtendValue:
			'https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/common/blockchain/aurora_20220613095503.png',
	},
];

export default async function Page({params, searchParams}) {
	
	const {page} = params;

	const newSearchParams = {
		page,
		limit: 10,
		...searchParams,
	};


	const fetchListGames = getListGames(newSearchParams);
	const [data] = await Promise.all([fetchListGames]);

	

	return (
		<div className='w-9/12 m-auto'>
			<section>
				<div className='mt-8 mb-10'>
					<Breadcrumb />
				</div>

				<h1 className='text-3xl font-bold'>Best Free P2E NFT Games in 2022</h1>
				<h2 className='my-3'>
					Are you looking for Games that Free-to-play? Here are the best F2P NFT
					games available.
				</h2>
				<div className='my-4'>
					<SelectFilter blockchains={blockchains} />
				</div>
			</section>
			
			<Table data={data?.result} />

			<section className=' w-1/2 mt-7 mb-24'>
				<Pagination
					currentPage={data?.page}
					totalPages={data?.countPages}
					total={data?.total}
				/>
			</section>
		</div>
	);
}
Page.propTypes = {
	params: PropTypes.object,
	searchParams: PropTypes.object,
};
