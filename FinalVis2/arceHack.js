
function getChart(){
var c = document.querySelectorAll('.amcharts-map-image')
c.forEach((e) => {e.addEventListener("click",addSrc)} ) // you could add other eventListener if you wish 
function addSrc(){
    var daSrc = this.getAttribute('xlink:href') 
    console.log(daSrc); 
        // Here I made a console log of the source Image inside of the clicked object

    var i = document.getElementById('contentImg');
    i.src = daSrc
            // Here I applied the source to the img with the id contentImg
    }
    
}