import {main, wrapper, title, textarea, keyboards, subtitle, shiftActive,
    innerTextHTML, notSwitcher, subtitleBottom, buttons, innerEngTitle, innerRuTitle} from './main.js';
import * as footerItems from './footer.js';

const body = document.body;
const obj = {
    CapsLock: false,
    shift: false,
    lang: {
        eng: true,
        ru: false,
    }
};

innerTextHTML();
function languageChanger(){
    if(obj.lang.eng){
        innerEngTitle();
    }else{
        innerRuTitle();
    }
}
languageChanger();

//write with mouse
keyboards.tag.addEventListener('click', (e)=>{
    const target = e.target;
    buttons.forEach(item=>{
        if(item.tag == target){
            // console.log(item);
            write(target, item.upper);
        }
    });
});


//keyboard 
body.addEventListener('keydown', (e)=>{
    e.preventDefault();

    buttons.forEach(item=>{
        
        if(item.tag.dataset.key === e.code){
            item.addClassList('key-active');
            write(item.tag);
            if(item.tag.textContent == 'Shift'){
                if(!obj.shift){
                    obj.shift = true;
                    shiftActive();
                }
            }
            
            
        }
    });
});
body.addEventListener('keyup', (e)=>{
    e.preventDefault();

    buttons.forEach(item=>{
        if(item.tag.dataset.key === e.code){
            item.tag.classList.remove('key-active');
            // if(item.tag.dataset.key === e.code){
                if(item.tag.textContent == 'Shift'){
                    if(obj.shift){
                        obj.shift = false;
                        // shiftDeactive();
                        innerTextHTML()
                    }
                }
            // }
        }
    });
});

function write(elem, item){
    if(elem.textContent == 'Backspace'){
        let str = removeLeft(textarea.tag.value);
        textarea.tag.value = str;
    }else if(elem.textContent == 'Space'){
        textarea.tag.value += ' ';
    }else if(elem.textContent == 'Enter'){
        textarea.tag.value += '\n';
    }else if(elem.textContent == 'Tab'){
        textarea.tag.value += '    ';
    }else if(elem.textContent == 'Window'){
        
    }else if(elem.textContent == 'CapsLock'){
        if(!obj.CapsLock){
            capslockSwitcher();
            obj.CapsLock = true;
            elem.classList.toggle('caps-lock-active');
        }else{
            capslockSwitcher();
            obj.CapsLock = false;
            elem.classList.toggle('caps-lock-active');
        }
    }else if(elem.textContent == 'Shift'){

    }else if(elem.textContent == 'Del'){
        
    }else if(elem.textContent == 'ctrl'){
        
    }else if(elem.textContent == 'Alt'){
        
    }else{
        textarea.tag.value += elem.textContent;
    }
}

function removeLeft(str){
    let len = str.length-1;
    let a = str.split('');
    a.splice(len, 1);
    return a.join('');
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

