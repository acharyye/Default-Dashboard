/**
 * Umijs configuration settings
 * Please refer to https://umijs.org/config for more details
 * or contact Evi Skitsanos https://www.linkedin.com/in/skitsanos/
 */
import {defineConfig} from 'umi';

export default defineConfig({
    title: 'My Dashboard',

    theme: {
        '@primary-color': '#482684'
    },

    /*dynamicImport: {
     loading: '@/components/Loading'
     },*/

    //this line allows handling Page Not found errors and displays content from 404.js
    //404: true,

    /*fastRefresh: true,

    ignoreMomentLocale: true,

    devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,*/
});