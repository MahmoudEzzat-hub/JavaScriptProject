

// var allData = [];  API

// var httpReq = new XMLHttpRequest ;

// httpReq.open("Get" , "https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=6acbb9d791b14ab3afba2eaa3125c6c8") ; 

// httpReq.send();

// httpReq.onreadystatechange = function(){

//     if( httpReq.readyState == 4 && httpReq.status == 200 ){
//          allData = JSON.parse( httpReq.response).articles;
//          dispaltData()
//     }


// }




// function dispaltData(){


//     var temp = ``;

//     for( var i = 0 ; i < allData.length ; i++)
//     {

//             temp+=`<div class="col-md-3">
//             <div class="item">
//             <img src=`+allData[i].urlToImage +` class="img-fluid">
//               <h4>`+ allData[i].title+`</h4>
//               <p>`+ allData[i].description+`</p>
//             </div>
//           </div>`
//     }
//     document.getElementById("rowData").innerHTML = temp ;

// }























var myImg = Array.from(document.querySelectorAll(".item img"));
var lightBoxCont = document.querySelector(".lightbox-container");

var close = document.getElementById("close")
var prev = document.getElementById("prev")
var next = document.getElementById("next")

var indexOfImg = 0;

for (var i = 0; i < myImg.length; i++) {

    myImg[i].addEventListener("click", showLightBox)

}


function showLightBox(e) {
    lightBoxCont.style.transform = "scale(1,1)" ;
    lightBoxCont.firstElementChild.style.transform = "scale(1,1)";

    var imgScr = e.target.src;



    indexOfImg = myImg.indexOf(e.target);


    lightBoxCont.firstElementChild.style.backgroundImage = "url(" + imgScr + ")";

}



close.addEventListener("click", hide)

function hide() {
    lightBoxCont.style.transform = "scale(0,0)" ;
    lightBoxCont.firstElementChild.style.transform = "scale(0,0)";
}


next.addEventListener("click", goNext)

function goNext() {

    indexOfImg++;

    if (myImg.length == indexOfImg) {
        indexOfImg = 0;
    }

    lightBoxCont.firstElementChild.style.backgroundImage = "url(" + myImg[indexOfImg].src + ")";

}

prev.addEventListener("click", goPrev)

function goPrev() {

    indexOfImg--;

    if (indexOfImg < 0) {

        indexOfImg = myImg.length-1;
        console.log(indexOfImg)
    }



    lightBoxCont.firstElementChild.style.backgroundImage = "url(" + myImg[indexOfImg].src + ")";


}

document.addEventListener("keydown", ZooZ)

function ZooZ(e) {

    if( e.keyCode == 39 )
    {
        goNext(); 
    }else if ( e.keyCode == 37)
    {

        goPrev();
    }else if ( e.keyCode == 27)
    {
        hide();
    }

}