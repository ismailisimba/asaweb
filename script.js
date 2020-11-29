let container3000 = document.getElementById("container3000");
let startPage = container3000.querySelectorAll(".homepage");
let asaListPage = container3000.querySelectorAll(".campusContainer");
let asaItemContainer = container3000.querySelectorAll(".itemasacontainer")

//startPage[0].remove();
asaListPage[0].remove();
asaItemContainer[0].remove();

addMainClicks();


function addMainClicks(){

    document.getElementById("eleasas").addEventListener("click",
        function(){
            showEleAsalist();
        }
    );


    document.getElementById("secasas").addEventListener("click",
        function(){
            showSecAsalist();
        }
);
}


function showEleAsalist(){

    container3000.innerHTML = "";
    container3000.appendChild(asaListPage[0])
    // fillasaListPage();

}



function showSecAsalist(){

    container3000.innerHTML = "";
    container3000.appendChild(asaListPage[0])
    // fillasaListPage();

}






