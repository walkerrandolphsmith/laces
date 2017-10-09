export default (string=null) => {
    if(string === null) return true;
    if(string.trim() === '') return true;
    return false;
}