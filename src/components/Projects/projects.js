import './projects.css';
import {DataBase} from '../../database/database';

const app = document.querySelector('#app');

export default function RenderProjects(){

    app.innerHTML = '';
    app.innerHTML += '<h1 class="project-title">Mis Proyectos</h1><div class="project-list"></div>';
    const projectList = document.querySelector('.project-list');

    function projectTemplate(project){ 
        return `
        <div class="project"">
            <img class="project-image" src="${project.image}" alt="Imagen del proyecto" />
            <h1 class="project-name">${project.name}</h1>
            <p class="project-description">${project.description}</p>
            <div class="web-links">
                <a href="${project.linkweb}" >Visita la web</a>
                <a href="${project.linkgit}" >Link a GitHub</a>
            </div>
        <div>`;
    }

    DataBase.projects.forEach(element =>{
        projectList.innerHTML += projectTemplate(element);
    });

    const products = Array.from(projectList.children);

    products.forEach(function(product, index){
        setTimeout(function(){
            product.classList.add('complete')
        }, 400 * index);
    });
}