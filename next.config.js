/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname:'images.unsplash.com'}, {hostname:'raw.githubusercontent.com'}],
    }
}

module.exports = nextConfig
