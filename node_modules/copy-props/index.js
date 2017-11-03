'use strict';

var eachProps = require('each-props');
var isPlainObject = require('is-plain-object');

module.exports = function(src, dst, fromto, converter, reverse) {

  if (!isPlainObject(src)) {
    src = {};
  }

  if (!isPlainObject(dst)) {
    dst = {};
  }

  if (isPlainObject(fromto)) {
    fromto = onlyValueIsString(fromto);
  } else if (Array.isArray(fromto)) {
    fromto = arrayToObject(fromto);
  } else if (typeof fromto === 'boolean') {
    reverse = fromto;
    converter = noop;
    fromto = null;
  } else if (typeof fromto === 'function') {
    reverse = converter;
    converter = fromto;
    fromto = null;
  } else {
    fromto = null;
  }

  if (typeof converter !== 'function') {
    if (typeof converter === 'boolean') {
      reverse = converter;
      converter = noop;
    } else {
      converter = noop;
    }
  }

  if (typeof reverse !== 'boolean') {
    reverse = false;
  }

  if (reverse) {
    var tmp = src;
    src = dst;
    dst = tmp;

    if (fromto) {
      fromto = invert(fromto);
    }
  }

  var opts = {
    dest: dst,
    fromto: fromto,
    convert: converter,
  };

  if (fromto) {
    eachProps(src, copyWithFromto, opts);
    setParentEmptyObject(dst, fromto);
  } else {
    eachProps(src, copyWithoutFromto, opts);
  }

  return dst;
};

function copyWithFromto(value, keyChain, nodeInfo) {
  if (isPlainObject(value)) {
    return;
  }

  var dstKeyChains = nodeInfo.fromto[keyChain];
  if (!dstKeyChains) {
    return;
  }
  delete nodeInfo.fromto[keyChain];

  if (!Array.isArray(dstKeyChains)) {
    dstKeyChains = [dstKeyChains];
  }

  for (var i = 0, n = dstKeyChains.length; i < n; i++) {
    setDeep(nodeInfo.dest, dstKeyChains[i], function(dstValue, dstParent) {
      return nodeInfo.convert(value, keyChain, dstKeyChains[i], dstValue,
        dstParent);
    });
  }
}

function copyWithoutFromto(value, keyChain, nodeInfo) {
  if (isPlainObject(value)) {
    for (var k in value) {
      return;
    }
    setDeep(nodeInfo.dest, keyChain, newObject);
    return;
  }

  setDeep(nodeInfo.dest, keyChain, function(dstValue, dstParent) {
    return nodeInfo.convert(value, keyChain, keyChain, dstValue, dstParent);
  });
}

function newObject() {
  return {};
}

function noop(v) {
  return v;
}

function onlyValueIsString(obj) {
  var newObj = {};
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'string') {
      newObj[key] = val;
    }
  }
  return newObj;
}

function arrayToObject(arr) {
  var obj = {};
  for (var i = 0, n = arr.length; i < n; i++) {
    var elm = arr[i];
    if (typeof elm === 'string') {
      obj[elm] = elm;
    }
  }
  return obj;
}

function invert(fromto) {
  var inv = {};
  for (var key in fromto) {
    var val = fromto[key];
    if (!inv[val]) {
      inv[val] = [];
    }
    inv[val].push(key);
  }
  return inv;
}

function setDeep(obj, keyChain, valueCreator) {
  _setDeep(obj, keyChain.split('.'), valueCreator);
}

function _setDeep(obj, keyElems, valueCreator) {
  var key = keyElems.shift();
  if (!keyElems.length) {
    var value = valueCreator(obj[key], obj);
    if (value !== undefined) {
      obj[key] = value;
    }
    return;
  }

  if (!isPlainObject(obj[key])) {
    obj[key] = {};
  }
  _setDeep(obj[key], keyElems, valueCreator);
}

function setParentEmptyObject(obj, fromto) {
  for (var srcKeyChain in fromto) {
    var dstKeyChains = fromto[srcKeyChain];
    if (!Array.isArray(dstKeyChains)) {
      dstKeyChains = [dstKeyChains];
    }

    for (var i = 0, n = dstKeyChains.length; i < n; i++) {
      setDeep(obj, dstKeyChains[i], newUndefined);
    }
  }
}

function newUndefined() {
  return undefined;
}
