import './style.css'

import RenderHome from './src/components/Home/home';
import RenderProjects from './src/components/Projects/projects';
import RenderExperience from './src/components/experience/experience';
import RenderContact from './src/components/contact/contact';
import RenderNotFound from './src/components/notfound/not-found';


const app = document.querySelector('#app');
const navBar = document.querySelector('.nav-bar');
const menuButton = document.querySelector('.menu-button');


menuButton.addEventListener('click', showMobileMenu);

document.querySelectorAll('.nav-link').forEach(link =>{
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const linkHref = e.target.href;
        console.log('El link apunta a: ', linkHref);

        history.pushState(null, null, linkHref);

        showMobileMenu();
        startAnimation();
        router();
    });
});

function showMobileMenu(){
    if(window.innerWidth <= '1100'){
        let isOpen = navBar.classList[1] ? true : false;

        isOpen ? navBar.classList.remove('complete') : navBar.classList.add('complete');
    }
}

function startAnimation(){
    let progressBar = document.querySelector('.progress-bar');
    progressBar.classList.add('complete');

    setTimeout(function(){
        progressBar.classList.remove('complete');
    }, 700);
}

function router(){
    const pathname = window.location.pathname;
    

    switch(pathname){
        case '/':
        case '/home': RenderHome();break;
        case '/proyectos': RenderProjects();break;
        case '/experiencia': RenderExperience();break;
        case '/contacto' : RenderContact();break;
        default: RenderNotFound();
    }
}

router();