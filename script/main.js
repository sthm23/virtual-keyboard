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
    if(keys[i].description == 'Rshift'){
        button.addDataSet('Rshift');
    }else if(keys[i].description == 'Rctrl'){
        button.addDataSet('Rctrl');
    }else if(keys[i].description == 'Ralt'){
        button.addDataSet('Ralt');
    }else{
        button.addDataSet(`${keys[i].eng}`);
    }
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
    }else if(item.tag.dataset.key == 'Del'){
        item.addClassList('del');
    }else if(item.tag.dataset.key == 'CapsLock'){
        item.addClassList('caps-lock');
    }else if(item.tag.dataset.key == 'Enter'){
        item.addClassList('enter');
    }else if(item.tag.dataset.key == 'Shift'){
        item.addClassList('shift');
    }else if(item.tag.dataset.key == 'Rshift'){
        item.addClassList('shift');
    }else if(item.tag.dataset.key == 'Window'){
        item.addClassList('window');
    }else if(item.tag.dataset.key == 'Space'){
        item.addClassList('space');
    }else if(item.tag.dataset.key == 'Alt'){
        item.addClassList('alt');
    }else if(item.tag.dataset.key == 'Ralt'){
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


//keyboard 
keyboards.tag.addEventListener('click', (e)=>{
    buttons.forEach(item=>{
        if(item.tag == e.target){
            textarea.tag.value += item.tag.textContent; 
        }
    });
});