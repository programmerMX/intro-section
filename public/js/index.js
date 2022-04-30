"use strict";
// import { BtnModel } from "./btns/btn.model";
const hamImg = document.querySelector('.ham-img');
const nav = document.querySelector('.nav');
const closeIcon = document.querySelector('.close-icon__img');
const iconsArrow = document.querySelectorAll('.icon-arrow');
const hamBtn = {
    id: null,
    title: null,
    active: null,
    target: null
};
const arrowIconsBox = [];
const hamActive = (nav) => {
    nav.classList.replace('desactive-nav', 'active-nav');
    hamBtn.active = true;
};
const hamDesactive = (nav) => {
    nav.classList.replace('active-nav', 'desactive-nav');
    hamBtn.active = false;
    console.log(hamBtn.active);
};
hamImg.addEventListener('click', (e) => {
    if (hamBtn.active === null) {
        const target = e.target;
        hamBtn.id = Math.random();
        hamBtn.title = target.classList[1];
        hamBtn.target = target;
        hamBtn.active = true;
        hamActive(nav);
        return;
    }
    ;
    if (hamBtn.active === false)
        hamActive(nav);
});
closeIcon.addEventListener('click', (e) => {
    if (hamBtn.active === true)
        hamDesactive(nav);
});
const createArrow = (arrow) => {
    const newArrow = {
        id: Math.random(),
        title: arrow.classList[1],
        active: null,
        target: arrow
    };
    arrowIconsBox.push(newArrow);
};
const handleFeacture = (arrowIcon) => {
    const feactureContent = document.getElementById('feacture-content');
    if (arrowIcon.active === null || arrowIcon.active === false) {
        feactureContent.classList.replace('nav-item__content', 'nav-item__content-active');
        arrowIcon.active = true;
        const imgArrow = arrowIcon.target;
        imgArrow.src = '../images/icon-arrow-up.svg';
    }
    else {
        feactureContent.classList.replace('nav-item__content-active', 'nav-item__content');
        arrowIcon.active = false;
        const imgArrow = arrowIcon.target;
        imgArrow.src = '../images/icon-arrow-down.svg';
    }
};
const handleCompany = (arrowIcon) => {
    const companyContent = document.getElementById('company-content');
    if (arrowIcon.active === null || arrowIcon.active === false) {
        companyContent.classList.replace('nav-item__content', 'nav-item__content-active');
        arrowIcon.active = true;
        const imgArrow = arrowIcon.target;
        imgArrow.src = '../images/icon-arrow-up.svg';
    }
    else {
        companyContent.classList.replace('nav-item__content-active', 'nav-item__content');
        arrowIcon.active = false;
        const imgArrow = arrowIcon.target;
        imgArrow.src = '../images/icon-arrow-down.svg';
    }
};
const handleArrow = (arrow) => {
    arrow.addEventListener('click', () => {
        if (arrow.classList[1] === 'icon-arrow__feactures') {
            const arrowIcon = arrowIconsBox.find(item => item.title === 'icon-arrow__feactures');
            if (arrowIcon)
                handleFeacture(arrowIcon);
        }
        else if (arrow.classList[1] === 'icon-arrow__company') {
            const arrowIcon = arrowIconsBox.find(item => item.title === 'icon-arrow__company');
            if (arrowIcon)
                handleCompany(arrowIcon);
        }
    });
};
iconsArrow.forEach(icon => {
    createArrow(icon);
    handleArrow(icon);
});
