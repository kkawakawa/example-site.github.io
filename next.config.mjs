/** @type {import('next').NextConfig} */
const nextConfig = {
    export: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
}

export default nextConfig;
