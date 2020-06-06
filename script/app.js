const navSlide = () => {
    const burger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // toggling nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // animating links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }          
        });

        // changing hamburger
        burger.classList.toggle('toggle');

    });

}   


navSlide();

// building navbar

const navigation = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section');


const navBuilder = () => {
    
    let navUI = '';

    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class='nav-button'href="#${sectionID}">${sectionDataNav}</a></li>`;
        // console.log(sectionDataNav);
        // console.log(sectionID)

    });
    // appending all elements to nav 
    navigation.innerHTML = navUI;

};

navBuilder();

// getting position and size of element and checking for if it is in viewport
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// removing active class
const removeActive = (section) => {

    section.classList.remove('your-active-class');
    // section.style.cssText = "filter: blur(2px);"
    // section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    // document.getElementById(`${section.id}`).style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

};

// adding active class
const addActive = (conditional, section) => {
    if (conditional){
        section.classList.add('your-active-class');
        // section.style.cssText = "box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(100, 100, 100, 0.3);"
        // document.getElementById(`${section.id}`).style.cssText = "background-color: lightBlue;";
    }
    // if(section.id=="section2"){
        // console.log("you are in section 2");
        // section.classList.toggle('.w3-container w3-center w3-animate-left');
    // }
};

// implementing actual function

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        const inviewport = () => elementOffset < 400 && elementOffset >= -100;

        removeActive(section);
        addActive(inviewport(), section);

        // console.log("function is running");
    })

}

window.addEventListener('scroll', sectionActivation);

const scrolling = () => {

    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0; i<sections; i++){
                sections[i].addEventListener('click', sectionScroll(link));
            }
        });
    });
};


scrolling();