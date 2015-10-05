require.config({
  paths: {
    outside: 'outside',
    theModule: 'theModule',
    requirejs: '../lib/requirejs/require'
  }
});

require(['outside']);
