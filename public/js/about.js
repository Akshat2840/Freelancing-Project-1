window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll <= 100){
        document.querySelector(".nav").classList.remove("nav_bg");
    }

    else {
        document.querySelector(".nav").classList.add("nav_bg");
    }
});

function menu_bar(){
    console.log("Asdf");
    let x = document.querySelector(".nav_phone");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


gsap.from(".images img" , {
    scrollTrigger:{
        // trigger:"img_1",
        start:"top 90%",
    },
    y:-700,
    duration:0.8,
    stagger:0.5,
    
})

gsap.from(".about p" , {
    scrollTrigger:{
        // trigger:"img_1",
        start:"top 90%",
    },
    y:-200,
    duration:0.8,
    
    
})

gsap.from(".cards .card" , {
    y:200,
    // scale:0,
    stagger:0.5
})

gsap.from(".card img" , {
    scrollTrigger:{
        trigger:".card",
        start:"top 50%",
        // markers:true,
    },
    scale:0,
    stagger:0.1
})