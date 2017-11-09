import camalize from '@quillio/stringy-camalize';
import capitalize from '@quillio/stringy-capitalize';
import charAt from '@quillio/stringy-charAt';
import chompLeft from '@quillio/stringy-chompLeft';
import chompRight from '@quillio/stringy-chompRight';
import clamp from '@quillio/stringy-clamp';
import collapse from '@quillio/stringy-collapse';
import endsWith from '@quillio/stringy-endsWith';
import escapeHtml from '@quillio/stringy-escapeHtml';
import escapeRegex from '@quillio/stringy-escapeRegex';
import isAlpha from '@quillio/stringy-isAlpha';
import isAlphaNumeric from '@quillio/stringy-isAlphaNumeric';
import isBetween from '@quillio/stringy-isBetween';
import isBlank from '@quillio/stringy-isBlank';
import isEmpty from '@quillio/stringy-isEmpty';
import isInteger from '@quillio/stringy-isInteger';
import isMatch from '@quillio/stringy-isMatch';
import isNaturalNumber from '@quillio/stringy-isNaturalNumber';
import isNumeric from '@quillio/stringy-isNumeric';
import isReal from '@quillio/stringy-isReal';
import latinise from '@quillio/stringy-latinise';
import padLeft from '@quillio/stringy-padLeft';
import padRight from '@quillio/stringy-padRight';
import remove from '@quillio/stringy-remove';
import removeFirst from '@quillio/stringy-removeFirst';
import repeat from '@quillio/stringy-repeat';
import replace from '@quillio/stringy-replace';
import reverse from '@quillio/stringy-reverse';
import slugify from '@quillio/stringy-slugify';
import split from '@quillio/stringy-split';
import startsWith from '@quillio/stringy-startsWith';
import takeFirst from '@quillio/stringy-takeFirst';
import takeLast from '@quillio/stringy-takeLast';
import takeWhile from '@quillio/stringy-takeWhile';
import template from '@quillio/stringy-template';
import toCamelCase from '@quillio/stringy-toCamelCase';
import toChars from '@quillio/stringy-toChars';
import toCodePoints from '@quillio/stringy-toCodePoints';
import toKebabCase from '@quillio/stringy-toKebabCase';
import toLines from '@quillio/stringy-toLines';
import toLowerCase from '@quillio/stringy-toLowerCase';
import toSnakeCase from '@quillio/stringy-toSnakeCase';
import toSpaceCase from '@quillio/stringy-toSpaceCase';
import toUpperCase from '@quillio/stringy-toUpperCase';
import toWords from '@quillio/stringy-toWords';
import trim from '@quillio/stringy-trim';
import trimLeft from '@quillio/stringy-trimLeft';
import trimRight from '@quillio/stringy-trimRight';

export const manipulations = {
  camalize,
  capitalize,
  charAt,
  chompLeft,
  chompRight,
  clamp,
  collapse,
  escapeHtml,
  escapeRegex,
  latinise,
  padLeft,
  padRight,
  remove,
  removeFirst,
  repeat,
  replace,
  reverse,
  slugify,
  template,
  takeFirst,
  takeLast,
  takeWhile,
  toCamelCase,
  toKebabCase,
  toLowerCase,
  toSnakeCase,
  toSpaceCase,
  toUpperCase,
  trim,
  trimLeft,
  trimRight,
};


const queries = {
  endsWith,
  isAlpha,
  isAlphaNumeric,
  isBetween,
  isBlank,
  isEmpty,
  isInteger,
  isMatch,
  isNaturalNumber,
  isNumeric,
  isReal,
  startsWith,
};

const unwrappers = {
  split,
  toChars,
  toCodePoints,
  toLines,
  toWords,
};

export default {
  ...manipulations,
  ...queries,
  ...unwrappers,
};
