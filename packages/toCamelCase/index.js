import capitalize from '@quillio/stringy-capitalize';

export default string => string.replace(
  /[_|\-|\s](\w{1})/g,
  (_, __, index, original) => capitalize(original.substring(index + 1, index + 2)),
);
