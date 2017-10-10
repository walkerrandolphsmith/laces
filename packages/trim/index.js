//import trimLeft from '@quillio/trimLeft';
//import trimRight from '@quillio/trimRight';

export default (string, pattern=' ') => string
    .replace(new RegExp(`^\\${pattern}*`), '')
    .replace(new RegExp(`\\${pattern}*$`), '')