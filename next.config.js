const path = require('path');
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
    reactStrictMode: false,
    images: {
        domains: [],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
});
