const mix = require('laravel-mix');
if (mix.inProduction()) {
    var name =  '[name].[chunkhash:8].js'
}else{
    var name =  '[name].js'
}
mix.webpackConfig({
    output: {
        chunkFilename: name,
    },
    // plugins: [
    //     new VuetifyLoaderPlugin()
    // ]
});
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')