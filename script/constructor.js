export class Keyboard {
    constructor(tag){
        this.tag = document.createElement(tag);
        this.lang = true;
        this.capsLock = false;
        this.upper = true;
    }

    addClassList(className){
        this.tag.classList.add(className);
    }
    addDataSet(item){
        this.tag.dataset.key = item;
    }
    appending(childTag){
        this.tag.append(childTag);
    }
    innerText(text){
        this.tag.textContent = text;
    }
    innerAlt(text){
        this.tag.alt = text;
    }
    innerSrc(text){
        this.tag.src = text;
    }
    innerHref(text){
        this.tag.href = text;
    }
    setLang(){
        this.lang = false;
    }

}
export const body = document.body;