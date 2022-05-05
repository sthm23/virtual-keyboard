
const main = document.createElement('main');
const footer = document.createElement('footer');
const wrapper = document.createElement('div');


function addSemantegs(){
    const body = document.body;
    body.append(footer);
    const wrapperFooter = document.createElement('div');
    wrapperFooter.classList.add('wrapper-footer');
    footer.append(wrapperFooter);
    const left = document.createElement('div');
    left.classList.add('left');
    left.textContent = '© 2022 Tukhtamishev';
    
    const center = document.createElement('div');
    center.classList.add('center');    
    const a = document.createElement('a');
    a.href = 'https://rs.school/js/';
    const img = document.createElement('img');
    img.src = './assets/icons/rs_school.svg';
    img.alt = 'rs school icon';
    center.append(a);
    a.append(img);
    
    const right = document.createElement('div');
    right.classList.add('right');    
    const a1 = document.createElement('a');
    a1.href = 'https:///github.com/sthm23';
    const img1 = document.createElement('img');
    img1.src = './assets/icons/github__icon.png';
    img1.alt = 'git hub icon';
    right.append(a1);
    a1.append(img1);
    
    wrapperFooter.append(left, center, right);
    
}
addSemantegs();
class keyboard {
    constructor(wrapper){
        this.wrapper = wrapper;
    }
    add(){

    }

}