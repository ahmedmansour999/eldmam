// Get the modal element
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Display the modal when the page loads
window.onload = function () {
    modal.style.display = "block";
}

// Close the modal when the user clicks on the <span> element
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







// nav bar 

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // You can adjust the scroll value as needed
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
});


// container 5

// card paragraph view 
const buttonArticle = document.getElementById('buttonArticle') ; 
const paragraph = document.getElementById('paragraph')
const eye = document.getElementById('eye') ;
const buttonArticle1 = document.getElementById('buttonArticle1') ; 
const paragraph1 = document.getElementById('paragraph1') ;
const bullseye = document.getElementById('bullseye') ;
const buttonArticle2= document.getElementById('buttonArticle2') ; 
const paragraph2 = document.getElementById('paragraph2') ;
const chart = document.getElementById('chart') ;



buttonArticle.onclick = ()=>{
    if (paragraph.style.display === "none") {
        paragraph.style.display = 'block'
        eye.style.color= "red"
    }else{
        paragraph.style.display = "none"
        eye.style.color= "rgb(2 11 56)"
    }
}
buttonArticle1.onclick = ()=>{
    if (paragraph1.style.display === "none") {
        paragraph1.style.display = 'block'
        bullseye.style.color= "red"
    }else{
        paragraph1.style.display = "none"
        bullseye.style.color= "rgb(2 11 56)"
    }
}
buttonArticle2.onclick = ()=>{
    if (paragraph2.style.display === "none") {
        paragraph2.style.display = 'block'
        chart.style.color= "red"
    }else{
        paragraph2.style.display = "none"
        chart.style.color= "rgb(2 11 56)"
    }
}
