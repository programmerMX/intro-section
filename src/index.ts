// import { BtnModel } from "./btns/btn.model";

interface BtnBase{
    id:number | null,
    title: string | null,
    active:boolean | null,
    target: HTMLElement | null
}

interface BtnModel extends BtnBase{}

interface IconArrowModel extends BtnBase{}

const hamImg:HTMLElement = document.querySelector('.ham-img') as HTMLElement;
const nav:HTMLElement = document.querySelector('.nav') as HTMLElement;
const closeIcon:HTMLElement = document.querySelector('.close-icon__img') as HTMLElement;
const iconsArrow:NodeList = document.querySelectorAll('.icon-arrow') as NodeList;

const hamBtn:BtnModel = {
    id:null,
    title:null,
    active:null,
    target:null
}

const arrowIconsBox: IconArrowModel[] = []

const hamActive = (nav:HTMLElement)=>{
    nav.classList.replace('desactive-nav', 'active-nav')
    hamBtn.active = true;
    
}

const hamDesactive = (nav:HTMLElement)=>{
    nav.classList.replace('active-nav', 'desactive-nav')
    hamBtn.active = false;
    console.log(hamBtn.active);
}

hamImg.addEventListener('click', (e)=>{
     if(hamBtn.active === null){
         const target = e.target as HTMLElement
         
         hamBtn.id = Math.random();
         hamBtn.title = target.classList[1];
         hamBtn.target = target;
         hamBtn.active = true
         hamActive(nav);
         return;
     };

     
    if(hamBtn.active === false)hamActive(nav)
})

closeIcon.addEventListener('click', (e)=>{
    if(hamBtn.active === true)hamDesactive(nav)
})

const createArrow = (arrow:HTMLImageElement)=>{
    const newArrow:IconArrowModel = {
        id: Math.random(),
        title: arrow.classList[1],
        active:null,
        target:arrow as HTMLImageElement
    }
    
    arrowIconsBox.push(newArrow);
    
}

const handleFeacture = (arrowIcon:IconArrowModel)=>{
    const feactureContent = document.getElementById('feacture-content') as HTMLElement;

    if(arrowIcon.active === null || arrowIcon.active === false){
        feactureContent.classList.replace('nav-item__content', 'nav-item__content-active')
        arrowIcon.active = true;
        const imgArrow = arrowIcon.target as HTMLImageElement;
        imgArrow.src = '../images/icon-arrow-up.svg'
    } else {
        feactureContent.classList.replace('nav-item__content-active','nav-item__content');
        arrowIcon.active = false;
        const imgArrow = arrowIcon.target as HTMLImageElement;
        imgArrow.src = '../images/icon-arrow-down.svg'
    }
}

const handleCompany = (arrowIcon:IconArrowModel)=>{
    const companyContent = document.getElementById('company-content') as HTMLElement;

    if(arrowIcon.active === null || arrowIcon.active === false){
        companyContent.classList.replace('nav-item__content', 'nav-item__content-active')
        arrowIcon.active = true;
        const imgArrow = arrowIcon.target as HTMLImageElement;
        imgArrow.src = '../images/icon-arrow-up.svg'
        
    } else {
        companyContent.classList.replace('nav-item__content-active','nav-item__content');
        arrowIcon.active = false;
        const imgArrow = arrowIcon.target as HTMLImageElement;
        imgArrow.src = '../images/icon-arrow-down.svg'
    }
}

const handleArrow = (arrow:HTMLImageElement)=>{
    arrow.addEventListener('click', ()=>{
        if(arrow.classList[1] === 'icon-arrow__feactures'){
            const arrowIcon = arrowIconsBox.find(item=> item.title === 'icon-arrow__feactures')
            if(arrowIcon) handleFeacture(arrowIcon) 
        } else if(arrow.classList[1] === 'icon-arrow__company'){
            const arrowIcon = arrowIconsBox.find(item=> item.title === 'icon-arrow__company')
            if(arrowIcon) handleCompany(arrowIcon)
        }
    })
}

iconsArrow.forEach(icon=>{
    createArrow(icon as HTMLImageElement);
    handleArrow(icon as HTMLImageElement)
})