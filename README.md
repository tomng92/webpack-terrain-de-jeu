// On commence avec article
// 1) https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.d8gvsfh13
// 2) https://angular.io/docs/ts/latest/guide/webpack.html
// 3) https://medium.com/@jeff.boothe/angular-cli-meets-webpack-7c9b1a1e1e89#.p81yzviwj

// 1) creer un simple projet
// 1.5) > npm install webpack webpack-dev-server typings ts-loader --save-dev
//      > node_modules\.bin\typings install dt~es6-shim --global
//
// 2) ajouter webpack.config.js, index.html, app.ts
// 3) lancer: 
//     a) webpack --watch 
//     b) webpack-dev-server --inline
// 4) http://localhost:8080
//    --watch recompile aux changements
//    --inline evite de mettre localhost:8080/webpack-dev-server
// 5) Dans Intellij, disabler le -

webpack.config.js
=================
module.exports = {
    entry: "./app.ts",
    output: {
        filename: "bundle.js"
    },
    watch: true
}

index.html
============
<html>
<body>
<script src="bundle.js"></script>
</body>
</html>

app.ts
=======
document.write('welcome to my new  app');
console.log('app loaded');
