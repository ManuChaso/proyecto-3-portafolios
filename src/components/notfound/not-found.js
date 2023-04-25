import './not-found.css';

export default function RenderNotFound(){
    
    const app = document.querySelector('#app');

    const notFound = 
    `
    <div class="not-found">
        <h1>404 😐</h1>
        <p>Que estarías buscando...</p>
    </div>
    `;
    app.innerHTML = '';
    app.innerHTML += notFound;
}
