require('@babel/register');
require('ts-node').register({ transpileOnly: true });
// testing //
require('./helpers/setup-helper');

window.SVGPathElement = window.SVGPathElement || { prototype: {} };
global.indexedDB = {};
