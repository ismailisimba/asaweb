let localVar = {};
let container3000 = document.getElementById("container3000");
let startPage = container3000.querySelectorAll(".homepage");
let asaListPage = container3000.querySelectorAll(".campusContainer");
let asaItemContainer = container3000.querySelectorAll(".itemasacontainer")
let backButt = document.getElementById("lebackbutton");
let asaListPage2 = container3000.querySelectorAll(".campusContainer2");
let expandables = document.getElementsByClassName("asaitemtit");


//startPage[0].remove();
asaListPage[0].remove();
asaListPage2[0].remove();
//asaListPage2.remove();
backButt.remove();
asaItemContainer[0].remove();

addMainClicks();
fetchMyData();


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
    container3000.appendChild(backButt);
    addBackButtClick();
    container3000.appendChild(asaListPage[0])
   addExpandablesClicks2();
    // fillasaListPage();

}



function showSecAsalist(){

    container3000.innerHTML = "";
    container3000.appendChild(backButt);
    addBackButtClick();
    container3000.appendChild(asaListPage2[0])
    addExpandablesClicks()
    // fillasaListPage();

}



function addBackButtClick() {
    document.getElementById("lebackbutton").addEventListener("click",function () {

        container3000.innerHTML = "";
        container3000.appendChild(startPage[0])

    })
}






