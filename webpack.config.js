module.exports = {
    resolve: {
        alias: {
            'umi': require('path').resolve(__dirname, 'src/.umi/exports'),
            '@': require('path').resolve(__dirname, 'src')
        }
    },
    plugins: []
};
