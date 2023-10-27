export function decodeHtml(html :string){
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}