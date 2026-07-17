"use Strict";
const athletes = [
    {id: 1, name: "Wilson junior", belt: "Black"},
    {id: 2, name: "Leandro Lo", belt: "Black"},
    {id: 3, name: "Rodolfo Vieira", belt: "Black"},
    {id: 4, name: "Kyra Gracie", belt: "Black"},
    {id: 5, name: "Zangado", belt: "Blue"},
    {id: 6, name: "Omar Nada", belt: "Brown"},
    {id: 7, name: "Anna Luiza", belt: "Purple"},
    {id: 8, name: "Luis Henrique", belt: "Purple"},
];

const nameAthlete = document.querySelector("#nameAthleteInput");
const colorBeltSelected = document.querySelector("#selectTypeBeltOption");
const btnAddAthlete = document.querySelector(".btnAddAthlete");
const listAthlete = document.querySelector(".listAthlete")

btnAddAthlete.addEventListener("click", (event) => {
    event.preventDefault();

    const nameAthleteType = nameAthlete.value;
    const colorBeltType = colorBeltSelected.value;
    const idReference = athletes.length + 1
    if(nameAthleteType === "" || colorBeltType === ""){
        alert("Digite seu nome e escolha sua faixa!")
        return
    }

    const newInformationAthlete = {
        id: idReference,
        name: nameAthleteType,
        belt: colorBeltType
    }

    athletes.push(newInformationAthlete);
    renderAthlete(athletes)
    nameAthlete.value = "";
    colorBeltSelected.value = "";
});

/**
 * @param {Array<Object>} list
 */
const renderAthlete = (list) => {
    listAthlete.innerHTML = "";

    list.forEach((athletesList) => {
        listAthlete.innerHTML += `<li>${athletesList.id} - ${athletesList.name}- ${athletesList.belt} - <button class="btnCheckout" data-id="${athletesList.id}">Checkout</button></li>`;
    })

};
renderAthlete(athletes)

listAthlete.addEventListener("click", (event) => {
    if(event.target.classList.contains("btnCheckout")){
        const idSelectedConverted = Number(event.target.dataset.id);

        const index = athletes.findIndex((obj) => {return obj.id === idSelectedConverted});

        athletes.splice(index, 1);
        renderAthlete(athletes);
    }
})