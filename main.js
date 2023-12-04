const containerCard = document.querySelectorAll(".card-card");

const createButton = card =>{
    const button = document.createElement("button")
    button.innerHTML = '<i class="fa-solid fa-play"></i>'

    card.appendChild(button)

    //ocultar btn
    button.style.display = "none"
    button.classList.add("btn-play")

    //agregar evento cuando pasa el mouse
    card.addEventListener('mouseover', () =>{
        button.style.display = 'block';
    });
    card.addEventListener('mouseout', () =>{
        button.style.display = 'none';
    });
}

containerCard.forEach(card => {
    createButton(card);
});