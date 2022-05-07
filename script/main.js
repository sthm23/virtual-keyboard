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
export const notSwitcher = ["Backspace", "Tab", 'Delete', "CapsLock", "Enter", "ShiftLeft",
"ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight","ControlRight",];

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


export function innerTextHTML(){
    buttons.forEach((item, ind)=>{
        item.tag.textContent = keys[ind].eng;
    });
}

export function innerEngTitle(){
    title.innerText(textTitle[0].eng);
    subtitle.innerText(textTitle[1].eng);
    subtitleBottom.innerText(textTitle[2].eng);
}

export function innerRuTitle(){
    title.innerText(textTitle[0].ru);
    subtitle.innerText(textTitle[1].ru);
    subtitleBottom.innerText(textTitle[2].ru);
}

export function shiftActive(){
    buttons.forEach((item, ind)=>{
       if(!notSwitcher.includes(item.tag.dataset.key)){        
           if(keys[ind].shift != undefined){
                item.tag.textContent = keys[ind].shift;
           }else{
               item.tag.textContent = keys[ind].eng.toUpperCase();
           }   
       }
    });
}
// export function shiftDeactive(){
//     buttons.forEach((item, ind)=>{
//        if(!notSwitcher.includes(item.tag.dataset.key)){
//            if(keys.shift != undefined){
//                 item.tag.textContent = keys[ind].eng;
//            }else{
                
//            }
           
//        }
//     });
// }