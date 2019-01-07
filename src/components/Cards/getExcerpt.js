const getExcerpt = (str, excerptLength) => {
    if(str.length > excerptLength){
        let newStr = str.slice(0, excerptLength);
        newStr = newStr.split(/\s+/);
        newStr.pop();
        return newStr.join(' ')+" ...";
    }
    return str;
}

export default getExcerpt;