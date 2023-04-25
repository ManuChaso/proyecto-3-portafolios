import './home.css';

import profileImage from '../../../assets/images/perfil.jpg';

export default function RenderHome(){
    
    const app = document.querySelector('#app');

    const home = 
    `
    <div class="home">
        <div class="owner-data">
            <img class="profile-photo" src=${profileImage} alt="Imagen de perfil">
            <div class="name-job">
                <h2 class="name">Manu Chaso</h2>
                <p class="job">Desarrollador web full stack</p>
            </div>
        </div>
        <p class="home-description">
        ¡Hola! Soy Manu Chaso, un desarrollador web full stack de 24 años apasionado por el mundo de la programación. Me encanta crear soluciones creativas y eficientes para los desafíos en línea. Me dedico a desarrollar aplicaciones web y sitios web dinámicos y responsivos utilizando las últimas tecnologías y herramientas disponibles. Me siento más que feliz trabajando en equipo y tengo habilidades de comunicación excepcionales que me permiten colaborar con clientes y colegas para cumplir con los objetivos establecidos. Además, siempre estoy buscando aprender y mejorar mis habilidades para estar al tanto de las últimas tendencias en el desarrollo web. ¡Gracias por visitar mi página web de portafolio!
        </p>
        <div class="social-media-links">
            <a href="https://www.linkedin.com/in/manu-chaso-martin/">LinkedIn</a>
            <a href="https://github.com/ManuChaso">GitHub</a>
        </div>
    </div>
    `;
    app.innerHTML = '';
    app.innerHTML += home;
}
