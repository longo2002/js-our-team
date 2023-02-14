console.log("works!")

const ourTeam = {
    "collega1" : ["Wayne", "Barnett",	"Founder & CEO",	"wayne-barnett-founder-ceo.jpg,"],
    "collega2" : ["Angela", "Caroll",	"Chief Editor",	"angela-caroll-chief-editor.jpg,"],
    "collega3" : ["Walter", "Gordon",	"Office Manager",	"walter-gordon-office-manager.jpg,"],
    "collega4" : ["Angela", "Lopez",	"Social Media Manager",	"angela-lopez-social-media-manager.jpg,"],
    "collega5" : ["Scott", "Estrada",	"Developer",	"scott-estrada-developer.jpg,"],
    "collega6" : ["Barbara", "Ramos",	"Graphic Designer",	"barbara-ramos-graphic-designer.jpg,"],
}
  
console.log(ourTeam)

for (let key in ourTeam){
    console.log(ourTeam[key]);
}