var j = 0; 
showSlide4(j);

function changeSlides4(x) {showSlide4(j += x);}

function showSlide4(k)
{
    var service = document.getElementById("freelancing");
    var slides = service.getElementsByClassName("slide");
    var n = slides.length;

    for (var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    if(k>=n) {j=0;}
    if(k<0) {j=n-1;}

    slides[j].style.display = "block";
}