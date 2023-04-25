import './contact.css';
import {DataBase} from '../../database/database';

const app = document.querySelector('#app');


export default function RenderContact(){

    const contact = 
    `
    <div class="contact">
        <div class="contact-info">
            <h1>Vías de contacto</h1>
            <ul>
                <li>Email: Manuc.chaso@gmail.com</li>
                <li>Telefono: 722607265</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/manu-chaso-martin/" class="linkedin">Mi LinkedIn</a></li>
            </ul>
        </div>
        <div class="contact-form">
            <h1>Rellena este formulario</h1>
            <form>
                <p class="form-error">Todos los campos son obligatorios</p>
                <input class="email" type="email" placeholder="Email"/>
                <div class="name-lastname">
                    <input class="form-name" type="text" placeholder="Nombre"/>
                    <input class="form-lastname" type="text" placeholder="Apellido"/>
                </div>
                <textarea class="textarea-message" placeholder="Mensaje"></textarea>
                <button class="submit-form">Enviar</button>
            </form>
        </div>
    </div>
    `;
    app.innerHTML = '';
    app.innerHTML += contact;

    document.addEventListener('DOMContentLoaded', function(){
        const inputEmail = document.querySelector('.email');
        const inputName = document.querySelector('.form-name');
        const inputLastname = document.querySelector('.form-lastname');
        const textarea = document.querySelector('.textarea-message');
        const errorMessage = document.querySelector('.form-error');
        const submitButton = document.querySelector('.submit-form');

        submitButton.addEventListener('click', (e)=>{
            e.preventDefault();
            
            let email = inputEmail.value;
            let name = inputName.value;
            let lastName = inputLastname.value;
            let text = textarea.value;

            let checkEmail = false;
            let checkName = false;
            let checkLastName = false;
            let checkText = false;

            function inputError(input){
                input.style.borderBottom = '1px solid red';
                errorMessage.style.opacity = '1';
            }
            function formSubmit(input){
                input.style.borderBottom = '1px solid var(--cian)';
                input.value = '';
                errorMessage.style.opacity = '0';
            }

            email ? checkEmail = true : inputError(inputEmail);
            name  ? checkName  = true : inputError(inputName);
            lastName ? checkLastName = true : inputError(inputLastname);
            text ? checkText = true : inputError(textarea);
            
            if(checkEmail && checkName && checkLastName && checkText){
                formSubmit(inputEmail);
                formSubmit(inputName);
                formSubmit(inputLastname);
                formSubmit(textarea);
                alert('¡Felicitaciones! Acabas de completar un formulario inútil. ¡Bravo! No te preocupes, tus datos no fueron a ninguna parte, así que no hay nada de qué preocuparse. Pero bueno, al menos te ganaste este mensaje de confirmación.');
            }
        });
    });
}

