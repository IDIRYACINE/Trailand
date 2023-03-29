
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import simpleVars from 'postcss-simple-vars';
import postcssMixins from 'postcss-mixins';



// export default  {
//     syntax: 'postcss',
//     plugins: [
//         // Some plugins, like postcss-nested, need to run before Tailwind
//         postcssMixins(),
//         nested(),
//         simpleVars(),
//         tailwind(),
//         // But others, like autoprefixer, need to run after
//         autoprefixer(),
//     ],
// };

export default {
    plugins: {
        'tailwindcss/nesting': 'postcss-nesting', 
        tailwindcss: tailwind,
        autoprefixer: autoprefixer,
        'postcss-simple-vars': simpleVars,
        'postcss-mixins': postcssMixins,

    }
}
