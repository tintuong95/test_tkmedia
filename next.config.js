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
			//   {
			//     protocol: "http",
			//     hostname: "localhost",
			//   },
			//   {
			//     protocol: "https",
			//     hostname: "i.pinimg.com",
			//   },
			//   {
			//     protocol: "https",
			//     hostname: "media.bizwebmedia.net",
			//   },
		],
	},
};

module.exports = nextConfig
