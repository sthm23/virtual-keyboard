import { Keyboard, body } from "./constructor.js";
import { keys, textTitle } from "./keybords.js";

// main
export const main = new Keyboard('main');
export const wrapper = new Keyboard('div');
export const title = new Keyboard('h1');
export const textarea = new Keyboard('textarea');
export const keyboards = new Keyboard('div');
export const subtitle = new Keyboard('h4');
export const subtitleBottom = new Keyboard('h4');
export let buttons = [];

for(let i = 0; i<keys.length; i++){
    let button = new Keyboard('button');
    button.addClassList('key');
    button.addDataSet(keys[i].code);
    buttons.push(button);
}

body.append(main.tag);
main.appending(wrapper.tag);
wrapper.appending(title.tag);
wrapper.appending(textarea.tag);
wrapper.appending(keyboards.tag);
wrapper.appending(subtitle.tag);
wrapper.appending(subtitleBottom.tag);

buttons.forEach(item=>{
    if(item.tag.dataset.key == 'Backspace'){
        item.addClassList('backspace');
    }else if(item.tag.dataset.key == 'Tab'){
        item.addClassList('tab');
    }else if(item.tag.dataset.key == 'Delete'){
        item.addClassList('del');
    }else if(item.tag.dataset.key == 'CapsLock'){
        item.addClassList('caps-lock');
    }else if(item.tag.dataset.key == 'Enter'){
        item.addClassList('enter');
    }else if(item.tag.dataset.key == 'ShiftLeft' || item.tag.dataset.key == 'ShiftRight'){
        item.addClassList('shift');
    }else if(item.tag.dataset.key == 'MetaLeft'){
        item.addClassList('window');
    }else if(item.tag.dataset.key == 'Space'){
        item.addClassList('space');
    }else if(item.tag.dataset.key == 'AltLeft' || item.tag.dataset.key == 'AltRight'){
        item.addClassList('alt');
    }
    keyboards.appending(item.tag);
});


main.addClassList('main');
wrapper.addClassList('wrapper');
title.addClassList('title');
subtitle.addDataSet('title');
keyboards.addClassList('keyboards');
subtitle.addClassList('subtitle');
subtitle.addDataSet('subtitle');
subtitleBottom.addClassList('subtitle');
subtitleBottom.addDataSet('lang-change');


buttons.forEach((item, ind)=>{
    item.tag.textContent = keys[ind].eng;
});
export function innerEngTitle(){
    title.innerText(textTitle[0].eng);
    subtitle.innerText(textTitle[1].eng);
    subtitleBottom.innerText(textTitle[2].eng);
}
innerEngTitle();
export function innerRuTitle(){
    title.innerText(textTitle[0].ru);
    subtitle.innerText(textTitle[1].ru);
    subtitleBottom.innerText(textTitle[2].ru);
}


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
// keyboards.tag.addEventListener('mouseup', (e)=>{
//     const target = e.target;
//     buttons.forEach(item=>{        
//         if(item.tag == target){
//             write(target, item.upper);
//         }
//     });
// });
//keyboard 
body.addEventListener('keydown', (e)=>{
    e.preventDefault();

    buttons.forEach(item=>{
        if(item.tag.dataset.key === e.code){
            console.log(item)
            item.addClassList('key-active');
            write(item.tag);
        }
    });
});
body.addEventListener('keyup', (e)=>{
    e.preventDefault();

    buttons.forEach(item=>{
        if(item.tag.dataset.key === e.code){
            item.tag.classList.remove('key-active');
            // write(item.tag);
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
        
    }else if(elem.textContent == 'Shift'){
            // upperCase(item);
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

function upperCase(bool){
    if(bool){
        bool = false;
        keys.forEach((item, ind)=>{
            if(item.shift){
                buttons[ind].tag.textContent = item.shift;
            }else if(item.code != 'Backspace' || item.code != 'Del' || item.code != 'Enter' || item.code != 'Tab' || item.code != 'CapsLock' || item.code != 'ShiftRight' || item.code != 'ShiftLeft'){
                buttons[ind].tag.textContent = buttons[ind].tag.textContent.toUpperCase();
            }
        });
    }else{
        bool = true;
        keys.forEach((item, ind)=>{
            buttons[ind].tag.textContent = item.eng;
        });
    }
}
