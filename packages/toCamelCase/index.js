import capitalize from '@quillio/capitalize';

export default (string) => {
    console.log('red');
    return string.replace(
        /[_|\-|\s](\w{1})/g,
        (_, __, index, original) => capitalize(original.substring(index + 1, index + 2))
    );
}