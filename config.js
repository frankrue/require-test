require.config({
  paths: {
    outside: 'outside',
    module: 'module',
    requirejs: '../lib/requirejs/require'
  }
});

require(['outside']);