async function dataGetter(data) {
     var url = "https://script.google.com/macros/s/AKfycbwSjAcrK_lra0R3GJ_lxumSZ356pgoloFxXMd5jAoRR9kqyIVaq/exec";
       // Default options are marked with *
       const cloudObject = await fetch(url, {
         method: 'GET', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors', // no-cors, *cors, same-origin
         cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
         credentials: 'omit', // include, *same-origin, omit
         headers: {
           //'Content-Type': 'text/txt'
           // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         redirect: 'follow', // manual, *follow, error
         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
       }).then( function(response){

        return response.text();

          
       });

       return cloudObject;
        
     }


     async function fetchMyData() {

        let finalResponse = await dataGetter().then(function (cloudObject){
            popuLateMyData(cloudObject);
        })

     }


function popuLateMyData(cloudObject) {

    let tempDiv = document.createElement("div");
    localVar = JSON.parse(cloudObject);
    tempDiv.innerHTML = localVar.elementaryobj[10].gradeLevel;

   fillAsaTitList();

   // container3000.innerHTML = "";
    //container3000.appendChild(tempDiv);

}


function fillAsaTitList (){

  let secAsaTitList =    asaListPage2[0].querySelectorAll(".asaitemchilditems");
  let elAsaTitList =    asaListPage[0].querySelectorAll(".asaitemchilditems");

  localVar.secondaryobj.pop();
  localVar.elementaryobj.pop();

  secAsaTitList[0].innerHTML = "";
  secAsaTitList[1].innerHTML = "";

  elAsaTitList[0].innerHTML = "";
  elAsaTitList[1].innerHTML = "";
  elAsaTitList[2].innerHTML = "";
  elAsaTitList[3].innerHTML = "";
  elAsaTitList[4].innerHTML = "";
  //elAsaTitList[0].innerHTML = localVar.elementaryobj.length;

 // asaListPage[0].innerHTML = "";
  //asaListPage2[0].innerHTML = "";

  for(let i = 1 ; i < localVar.secondaryobj.length ; i++){

    let gradeValue = localVar.secondaryobj[i].gradeLevel;



     // secAsaTitList[0].innerHTML = gradeValue;
    //secAsaTitList[1].innerHTML = "localVar.secondaryobj[i].activityTitle";
    //secAsaTitList[0].className = "";
    let tempClone = secAsaTitList[0].cloneNode(true);
    tempClone.id = "secasaitemnum"+i;
    tempClone.style.visibility = "inherit";
    tempClone.className = "myLaterTitleClass";
    secAsaTitList[0].style.visibility = "collapse";
    addClickEventFunc(tempClone,i);
    tempClone.innerHTML = localVar.secondaryobj[i].activityTitle;
    //tempClone.innerHTML = gradeValue;

    if (gradeValue === "Middle & High School"){

      secAsaTitList[0].appendChild(tempClone) ;

      let temp30069 = tempClone.cloneNode(true);
      addClickEventFunc(temp30069,i);
      secAsaTitList[1].appendChild(temp30069) ;

      
    }else if(gradeValue === "High School"){
      secAsaTitList[1].appendChild(tempClone) ;

    }else if(gradeValue === "Middle School"){
      secAsaTitList[0].appendChild(tempClone) ;

    }

    
   //asaListPage2[0].appendChild(tempClone);
    
  }


  for(let i = 1 ; i < localVar.elementaryobj.length ; i++){

    let gradeValue = localVar.elementaryobj[i].gradeLevel;

   // elAsaTitList[0].innerHTML = localVar.elementaryobj[i].activityTitle;
    let tempClone = elAsaTitList[0].cloneNode(true);
    tempClone.id = "eleasaitemnum"+i;
    tempClone.style.visibility = "inherit";
    tempClone.className = "myLaterTitleClass";
    elAsaTitList[0].style.visibility = "collapse";
    addClickEventFunc2(tempClone,i);
    tempClone.innerHTML = localVar.elementaryobj[i].activityTitle;


    if (gradeValue == 1){

      elAsaTitList[0].appendChild(tempClone) ;

      
    }else if(gradeValue === 2){
      elAsaTitList[1].appendChild(tempClone) ;

    }else if(gradeValue === 3){
      elAsaTitList[2].appendChild(tempClone) ;

    }else if(gradeValue === 4){
      elAsaTitList[3].appendChild(tempClone) ;

    }else if(gradeValue === 5){
      elAsaTitList[4].appendChild(tempClone) ;

    }



    //asaListPage[0].appendChild(tempClone);
    
  }


}




function addClickEventFunc(element,i) {

// localVar.secondaryobj[i].activityTitle
// asaItemContainer[0]
//  let styleTemp = window.getComputedStyle(hiddenMenu);
    
  
  
          element.addEventListener("click", function (){
  
                container3000.innerHTML = "";
                container3000.appendChild(backButt);
                addBackButtClick();
                container3000.appendChild(asaItemContainer[0]);
  
              
                 // title1.innerHTML = this.id;
                 let mainChildArray = asaItemContainer[0].querySelectorAll(".itemasachild");

                 let actvTitle = mainChildArray[0];

                 let basiCDetailsContainer = mainChildArray[1];
                 let basicDetailsItemContainer = basiCDetailsContainer.querySelectorAll(".basicitemdeets");
                 let gradeLevelContainer = basicDetailsItemContainer[0].querySelectorAll("span");
                 let gradeLevel = gradeLevelContainer[0];
                 let dayContainer = basicDetailsItemContainer[1].querySelectorAll("span");
                 let dayVal = dayContainer[0];
                 let locatContainer = basicDetailsItemContainer[2].querySelectorAll("span");
                 let locVal = locatContainer[0];
                 let coachContainer = basicDetailsItemContainer[3].querySelectorAll("span");
                 let coachVal = coachContainer[0];

                 let actDescrpContainer = mainChildArray[2];
                 let actDescrpItemContainer = actDescrpContainer.querySelectorAll("span");
                 let actDescrpVal = actDescrpItemContainer[0];

                 let profPicContainer = mainChildArray[3];
                 

                 let biopic = mainChildArray[4];
            
                 
  
                 actvTitle.innerHTML = localVar.secondaryobj[i].activityTitle;
                 gradeLevel.innerHTML = localVar.secondaryobj[i].gradeLevel;
                 dayVal.innerHTML = localVar.secondaryobj[i].dayOfWeek;
                 locVal.innerHTML = localVar.secondaryobj[i].locationOnCampus;
                 coachVal.innerHTML = localVar.secondaryobj[i].coachNames;
                 actDescrpVal.innerHTML =  localVar.secondaryobj[i].activityDescription;
                 biopic.innerHTML = localVar.secondaryobj[i].bioDescription;

                 fillUpPictures(profPicContainer,i);


             
  
                
  
                // description1.innerHTML = i;
                  
  
              
          });
  
  
  }



  function fillUpPictures(container,i){

    let profileContainer = container.querySelectorAll(".myteacherbigcontainer");
    profileContainer = profileContainer[0];

    let picContainerArr = profileContainer.querySelectorAll(".mycustpiccontainer");
    let picContainer = picContainerArr[0];

    let deetsContainerArr = profileContainer.querySelectorAll(".mydeetscontainer");

    let nameContainerArr = deetsContainerArr[0].querySelectorAll(".nameTit");
    let nameContainer = nameContainerArr[0];

    let titContainerArr = deetsContainerArr[0].querySelectorAll(".positionTit");
    let titContainer = titContainerArr[0];



    let tempArr = [];
    tempArr.push(localVar.secondaryobj[i].picture1Url);
    tempArr.push(localVar.secondaryobj[i].picture2Url);
    tempArr.push(localVar.secondaryobj[i].picture3Url);
    tempArr.push(localVar.secondaryobj[i].picture4Url);


    let tempArr2 = []
    tempArr2.push(localVar.secondaryobj[i].name1);
    tempArr2.push(localVar.secondaryobj[i].name2);
    tempArr2.push(localVar.secondaryobj[i].name3);
    tempArr2.push(localVar.secondaryobj[i].name4);

    let counter3069 = 0;


    let tempArr3 = []
    tempArr3.push(localVar.secondaryobj[i].title1);
    tempArr3.push(localVar.secondaryobj[i].title2);
    tempArr3.push(localVar.secondaryobj[i].title3);
    tempArr3.push(localVar.secondaryobj[i].title4);

   // let length = tempArr.length;

    container.innerHTML = "";

    tempArr.forEach(function(element){

        element =  new String(element);

        profileContainer.style.visibility = "collapse";

        if (element.length <= 0) {

            
            picContainer.style.height = "0px";
            picContainer.style.width = "0px";
            let temp30 = profileContainer.cloneNode(true);
            container.appendChild(temp30);




            
        }else{

              // profileContainer.style.visibility = "visible";
              picContainer.style.height = "186px";
              picContainer.style.width = "145px";

              //picContainer.style.backgroundImage = `url(${element})`;
              picContainer.style.backgroundImage = `url(${tempArr[counter3069]})`;
              nameContainer.innerHTML = tempArr2[counter3069];
              titContainer.innerHTML = tempArr3[counter3069];
              let temp30 = profileContainer.cloneNode(true);
              temp30.style.visibility = "visible";
              //let tempdiv =  document.createElement("div");
              //tempdiv.innerHTML = length;
              container.appendChild(temp30);
             // container.appendChild(tempdiv);

             



        }

        counter3069++;

         


    


    })

    counter3069 = 0;


  }




  function addClickEventFunc2(element,i) {

    // localVar.secondaryobj[i].activityTitle
    // asaItemContainer[0]
    //  let styleTemp = window.getComputedStyle(hiddenMenu);
        
      
      
              element.addEventListener("click", function (){
      
                    container3000.innerHTML = "";
                    container3000.appendChild(backButt);
                    addBackButtClick();
                    container3000.appendChild(asaItemContainer[0]);
      
                  
                     // title1.innerHTML = this.id;
                     let mainChildArray = asaItemContainer[0].querySelectorAll(".itemasachild");
    
                     let actvTitle = mainChildArray[0];
    
                     let basiCDetailsContainer = mainChildArray[1];
                     let basicDetailsItemContainer = basiCDetailsContainer.querySelectorAll(".basicitemdeets");
                     let gradeLevelContainer = basicDetailsItemContainer[0].querySelectorAll("span");
                     let gradeLevel = gradeLevelContainer[0];
                     let dayContainer = basicDetailsItemContainer[1].querySelectorAll("span");
                     let dayVal = dayContainer[0];
                     let locatContainer = basicDetailsItemContainer[2].querySelectorAll("span");
                     let locVal = locatContainer[0];
                     let coachContainer = basicDetailsItemContainer[3].querySelectorAll("span");
                     let coachVal = coachContainer[0];
    
                     let actDescrpContainer = mainChildArray[2];
                     let actDescrpItemContainer = actDescrpContainer.querySelectorAll("span");
                     let actDescrpVal = actDescrpItemContainer[0];
    
                     let profPicContainer = mainChildArray[3];
                     
    
                     let biopic = mainChildArray[4];
                
                     
      
                     actvTitle.innerHTML = localVar.elementaryobj[i].activityTitle;
                     gradeLevel.innerHTML = localVar.elementaryobj[i].gradeLevel;
                     dayVal.innerHTML = localVar.elementaryobj[i].dayOfWeek;
                     locVal.innerHTML = localVar.elementaryobj[i].locationOnCampus;
                     coachVal.innerHTML = localVar.elementaryobj[i].coachNames;
                     actDescrpVal.innerHTML =  localVar.elementaryobj[i].activityDescription;
                     biopic.innerHTML = localVar.elementaryobj[i].bioDescription;
    
                     fillUpPictures2(profPicContainer,i);
    
    
                 
      
                    
      
                    // description1.innerHTML = i;
                      
      
                  
              });
      
      
      }





      function fillUpPictures2(container,i){

        let profileContainer = container.querySelectorAll(".myteacherbigcontainer");
        profileContainer = profileContainer[0];
    
        let picContainerArr = profileContainer.querySelectorAll(".mycustpiccontainer");
        let picContainer = picContainerArr[0];
    
        let deetsContainerArr = profileContainer.querySelectorAll(".mydeetscontainer");
    
        let nameContainerArr = deetsContainerArr[0].querySelectorAll(".nameTit");
        let nameContainer = nameContainerArr[0];
    
        let titContainerArr = deetsContainerArr[0].querySelectorAll(".positionTit");
        let titContainer = titContainerArr[0];
    
    
    
        let tempArr = [];
        tempArr.push(localVar.elementaryobj[i].picture1Url);
        tempArr.push(localVar.elementaryobj[i].picture2Url);
        tempArr.push(localVar.elementaryobj[i].picture3Url);
        tempArr.push(localVar.elementaryobj[i].picture4Url);
    
    
        let tempArr2 = []
        tempArr2.push(localVar.elementaryobj[i].name1);
        tempArr2.push(localVar.elementaryobj[i].name2);
        tempArr2.push(localVar.elementaryobj[i].name3);
        tempArr2.push(localVar.elementaryobj[i].name4);
    
        let counter3069 = 0;
    
    
        let tempArr3 = []
        tempArr3.push(localVar.elementaryobj[i].title1);
        tempArr3.push(localVar.elementaryobj[i].title2);
        tempArr3.push(localVar.elementaryobj[i].title3);
        tempArr3.push(localVar.elementaryobj[i].title4);
    
       // let length = tempArr.length;
    
        container.innerHTML = "";
    
        tempArr.forEach(function(element){
    
            element =  new String(element);
    
            profileContainer.style.visibility = "collapse";
    
            if (element.length <= 0) {
    
                
                picContainer.style.height = "0px!important";
                picContainer.style.width = "0px!important";
                let temp30 = profileContainer.cloneNode(true);
                container.appendChild(temp30);
    
    
    
    
                
            }else{
    
                  // profileContainer.style.visibility = "visible";
                  picContainer.style.height = "186px";
                  picContainer.style.width = "145px";
    
                  picContainer.style.backgroundImage = `url(${element})`;
                  nameContainer.innerHTML = tempArr2[counter3069];
                  titContainer.innerHTML = tempArr3[counter3069];
                  let temp30 = profileContainer.cloneNode(true);
                  temp30.style.visibility = "visible";
                  //let tempdiv =  document.createElement("div");
                  //tempdiv.innerHTML = length;
                  container.appendChild(temp30);
                 // container.appendChild(tempdiv);

               
    
    
    
            }
    
             
            counter3069++;
    
        
    
    
        })
    
        counter3069 = 0;
    
    
      }









      function addExpandablesClicks () {

        let myClickableTitles =  asaListPage2[0].querySelectorAll(".asaitemchildtitle");
        let myHiddenTitles =  asaListPage2[0].querySelectorAll(".asaitemchilditems");

        for(let i=0; i< 2 ; i++){

            myClickableTitles[i].parentNode.style.height = "36px";
            myHiddenTitles[i].style.visibility = "collapse"; 

          

            myClickableTitles[i].addEventListener("click",
            function(){
                  let compStyles = window.getComputedStyle(myClickableTitles[i].parentNode);
                  let height = compStyles.getPropertyValue('height');
                  //let backgrCl = compStyles.getPropertyValue("background-color");

                  //myClickableTitles[0].innerHTML = height;

                  if(height !== "36px"){

                    myClickableTitles[i].parentNode.style.height = "36px";
                    myHiddenTitles[i].style.visibility = "collapse";
                    height = null;

                  }else{

                    myClickableTitles[i].parentNode.style.height = "auto";
                    myHiddenTitles[i].style.visibility = "visible";
                    height = null;

                  }
    
              
            })
        }
        
    


      }




      function addExpandablesClicks2 () {

        let myClickableTitles =  asaListPage[0].querySelectorAll(".asaitemchildtitle");
        let myHiddenTitles =  asaListPage[0].querySelectorAll(".asaitemchilditems");

        for(let i=0; i< 5 ; i++){

            myClickableTitles[i].parentNode.style.height = "36px";
            myHiddenTitles[i].style.visibility = "collapse"; 

          

            myClickableTitles[i].addEventListener("click",
            function(){
                  let compStyles = window.getComputedStyle(myClickableTitles[i].parentNode);
                  let height = compStyles.getPropertyValue('height');
                  //let backgrCl = compStyles.getPropertyValue("background-color");

                  //myClickableTitles[0].innerHTML = height;

                  if(height !== "36px"){

                    myClickableTitles[i].parentNode.style.height = "36px";
                    myHiddenTitles[i].style.visibility = "collapse";
                    height = null;

                  }else{

                    myClickableTitles[i].parentNode.style.height = "auto";
                    myHiddenTitles[i].style.visibility = "visible";
                    height = null;

                  }
    
              
            })
        }
        
    


      }


