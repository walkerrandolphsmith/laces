import startsWith from '@quillio/stringy-startsWith';

export default (string) => !startsWith(string, '0') && Number.isInteger(Number.parseFloat(string));