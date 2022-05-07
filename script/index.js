import {textarea, keyboards, shiftActive, innerRuTextHTML,
    innerTextHTML, notSwitcher, buttons, innerEngTitle, innerRuTitle} from "./main.js";
import {createFooter} from "./footer.js";
createFooter();
const body = document.body;

const obj = {
    CapsLock: false,
    shift: false,
    lang: {
        eng: true,
        ru: false,
    }
};


function languageChanger(){
    if(obj.lang.eng){
        obj.lang.eng = false;
        obj.lang.ru = true;
        innerEngTitle();
        innerTextHTML();
    }else{
        obj.lang.eng = true;
        obj.lang.ru = false;
        innerRuTitle();
        innerRuTextHTML();
    }
}
languageChanger();
innerTextHTML();
//write with mouse
keyboards.tag.addEventListener("click", (e)=>{
    const target = e.target;
    buttons.forEach(item=>{
        if(item.tag == target){
            // console.log(item);
            write(target, item.upper);
        }
    });
});


//keyboard 
body.addEventListener("keydown", (e)=>{
    e.preventDefault();

    buttons.forEach(item=>{
        if(item.tag.dataset.key === e.code){
            item.addClassList("key-active");
            write(item.tag);
            if(item.tag.textContent == "Shift"){
                if(!obj.shift){
                    obj.shift = true;
                    shiftActive();
                }
            }else if(obj.shift && item.tag.textContent == "Alt"){
                languageChanger();
            }
        }
        
    });
});
body.addEventListener("keyup", (e)=>{
    e.preventDefault();

    buttons.forEach(item=>{
        if(item.tag.dataset.key === e.code){
            item.tag.classList.remove("key-active");
            // if(item.tag.dataset.key === e.code){
                if(item.tag.textContent == "Shift"){
                    if(obj.shift){
                        obj.shift = false;
                        // shiftDeactive();
                        innerTextHTML();
                    }
                }
            // }
        }
    });
});

function write(elem){
    if(elem.textContent == "Backspace"){
        if(textarea.tag.selectionStart){
            textarea.tag.setRangeText("", textarea.tag.selectionStart-1, textarea.tag.selectionEnd, "end");
        }
    }else if(elem.textContent == "Space"){
        textarea.tag.value += " ";
    }else if(elem.textContent == "Enter"){
        textarea.tag.value += "\n";
    }else if(elem.textContent == "Tab"){
        textarea.tag.value += "    ";
    }else if(elem.textContent == "Window"){
        // кнопка виндов не будет работать
    }else if(elem.textContent == "CapsLock"){
        if(!obj.CapsLock){
            capslockSwitcher();
            obj.CapsLock = true;
            elem.classList.toggle("caps-lock-active");
        }else{
            capslockSwitcher();
            obj.CapsLock = false;
            elem.classList.toggle("caps-lock-active");
        }
    }else if(elem.textContent == "Shift"){
        // кнопка виндов не будет работать
    }else if(elem.textContent == "Del"){
        if(textarea.tag.selectionEnd+1){
            textarea.tag.setRangeText("", textarea.tag.selectionStart, textarea.tag.selectionEnd+1, "end");
        }
    }else if(elem.textContent == "ctrl"){
       // кнопка виндов не будет работать
    }else if(elem.textContent == "Alt"){
        // кнопка виндов не будет работать
    }else{
        textarea.tag.setRangeText(elem.textContent, textarea.tag.selectionStart, textarea.tag.selectionEnd, "end");
    }
}

function capslockSwitcher(){
    buttons.forEach((item)=>{
        if(!obj.CapsLock){
            if(!notSwitcher.includes(item.tag.dataset.key)){
                item.tag.textContent = item.tag.textContent.toUpperCase();
            }
        }else{
            if(!notSwitcher.includes(item.tag.dataset.key)){
                item.tag.textContent = item.tag.textContent.toLowerCase();
            }
        }
    });
}
// capslockSwitcher();