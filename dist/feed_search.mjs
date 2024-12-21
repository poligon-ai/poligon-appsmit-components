import y from"https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";var u={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function v(){if(p)return t;p=1;var R=y,c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function s(n,r,_){var e,o={},i=null,f=null;_!==void 0&&(i=""+_),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)l.call(r,e)&&!x.hasOwnProperty(e)&&(o[e]=r[e]);if(n&&n.defaultProps)for(e in r=n.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:c,type:n,key:i,ref:f,props:o,_owner:d.current}}return t.Fragment=a,t.jsx=s,t.jsxs=s,t}var m;function O(){return m||(m=1,u.exports=v()),u.exports}O();
