"use Strict";
const athletes = [
    {id: 1, name: "Wilson junior", belt: "Black", team: "Juquinha"},
    {id: 2, name: "Leandro Lo", belt: "Black", team: "Brother Hood"},
    {id: 3, name: "Rodolfo Vieira", belt: "Black", team: "GFTeam"},
    {id: 4, name: "Kyra Gracie", belt: "Black", team: "Gracie Kore"},
    {id: 5, name: "Zangado", belt: "Blue", team: "Pirâmide"},
    {id: 6, name: "Omar Nada", belt: "Brown", team: "Unity Jiu-Jitsu"},
    {id: 7, name: "Anna Luiza", belt: "Purple", team: "ATT/FTL"},
    {id: 8, name: "Luis Henrique", belt: "Purple", team: "ATT/FTL"},
];

const nameAthlete = document.querySelector("#nameAthleteInput");
const colorBeltSelected = document.querySelector("#selectTypeBeltOption");
const btnAddAthlete = document.querySelector(".btnAddAthlete");
const listAthlete = document.querySelector(".listAthlete")

btnAddAthlete.addEventListener("click", (event) => {
    event.preventDefault();

    const nameAthleteType = nameAthlete.value;
    const colorBeltType = colorBeltSelected.value;
    if(nameAthleteType === "" || colorBeltSelected === ""){
        alert("Digite seu nome e escolha sua faixa!")
        return
    }
});

/**
 * @param {Array<Object>} list
 */
const renderAthlete = (list) => {
    listAthlete.innerHTML = "";

    list.forEach((athletesList) => {
        listAthlete.innerHTML += `<li>${athletesList.id} - ${athletesList.belt} - ${athletesList.team}<button class="btnCheckout" data-id="${athletesList.id}">Checkout</button></li>`;
    })
};
renderAthlete(athletes)