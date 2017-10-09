import toKebabCase from '@quillio/toKebabCase';
import latinise from '@quillio/latinise';

export default (string='') => latinise(toKebabCase(string));