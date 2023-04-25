import './experience.css';
import {DataBase} from '../../database/database';

const app = document.querySelector('#app');

export default function RenderExperience(){

    app.innerHTML = '';
    app.innerHTML += '<h1 class="experience-title">Mi experiencia profesional </h1><div class="experience-list"></div>';
    const experienceList = document.querySelector('.experience-list');

    function experienceTemplate(experience){
        return `
        <div class="experience">
            <div class="logo-name-date">
                <img class="logo" src="${experience.logo}" alt="Logo de la empresa"/>
                <div class="name-title">
                    <p>${experience.name}</p>
                    <p>${experience.title}</p>
                </div>
                <p class="date">${experience.date}</p> 
            </div>
            <div class="responsibilities-description">
                <div class="responsibilities">
                    <h2>Responsabilidades:</h2>
                    <ul>
                        <li>- ${experience.responsabilitys[0]}</li>
                        <li>- ${experience.responsabilitys[1]}</li>
                        <li>- ${experience.responsabilitys[2]}</li>
                    </ul>
                </div>
                <div class="description">
                    <h2>Descripcción:</h2>
                    <p>${experience.description}</p>
                </div>
            </div>
            <a class="page-link" href="${experience.web}">Pagina de la empresa</a>
        <div>`;
    }

    DataBase.experience.forEach(element =>{
        experienceList.innerHTML += experienceTemplate(element);
    });

    const experiences = Array.from(experienceList.children);

    experiences.forEach(function(experience, index){
        setTimeout(function(){
            experience.classList.add('complete')
        }, 400 * index);
    });

}