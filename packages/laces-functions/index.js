import camalize from '@laces/camalize';
import capitalize from '@laces/capitalize';
import charAt from '@laces/charAt';
import chompLeft from '@laces/chompLeft';
import chompRight from '@laces/chompRight';
import clamp from '@laces/clamp';
import collapse from '@laces/collapse';
import endsWith from '@laces/endsWith';
import escapeHtml from '@laces/escapeHtml';
import escapeRegex from '@laces/escapeRegex';
import isAlpha from '@laces/isAlpha';
import isAlphaNumeric from '@laces/isAlphaNumeric';
import isBetween from '@laces/isBetween';
import isBlank from '@laces/isBlank';
import isEmpty from '@laces/isEmpty';
import isInteger from '@laces/isInteger';
import isMatch from '@laces/isMatch';
import isNaturalNumber from '@laces/isNaturalNumber';
import isNumeric from '@laces/isNumeric';
import isReal from '@laces/isReal';
import latinise from '@laces/latinise';
import padLeft from '@laces/padLeft';
import padRight from '@laces/padRight';
import remove from '@laces/remove';
import removeFirst from '@laces/removeFirst';
import repeat from '@laces/repeat';
import replace from '@laces/replace';
import reverse from '@laces/reverse';
import slugify from '@laces/slugify';
import split from '@laces/split';
import startsWith from '@laces/startsWith';
import takeFirst from '@laces/takeFirst';
import takeLast from '@laces/takeLast';
import takeWhile from '@laces/takeWhile';
import template from '@laces/template';
import toCamelCase from '@laces/toCamelCase';
import toChars from '@laces/toChars';
import toCodePoints from '@laces/toCodePoints';
import toKebabCase from '@laces/toKebabCase';
import toLines from '@laces/toLines';
import toLowerCase from '@laces/toLowerCase';
import toSnakeCase from '@laces/toSnakeCase';
import toSpaceCase from '@laces/toSpaceCase';
import toUpperCase from '@laces/toUpperCase';
import toWords from '@laces/toWords';
import trim from '@laces/trim';
import trimLeft from '@laces/trimLeft';
import trimRight from '@laces/trimRight';

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
