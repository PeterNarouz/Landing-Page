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
 * Define 
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





// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/






//Global Variables
const pgSections = document.querySelectorAll('.sections');
let unList = document.querySelector('#navbar__list');
let documentFrag = document.createDocumentFragment();

// Build menu 

pgSections.forEach((section) => {
    function generate() {
        if (n = 0, n >= pgSections.length, n++) {
        console.log(n);
        }
    }

    let navName = section.getAttribute("data-nav");
    let liItem = document.createElement('li');
    let anchItem = document.createElement('a');
    let txtNd = document.createTextNode(navName);
    anchItem.appendChild(txtNd);
    liItem.appendChild(anchItem);
    documentFrag.appendChild(liItem);

    // Scroll to section on link click
    // Set sections as active
    liItem.addEventListener('click', applyActiveClass);
    
    function applyActiveClass(e) {
        const elems = document.querySelectorAll(".active-class");
        [].forEach.call(elems, function (el) {
            if (el.classList.contains('active-class')) {
                el.classList.remove("active-class");
                //el.classList.add("menu__link");
        }});
        e.target.className = "menu__link active-class";

        section.scrollIntoView({ behavior: "smooth", block: "start" });
        const sections = document.querySelectorAll(".your-active-class");
        [].forEach.call(sections, function (sec) {
            sec.classList.remove("your-active-class");
        });
        section.classList.add("your-active-class")
    }
})
unList.appendChild(documentFrag)


// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
    pgSections.forEach((section) => {
        let rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.top < 150) {
            pgSections.forEach((remover) => {
                remover.classList.remove('your-active-class');
            });
            section.classList.add('your-active-class');
            // const navLinks = document.querySelectorAll("a");
            // if (section.id) {
            //     [].forEach.call(navLinks, function (a) {
            //         if (a.text === section.id) {
            //             a.classList.add("active-class");
            //         } else {
            //             a.classList.remove("active-class");
            //             //a.classList.add("menu__link");
            //         }
            //    });
           // }
        }

    })

})

//Mobile Compitability Function
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

