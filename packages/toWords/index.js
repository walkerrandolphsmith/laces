import toSpaceCase from '@quillio/stringy-toSpaceCase';

export default string => toSpaceCase(string).split(' ').filter(w => !!w);
