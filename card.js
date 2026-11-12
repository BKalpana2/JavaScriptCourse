let refElem = document.getElementById("ref");
function display(){
let cards="";
for(let i=0;i<8;i++){
cards+=`
<div class="container">
<div class="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uBKiYfIoNk7m04GdIbsgZc8qVek_V92iZG_AsNGtvg&s=10" alt="">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam corrupti placeat expedita, ad dolor eaque iste debitis consequatur alias animi?</p>
        <button>Read More....</button>
    </div>
    </div>
`;
refElem.innerHTML=cards;
}
}