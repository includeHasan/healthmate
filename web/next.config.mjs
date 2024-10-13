/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://healthmate-backend.vercel.app/:path*' // Proxy to external API
            }
        ];
    }
};

export default nextConfig;
