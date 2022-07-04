/**
 * Umijs configuration settings
 * Please refer to https://umijs.org/config for more details
 * or contact Evi Skitsanos https://www.linkedin.com/in/skitsanos/
 */
import {defineConfig} from 'umi';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    title: 'My Dashboard',

    theme: {
        '@primary-color': '#482684'
    },

    deadCode: isProduction ? {} : false,
    devtool: isProduction ? false : 'eval',
    ignoreMomentLocale: true
});