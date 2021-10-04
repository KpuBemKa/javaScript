function first(){
    var counter = document.getElementById("p1").innerHTML;
    document.getElementById("p1").innerHTML = +counter+1;
}

function second(){
    var links = document.getElementsByTagName("a");
    
    for(var i = 0; i < links.length; i++){
        links[i].style.backgroundColor = "yellow";
    }
}

function third(){
    document.getElementById("pImages").innerHTML = "Imagini: " + document.getElementsByTagName("img").length;
    document.getElementById("pLinks").innerHTML = "Link-uri: " + document.getElementsByTagName("a").length;
    document.getElementById("pForms").innerHTML = "Formulare: " + document.getElementsByTagName("form").length;
}

function grayBG(){
    document.body.style.backgroundColor = "gray";
}

function whiteBG(){
    document.body.style.backgroundColor = "white";
}

function sansSerif(){
    var element = document.getElementsByTagName("body")[0];
    element.style.fontFamily = "Arial";
}

function sans(){
    var element = document.getElementsByTagName("body")[0];
    element.style.fontFamily = "Georgia";
}