/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          port: '',
          
        },
        {
          protocol: 'https',
          hostname: "image3.jdomni.in",
          port: '',
          
        },
        {
          protocol: 'https',
          hostname: "image1.jdomni.in",
          port: '',
          
        }, {
          protocol: 'https',
          hostname: "image2.jdomni.in",
          port: '',
          
        },
      ],
    },
  }

module.exports = nextConfig
