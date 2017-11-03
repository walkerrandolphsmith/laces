export default (x, y) => {
    let isMismatch = x.length === y.length ? 0 : 1;
    if(isMismatch) {
        y = x;
    }

    for(let i = 0, il = x.length; i < il; i++) {
        isMismatch |= (x.charCodeAt(i) ^ y.charCodeAt(i))
    }

    return !isMismatch;
}