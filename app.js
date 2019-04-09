var ourList = document.getElementById("our-list");
var ourHeadline = document.getElementById("our-headline");
var ourButton = document.getElementById("our-btn");
var listItems = document.getElementById("our-list").getElementsByTagName('li');
var newItemCounter =1;

ourList.addEventListener('click',activateItem);

function activateItem(e){
    if(e.target.nodeName == "LI"){
        ourHeadline.innerHTML= e.target.innerHTML;
        for(i = 0;i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
}

ourButton.addEventListener('click',createNewItem);

function createNewItem(){
    ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
    newItemCounter++;
}