import camalize from '@quillio/camalize';
import capitalize from '@quillio/capitalize';
import charAt from '@quillio/charAt';
import chompLeft from '@quillio/chompLeft';
import chompRight from '@quillio/chompRight';
import clamp from '@quillio/clamp';
import collapse from '@quillio/collapse';
import endsWith from '@quillio/endsWith';
import isAlpha from '@quillio/isAlpha';
import isAlphaNumeric from '@quillio/isAlphaNumeric';
import isBetween from '@quillio/isBetween';
import isBlank from '@quillio/isBlank';
import isEmpty from '@quillio/isEmpty';
import isInteger from '@quillio/isInteger';
import isNaturalNumber from '@quillio/isNaturalNumber';
import isNumeric from '@quillio/isNumeric';
import isReal from '@quillio/isReal';
import latinise from '@quillio/latinise';
import padLeft from '@quillio/padLeft';
import padRight from '@quillio/padRight';
import remove from '@quillio/remove';
import removeFirst from '@quillio/removeFirst';
import repeat from '@quillio/repeat';
import replace from '@quillio/replace';
import reverse from '@quillio/reverse';
import slugify from '@quillio/slugify';
import split from '@quillio/split';
import startsWith from '@quillio/startsWith';
import takeFirst from '@quillio/takeFirst';
import takeLast from '@quillio/takeLast';
import takeWhile from '@quillio/takeWhile';
import template from '@quillio/template';
import toCamelCase from '@quillio/toCamelCase';
import toChars from '@quillio/toChars';
import toCodePoints from '@quillio/toCodePoints';
import toKebabCase from '@quillio/toKebabCase';
import toLines from '@quillio/toLines';
import toLowerCase from '@quillio/toLowerCase';
import toSnakeCase from '@quillio/toSnakeCase';
import toSpaceCase from '@quillio/toSpaceCase';
import toUpperCase from '@quillio/toUpperCase';
import toWords from '@quillio/toWords';
import trim from '@quillio/trim';
import trimLeft from '@quillio/trimLeft';
import trimRight from '@quillio/trimRight';

export const manipulations = {
    camalize,
    capitalize,
    charAt,
    chompLeft,
    chompRight,
    clamp,
    collapse,
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
    trimRight
};


const queries = {
    endsWith,
    isAlpha,
    isAlphaNumeric,
    isBetween,
    isBlank,
    isEmpty,
    isInteger,
    isNaturalNumber,
    isNumeric,
    isReal,
    startsWith
};

const unwrappers = {
    split,
    toChars,
    toCodePoints,
    toLines,
    toWords
};

export default {
    ...manipulations,
    ...queries,
    ...unwrappers
}