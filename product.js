let slideindex = 0;
tampilkanSlide();

function  tampilkanSlide() {
    let slides =  document.getElementsByClassName('slide');

    for  (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }

    slideindex++;
    if (slideindex > slides.length ) {
        slideindex = 1;
        }
    
        slides[slideindex - 1].classList.add("show");
        setTimeout(tampilkanSlide, 3000); 
    }
