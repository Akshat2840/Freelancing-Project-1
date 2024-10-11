const scrollContainer = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider_card");
const cards = document.querySelectorAll(".cards");


function getCurrentSlide() {
    const containerScrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.clientWidth;
    
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        const slideLeft = slide.offsetLeft;
        const slideRight = slideLeft + slide.offsetWidth;

        
        if (slideLeft >= containerScrollLeft && slideRight <= containerScrollLeft + containerWidth) {
            // console.log(`Current slide: ${i}`);
            return i; 
        }
    }

    return -1;
}

function swipe() {
    if(touchendX < touchstartX){
        console.log("swiped left");
        
        if(getCurrentSlide() == 7){
            scrollContainer.scrollTo({
                left: slides[1].offsetLeft - scrollContainer.offsetLeft,
                behavior: 'instant'
                
            })

            scrollContainer.scrollTo({
                left: slides[getCurrentSlide() + 1].offsetLeft - scrollContainer.offsetLeft
            })  
        }

        else{
            scrollContainer.scrollTo({
                left: slides[getCurrentSlide() + 1].offsetLeft - scrollContainer.offsetLeft   
            })
        }
    }

    else if(touchendX > touchstartX){
        console.log("swiped right");
        if(getCurrentSlide() == 0){
            scrollContainer.scrollTo({
                left: slides[6].offsetLeft - scrollContainer.offsetLeft,
                behavior: 'instant'
            })

            scrollContainer.scrollTo({
                left: slides[getCurrentSlide() + 1].offsetLeft - scrollContainer.offsetLeft
            }) 
        }

        else{
            scrollContainer.scrollTo({
                left: slides[getCurrentSlide() - 1].offsetLeft - scrollContainer.offsetLeft,
            })
        }
    }
}

function time_slide() {
    // console.log("asfsa");
    if(getCurrentSlide() == 7){
        scrollContainer.scrollTo({
            left: slides[1].offsetLeft - scrollContainer.offsetLeft,
            behavior: 'instant'
            
        })

        scrollContainer.scrollTo({
            left: slides[getCurrentSlide() + 1].offsetLeft - scrollContainer.offsetLeft
        })  
    }

    else{
        scrollContainer.scrollTo({
            left: slides[getCurrentSlide() + 1].offsetLeft - scrollContainer.offsetLeft   
        })
    }
}

function menu_bar(){
    console.log("Asdf");
    let x = document.querySelector(".nav_phone");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

document.querySelector(".slider").addEventListener("touchstart" , (e) => {
    touchstartX = e.changedTouches[0].screenX;
})

document.querySelector(".slider").addEventListener("touchend" , (e) => {
    touchendX = e.changedTouches[0].screenX;
    swipe();
})

window.addEventListener('load' , () => {
    Interval = setInterval(time_slide , 4000);
})





document.addEventListener('keydown' , function(event) {
    
    if(event.key == 'ArrowRight'){
        if(getCurrentSlide() == 7){
            scrollContainer.scrollTo({
                left: slides[1].offsetLeft - scrollContainer.offsetLeft,
                behavior: 'instant'
                
            })

            scrollContainer.scrollTo({
                left: slides[getCurrentSlide() + 1].offsetLeft - scrollContainer.offsetLeft
            })  
        }

        else{
            scrollContainer.scrollTo({
                left: slides[getCurrentSlide() + 1].offsetLeft - scrollContainer.offsetLeft   
            })
        }
    }

    if(event.key == 'ArrowLeft'){
        if(getCurrentSlide() == 0){
            scrollContainer.scrollTo({
                left: slides[6].offsetLeft - scrollContainer.offsetLeft,
                behavior: 'instant'
            })

            scrollContainer.scrollTo({
                left: slides[getCurrentSlide() + 1].offsetLeft - scrollContainer.offsetLeft
            }) 
        }

        else{
            scrollContainer.scrollTo({
                left: slides[getCurrentSlide() - 1].offsetLeft - scrollContainer.offsetLeft,
            })
        }
    }

})

window.addEventListener('load' , () => {
    scrollContainer.scrollTo({
        left: slides[1].offsetLeft - scrollContainer.offsetLeft,
        behavior: 'instant'
    })
})


// cards.forEach((card) => {
//     card.addEventListener("click" , () => {
        
//     })
// })












const lamba = (elm) => {
    document.getElementById(elm.id).parentElement.classList.toggle("trend_info_expand");
    // document.getElementById(elm.id).parentElement.setAttribute('id' , 'trend_info_expand');
    if(document.getElementById(elm.id).parentElement.classList.contains("trend_info_expand")){ 
        document.getElementById(elm.id).innerText = "Read Less";
    }
    else{
        document.getElementById(elm.id).innerText = "Read More";
    }
}

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll <= 100){
        document.querySelector(".nav").classList.remove("nav_bg");
    }

    else {
        document.querySelector(".nav").classList.add("nav_bg");
    }
});














