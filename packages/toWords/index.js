import toSpaceCase from '@quillio/toSpaceCase';

export default (string) => toSpaceCase(string).split(' ').filter(w => !!w)