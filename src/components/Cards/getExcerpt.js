const getExcerpt = (str, excerptLength) => {
    if(str.length > excerptLength){
        return (str.split(/\s+/).slice(0, excerptLength).join(' ')+ " ...");
    }
    return str.split(/\s+/).slice(0, excerptLength).join(' ');
}

export default getExcerpt;