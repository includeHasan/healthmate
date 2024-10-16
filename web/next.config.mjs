/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://healthmate-backend.vercel.app/:path*', // Proxy to external API
            },
        ];
    },
    images: {
        domains: ['jacgmamtcipvliqalaiz.supabase.co'], // Allow loading images from this domain
    },
};

export default nextConfig;
