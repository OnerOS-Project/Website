/* Loading Animation */
square = 1
function switchSquare(square){
    if(square == 5){square = 1}
    square +=1
    return square
}
function animSquare(square){
    if(square == 5){square = 1}
    console.log("Square |", square)
    oldSquare = square - 1
    if (oldSquare == 0){oldSquare = 4}
    console.log("OLD Square |", oldSquare)
    document.getElementById("sq" + oldSquare).setAttribute("class", "square")
    getSquare = document.getElementById("sq" + square)
    getSquare.setAttribute("class", "square animated") 
}

setTimeout(function(){
    square = switchSquare(square)
    animSquare(square)
}, 10);

$tmpLoad = setInterval(function(){
    square = switchSquare(square)
    animSquare(square)
}, 1900);

/* On Ready */
window.onload = function(e){
    console.log("App Loaded:\n", e)
    setTimeout(function(){
        clearInterval($tmpLoad);
        document.getElementById("page-loader").remove();
        document.body.removeAttribute("class");
        document.getElementById("bef").remove();
    }, 1200)

}