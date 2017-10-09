import capitalize from '@quillio/capitalize';

export default (string) => {
    return string.replace(
        /[_|-](\w{1})/g,
        (_, __, index, original) => capitalize(original.substring(index + 1, index + 2))
    );
}