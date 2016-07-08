## postcss-flexbox demos

#### (Demo link)[http://htmlpreview.github.io/?https://github.com/archana-s/postcss-flexbox-tutorial/blob/master/index.html]

### Feature set
There are three examples demonstrating the simplicity of using postcss-flexbox to build layouts.
* Demo 1 - Simple horizontal layout
* Demo 2 - Horizontal layout + spacing items in the container differently.
* Demo 3 - Vertical layout to build a neat accordion menu.

### Code structure
* index.html - The main HTML file
* src/*.css - all the source files where you can specify the postcss-flexbox properties and values
* dist/*.css - the postcss-run, modified, production-ready CSS

### How to run
* npm install gulp
* npm install gulp-postcss
* npm install postcss-flexbox
* npm install autoprefixer
* gulp process-css - This will process the src css files using the PostCSS plugins and deliver them to the dist directory.
* View the index.html file to see the examples.
