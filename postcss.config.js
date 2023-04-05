
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import simpleVars from 'postcss-simple-vars';
import postcssMixins from 'postcss-mixins';
import postcssCustomMedia from 'postcss-custom-media';


export default {
    plugins: {
        'tailwindcss/nesting': 'postcss-nesting', 
        tailwindcss: tailwind,
        autoprefixer: autoprefixer,
        'postcss-simple-vars': simpleVars,
        'postcss-mixins': postcssMixins,
        'postcss-custom-media' :postcssCustomMedia

    }
}
