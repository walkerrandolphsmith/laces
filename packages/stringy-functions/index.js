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
import repeat from '@quillio/repeat';
import reverse from '@quillio/reverse';
import slugify from '@quillio/slugify';
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
import toUpperCase from '@quillio/toUpperCase';
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
    repeat,
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
    toChars,
    toCodePoints,
    toLines
};

export default {
    ...manipulations,
    ...queries,
    ...unwrappers
}