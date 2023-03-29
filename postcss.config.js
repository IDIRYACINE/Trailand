
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import simpleVars from 'postcss-simple-vars';
import postcssMixins from 'postcss-mixins';

import constants from './src/constants.js';

export default  {
    syntax: 'postcss',
    plugins: [
        // Some plugins, like postcss-nested, need to run before Tailwind
        postcssMixins(),
        nested(),
        simpleVars({variables:constants}),
        tailwind(),
        // But others, like autoprefixer, need to run after
        autoprefixer(),
    ],
};
