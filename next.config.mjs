/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
images: {
    domains: [
      'api.microlink.io', // Microlink Image Preview
      'images.unsplash.com', // Microlink Image Preview
      'lottie.host',
      'i.ibb.co' // Microlink Image Preview
    ]
  }
}



export default nextConfig;
