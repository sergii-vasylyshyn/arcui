const NO_LANG = '[NO TRANSLATE]';
const languageMaker = (curLang, html) => {

    const languageContainer = document.getElementById('language-container');
    let html = languageContainer.innerHTML;
    const halfRe = html.split('{=');
    const baseFromHtml = {};
    
    let f = false;
    halfRe.forEach((v) => {
        if ( f ) baseFromHtml[v.split('=}')[0]] = baseFromHtml[v.split('=}')[0]] ? baseFromHtml[v.split('=}')[0]] + 1 : 1;
        f = true;
    });

    for (key in baseFromHtml) {
        const re = '{='+key+'=}';
        const string = curLang[key] ? curLang[key] : NO_LANG
        html = html.replace(new RegExp(re, 'g'), string);
    }

    return html;

}

const t = (word) => {
    return curLang[word] ? curLang[word] : NO_LANG
}