import startsWith from '@quillio/startsWith';

export default (string) => !startsWith(string, '0') && Number.isInteger(Number.parseFloat(string));