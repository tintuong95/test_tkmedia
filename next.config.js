/** @type {import('next').NextConfig} */
const nextConfig = {
	headers: () => [
		{
			source: '/:path*',
			headers: [
				{
					key: 'Cache-Control',
					value: 'no-store',
				},
			],
		},
	],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tk-storage.s3.ap-southeast-1.amazonaws.com',
			},
		],
	},
	env: {
		SERVER: process.env.SERVER,
	},
};

module.exports = nextConfig