// gsap code


gsap.from(".char" , {
    scrollTrigger:{
        trigger:".char",
        start:"top 90%",
    },
    y:80,
    duration:0.8,
    
})

gsap.from(".home_para" , {
    scrollTrigger:{
        trigger:".home_para",
        start:"top 90%",
    },
    y:80,
    opacity:0,
    delay:0.4,
    duration:0.8,
    
})

gsap.from("#yamunotri" , {
    scrollTrigger:{
        trigger:"#yamunotri",
        start:"top 90%",
    },
    x:-40,
    y:100,
    opacity:0,
    duration:0.8,
})

gsap.from("#gangotri" , {
    scrollTrigger:{
        trigger:"#gangotri",
        start:"top 90%",
    },
    x:40,
    y:100,
    opacity:0,
    duration:0.8,
})

gsap.from("#kedarnath" , {
    scrollTrigger:{
        trigger:"#kedarnath",
        start:"top 90%",
    },
    x:-40,
    y:100,
    opacity:0,
    duration:0.8,
})

gsap.from("#badrinath" , {
    scrollTrigger:{
        trigger:"#badrinath",
        start:"top 90%",
    },
    x:40,
    y:100,
    opacity:0,
    duration:0.8,
})

gsap.from(".special" , {
    scrollTrigger:{
        trigger:".special",
        start:"top 90%",
    },
    y:80,
    opacity:0,
    duration:0.8,
    
})

gsap.from(".trend" , {
    scrollTrigger:{
        trigger:".trend",
        start:"top 90%",
    },
    y:80,
    opacity:0,
    duration:0.8,
})

gsap.from("#first_trend" , {
    scrollTrigger:{
        trigger:"#first_trend",
        start:"top 85%",
    },
    y:80,
    opacity:0,
    duration:0.8,
})

gsap.from("#second_trend" , {
    scrollTrigger:{
        trigger:"#second_trend",
        start:"top 85%",
    },
    y:80,
    opacity:0,
    delay:0.4,
    duration:0.8,
})

gsap.from("#third_trend" , {
    scrollTrigger:{
        trigger:"#third_trend",
        start:"top 85%",
    },
    y:80,
    opacity:0,
    delay:0.8,
    duration:0.8,
})

gsap.from(".trend_info" , {
    scrollTrigger:{
        trigger:".trend_info",
        start:"top 98%",
    },
    y:100,
    opacity:0,
    duration:0.8,
})

gsap.from(".rent_heading" , {
    scrollTrigger:{
        trigger:".rent_heading",
        start:"top 90%",
    },
    y:100,
    opacity:0,
    duration:0.8
})

gsap.from("#bus" , {
    scrollTrigger:{
        trigger:"#bus",
        start:"top 65%",
    },
    x:461,
    // opacity:0,
    duration:1.5,
    ease:Linear.easeStart
})

gsap.from("#helicopter" , {
    scrollTrigger:{
        trigger:"#helicopter",
        start:"top 65%",
    },
    x:-461,
    // opacity:0,
    duration:1.5,
    ease:Linear.easeStart
})

gsap.from(".p_down" , {
    scrollTrigger:{
        trigger:".p_down",
        start:"top 95%",
    },
    opacity:0,
    delay:2,
    y:-50,
    ease:Linear.easeStart
})

gsap.from(".btn button" , {
    scrollTrigger:{
        trigger:".btn button",
        start:"top 100%",
    },
    duration:1,
    scale:0,
    y:100,
    // rotationX:360,
})

gsap.from(".rects" , {
    scrollTrigger:{
        trigger:".contact_3",
        start:"top 90%",
    },
    y:300,
    // scale:0,
    opacity:0,
    stagger:0.2
    
})

document.querySelectorAll(".cards").addEventListener("click" , () => {
    console.log("daefsg");
})