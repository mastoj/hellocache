/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.dog.ceo", "cdn2.thecatapi.com"],

    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
