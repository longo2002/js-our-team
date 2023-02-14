console.log("works!")

let container = document.getElementById("container")

const ourTeam = [
    ["Wayne", "Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg"],
    ["Angela", "Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg"],
    ["Walter", "Gordon", "Office Manager", "walter-gordon-office-manager.jpg"],
    ["Angela", "Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"],
    ["Scott", "Estrada", "Developer", "scott-estrada-developer.jpg"],
    ["Barbara", "Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg"]
]

console.log(ourTeam)

for (let i = 0; i < ourTeam.length ; i++) {
    let divString = `<div class="cards"><img class="cards" src="./img/${ourTeam[i].slice(-1) }" alt="foto-collega">${ourTeam[i]}</div>`
    container.innerHTML +=  divString 
}
