//
const cardBox = document.querySelector('.card-box');
const persone = [
  {
    nome: 'Wayne Barnett',
    lavoro: 'Founder & CEO',
    imgPersonale: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Caroll',
    lavoro: 'Chief Editor',
    imgPersonale: 'angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter Gordon',
    lavoro: 'Office Manager',
    imgPersonale: 'walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela Lopez',
    lavoro: 'Social Media Manager',a
    imgPersonale: 'angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott Estrada',
    lavoro: 'Developer',
    imgPersonale: 'scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara Ramos',
    lavoro: 'Graphic Designer',
    imgPersonale: 'barbara-ramos-graphic-designer.jpg'
  }
];
//utilizzo il 'for...of' per 

for (let persona of persone){
  persona.classlist.add('card');
  cardBox.innerHTML += persona;
}
console.log(cardResult)
//utilizzo il 'for...in' per 
for (let persona in persone){
  console.log(persone[persona])
}