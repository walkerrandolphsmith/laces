import toKebabCase from '@quillio/stringy-toKebabCase';
import latinise from '@quillio/stringy-latinise';

export default (string = '') => latinise(toKebabCase(string));
