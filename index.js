const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
   title.classList.toggle(CLICKED_CLASS); // class check and if it exists -> add / if does not exist -> remove
}


function init(){
    title.addEventListener("click", handleClick);
}
init();