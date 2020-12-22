/*Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters & , < , > , " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.*/

//////////////////MINE//////////////////////////
const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
}


function convertHTML(str) {
    let keys = Object.keys(htmlEntities);
    console.log(keys);

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (str[i] === keys[j]) {
                str = str.replace(str[i], htmlEntities[str[i]])
            }
        }
    }
    return str;
}

//////////////////FLORIN//////////////////////////
function convertHTMLFLO(str) {
    for (let key in htmlEntities) {
        const re = new RegExp(key, "g");
        str = str.replace(re, htmlEntities[key]);
    }
    return str;
}
//////////////////TEST//////////////////////////
console.log(convertHTML("Dolce < > Gabbana"));
console.log(convertHTMLFLO('Sixty > > twelve')); //"Sixty &gt; twelve"