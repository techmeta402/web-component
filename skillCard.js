const template = document.createElement('template');
template.innerHTML = `
<style>
.skill-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
}

.skill-card h1{
    text-transform: up;
    letter-spacing: 2px;
    margin-top: 2rem;
    margin-bottom: -2px;
}

.icon-container{
    width: 10rem;
    height: 10rem;
    border: 3px solid;
    border-color: #43cea2;
    border-radius: 25%;
    background: linear-gradient(to top, #0F2027, #203A43, #2C5364);
    margin-bottom: 2rem;
    margin-right: 2rem;
    display: flex;
    transform: rotate(45deg); 
}

.icon-container i{
    color: #43cea2;
    font-size: 5rem;
    margin: auto;
    transform: rotate(-45deg);
    align-content: center;
}

.skill-card p{
    font-size: 1.8rem;
    font-weight: 300;
}
</style>


<div class = "skill-card">
    <div class = "icon-container">
        <i><slot name = "icon" /></i>
    </div>
    <h1></h1>
    <p><slot name = "description" /></p>
</div>

`;

class SkillCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.shadowRoot.querySelector('i');
        
        this.shadowRoot.querySelector('h1').innerText = 
        this.getAttribute('name');
            
    }
}


window.customElements.define('skill-card', SkillCard);