require('@babel/register');
require('ts-node').register({ transpileOnly: false });
// testing //
require('./helpers/setup-helper');

window.SVGPathElement = window.SVGPathElement || { prototype: {} };
global.indexedDB = {};
