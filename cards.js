
const IMAGE_URL = "https://placehold.co/200";


const USER = {
    id: 1,
    username: "MitziGisselle",
    descripcion: "Me gusta mucho escuchar musica y dormir",
    age: "26",
    fav_music: {
        bands: ["zoe", "Leon Laguerri", "El tri", "Charles Ans", ]
    },
};


//selectores
const card = document.getElementById("card-container");
card.classList.add("card-container");
const cardImgContainer = document.getElementById("card-img-container");

// Crear elemento img
const imageElement = document.createElement("img");
card.classList.add("img")
imageElement.src = IMAGE_URL;
imageElement.alt = "User photo";



// Creamos el elemento titulo -> card
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title");
const cardAgeElement = document.createElement("p");
const cardDescElement = document.createElement("p");
const favoriteMusic = document.createElement("p");


//poblar
cardTitleElement.textContent = USER.username;
cardAgeElement.textContent = USER.age;
cardDescElement.textContent = USER.descripcion;
favoriteMusic.textContent = USER.fav_music.bands;



//renderizar
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescElement, favoriteMusic);

