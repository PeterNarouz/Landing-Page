/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




function applyActiveClass(e) {
    const elems = document.querySelectorAll(".active-class");
    [].forEach.call(elems, function (el) {
        el.classList.remove("active-class");
        el.classList.add("menu__link");
    });
    e.target.className = "active-class";

    const section = document.getElementById(e.target.text);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    const sections = document.querySelectorAll(".your-active-class");
    [].forEach.call(sections, function (sec) {
        sec.classList.remove("your-active-class");
    });
    section.classList.add("your-active-class")
}



window.addEventListener('scroll', () => {
    const pageSections = document.querySelectorAll('section')
    pageSections.forEach((section) => {
        let rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.top < 150) {
            pageSections.forEach((remover) => {
                remover.classList.remove('your-active-class');
            });
            section.classList.add('your-active-class');
            const navLinks = document.querySelectorAll("a");
            if (section.id) {
                [].forEach.call(navLinks, function (a) {
                    if (a.text === section.id) {
                        a.classList.add("active-class");
                    } else {
                        a.classList.remove("active-class");
                        a.classList.add("menu__link");
                    }
                });
            }
        }

    })

})



function applytoggleNav() {
    const bars = document.getElementById('menu-bars')
    bars.classList.toggle('change1');
    const navB = document.querySelector('.navbar__menu')
    navB.classList.toggle('change');
    if (navB.classList.contains('change')) {
        navB.classList.add('change')
    } else {
        navB.classList.remove('change')
    }
}

