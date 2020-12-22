/////////////////MINE/////////////////////////////
function spinalCase(str) {

    // The regex $1 means the findings, and are replaced by the same found item with a SPACE
    str = str.replace(/([A-Z])/g, ' $1').trim();
    console.log(str);
    str = str.toLowerCase();

    str = str.replace(/\s\s/gi, ' ');

    str = str.replace(/[\s_-]+/gi, '-');
    console.log(str)
    return str;
}

/////////////////FLORIN/////////////////////////////
function spinalCase2(str) {

    // The regex $1 means the findings, and are replaced by the same found item with a SPACE
    return str.replace(/([A-Z])/g, ' $1')
        .trim()
        .split(/[\W_]/)
        .filter(item => item !== '')
        .map(item => item.toLowerCase())
        .join('-');
}


console.log(spinalCase2('This Is Spinal Tap'));
console.log(spinalCase2('The_Andy_Griffith_Show'));
spinalCase2('TheAndyGriffithShow');

//s = s.replace(/([A-Z])/g, ' $1').trim()