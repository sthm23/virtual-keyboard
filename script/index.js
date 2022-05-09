import {textarea, keyboards, notSwitcher, buttons, innerTitle} from "./main.js";
import {createFooter} from "./footer.js";
import {keys} from "./keybords.js";
createFooter();
const body = document.body;

export const obj = {
    CapsLock: false,
    shift: false,
    ctrl: false,
    lang: "eng",
    ruShift: ["ё", "х", "ъ", "ж", "э", "б", "ю"],
};
// setLocalStorage();
function setLocalStorage(){
    if(obj.lang === "eng"){
        localStorage.setItem("languag", "ru");
    }else{
        localStorage.setItem("languag", "eng");
    }
}

obj.lang = localStorage.getItem("languag");


//write with mouse
keyboards.tag.addEventListener("click", (e)=>{
    const target = e.target;
    buttons.forEach(item=>{
        if(item.tag == target){
            write(target);
        }
    });
});
keyboards.tag.addEventListener("mousedown", (e)=>{
    const target = e.target;
    buttons.forEach(item=>{
        if(item.tag == target && target.textContent == "Shift"){
            if(!obj.shift){
                obj.shift = true;
                shiftActive();
            }
        }else if(item.tag == target && target.textContent == "ctrl"){
            obj.ctrl = true;
        }
    });
});
keyboards.tag.addEventListener("mouseup", (e)=>{
    const target = e.target;
    buttons.forEach(item=>{
        if(item.tag == target && target.textContent == "Shift"){
            if(obj.shift){
                obj.shift = false;
                shiftDeactive();
            }
        }else if(item.tag == target && target.textContent == "ctrl"){
            obj.ctrl = false;
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
            if(item.tag.textContent === "ctrl"){
                obj.ctrl = true;
                
            }else if(item.tag.textContent == "Shift"){
                if(!obj.shift){
                    obj.shift = true;
                    shiftActive();
                }
            }
        }
        
    });
});
body.addEventListener("keyup", (e)=>{
    e.preventDefault();

    buttons.forEach(item=>{
        if(item.tag.dataset.key === e.code){
            item.tag.classList.remove("key-active");
                if(item.tag.textContent == "Shift"){
                    if(obj.shift){
                        obj.shift = false;
                        shiftDeactive();
                    }
                }else if(item.tag.textContent == "ctrl"){
                    obj.ctrl = false;
                }
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
        // key ctrl
    }else if(elem.textContent == "Alt"){
        if(obj.ctrl){
            togleLangKeys();
        }
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

function shiftActive(){
    buttons.forEach((item, ind)=>{
       if(obj.lang == "ru"){
        if(!notSwitcher.includes(item.tag.dataset.key)){        
            if(keys[ind].shift != undefined){
                 item.tag.textContent = keys[ind].shift;
            }else{
                 item.tag.textContent = keys[ind].eng.toUpperCase();
            }   
        }
       }else{
            if(!notSwitcher.includes(item.tag.dataset.key)){        
                if(keys[ind].shift != undefined && !obj.ruShift.includes(item.tag.textContent)){
                    keys[ind].shift === "?" ? item.tag.textContent = "," : item.tag.textContent = keys[ind].shift;
                }else{
                    item.tag.textContent = keys[ind].ru.toUpperCase();
                }   
            }
       }
    });
}
function shiftDeactive(){
    buttons.forEach((item, ind)=>{
        if(obj.lang == "ru"){
         if(!notSwitcher.includes(item.tag.dataset.key)){        
            if(obj.CapsLock){
                item.tag.textContent = keys[ind].eng.toUpperCase();
            }else{
                item.tag.textContent = keys[ind].eng;
            }
         }
        }
        else{
             if(!notSwitcher.includes(item.tag.dataset.key)){        
                if(obj.CapsLock){
                    item.tag.textContent = keys[ind].ru.toUpperCase();
                }else{
                    item.tag.textContent = keys[ind].ru;
                }
             }
        }
     });
}
function togleLangKeys(){
    if(obj.ctrl && !obj.alt){
        languageChanger();
    }else{
        languageChanger();
    }
}

function languageChanger(){
    if(obj.lang == "ru"){
        innerTitle();
        innerTextHTML();
        obj.lang = "eng";
        setLocalStorage();
    }else{
        innerTitle();
        innerTextHTML();
        obj.lang = "ru";
        setLocalStorage();
    }
}

function innerTextHTML(){
    buttons.forEach((item, ind)=>{
        if(obj.lang == "eng"){
            if(obj.CapsLock && !notSwitcher.includes(keys[ind].code)){
                    item.tag.textContent = keys[ind].eng.toUpperCase();
            }else{
                item.tag.textContent = keys[ind].eng;
            }
        }else{
            if(obj.CapsLock && !notSwitcher.includes(keys[ind].code)){
                item.tag.textContent = keys[ind].ru.toUpperCase();
            }else{
                item.tag.textContent = keys[ind].ru;
            }
        }
    });
}
languageChanger();



