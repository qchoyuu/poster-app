const path = require('path')
const isExclude = path.join('src', 'modules', 'pc')
module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {
        // rootValue: 37.5,
        rootValue ({ file }) {
            return file.indexOf('vant') !== -1 ? 37.5 : 75
        },
        // unitPrecision: 5,
        // propList: ['*', '!font-size'],
        propList: ['*'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 2,
        exclude: isExclude,
        },
    },
}  