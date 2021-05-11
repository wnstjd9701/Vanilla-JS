const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
   title.classList.toggle(CLICKED_CLASS); // class check and if it exists -> classList.add / if does not exist -> classList.remove
}

function init(){
    title.addEventListener("click", handleClick);
}

// init 실행
init();