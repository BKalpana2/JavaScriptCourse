let defElem=document.getElementById("ref");
let arr=[
    {name:"kalyan",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KSqFJJ7CrLuhmpurVlDHFfg8SDVegNyR5aV7XObZvw&s",about:"kalyan padala biggboss season 9 winner"},
    {name:"Thanuja",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbk2qZKTeNpfESBhmb-xg6OUFFlVhxnerpVLOjMZJ5Q&s", about:"Thanuja puttaswamy biggboss 9 Runner Up" },
    {name:"kalyan and thanuja",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtfXmY9BmMp62CHfVR6EvnUBa0dbyZqSNRlgonV-dGA&s=10" ,about:"Kalyan and thanuja both are very good friends"}
]
function display(){
let cards="";
for(let i=0;i<arr.length;i++){
cards+=`
<div class="card">
    <img src=${arr[i].image}>
    <h1>${arr[i].name}</h1>
    <p>${arr[i].about}</p>
    
</div>
`;
}
defElem.innerHTML=cards;
}