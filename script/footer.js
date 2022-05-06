import { Keyboard, body } from "./constructor.js";
//footer
export const footer = new Keyboard('footer');
export const footerWrapper = new Keyboard('div');
export const left = new Keyboard('div');
export const center = new Keyboard('div');
export const right = new Keyboard('div');
export const aCenter = new Keyboard('a');
export const aRight = new Keyboard('a');
export const imgCenter = new Keyboard('img');
export const imgRight = new Keyboard('img');

body.append(footer.tag);
footer.appending(footerWrapper.tag);
footerWrapper.appending(left.tag);
footerWrapper.appending(center.tag);
footerWrapper.appending(right.tag);
center.appending(aCenter.tag);
right.appending(aRight.tag);
aCenter.appending(imgCenter.tag);
aRight.appending(imgRight.tag);

footer.addClassList('footer');
footerWrapper.addClassList('wrapper-footer');
left.addClassList('left');
right.addClassList('right');
center.addClassList('center');

left.innerText('© 2022 Tukhtamishev');
aCenter.innerHref('https://rs.school/js/');
aRight.innerHref('http://github.com/sthm23');
imgCenter.innerSrc("./assets/icons/rs_school.svg");
imgCenter.innerAlt("rs school icon");
imgRight.innerSrc("./assets/icons/github__icon.png");
imgRight.innerAlt("github icon");

// footer.addListenerClick();