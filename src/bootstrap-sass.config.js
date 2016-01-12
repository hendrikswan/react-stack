module.exports = {
  debug: false, // print out the full generated scss file
  styleLoader: "style-loader!css-loader!sass-loader", // see example for the ExtractTextPlugin
  scripts: {
  },
  styles: {
    'mixins': true,

    'normalize': true,
    'print': true,
    'glyphicons': false,

    'scaffolding': true,
    'type': true,
    'code': true,
    'grid': true,
    'tables': true,
    'forms': true,
    'buttons': true,

    'component-animations': true,
    'dropdowns': true,
    'button-groups': true,
    'input-groups': true,
    'navs': true,
    'navbar': true,
    'breadcrumbs': true,
    'pagination': true,
    'pager': true,
    'labels': true,
    'badges': true,
    'jumbotron': true,
    'thumbnails': true,
    'alerts': true,
    'progress-bars': true,
    'media': true,
    'list-group': true,
    'panels': true,
    'wells': true,
    'responsive-embed': true,
    'close': true,

    'modals': true,
    'tooltip': true,
    'popovers': true,
    'carousel': true,

    'utilities': true,
    'responsive-utilities': true
  }
};
