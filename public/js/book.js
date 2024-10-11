// let contact = document.querySelector(".haridwar");
// console.log(contact.innerText);





window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll <= 100){
        document.querySelector(".nav").classList.remove("nav_bg");
    }

    else {
        document.querySelector(".nav").classList.add("nav_bg");
    }
});



document.querySelector(".reserve").addEventListener("click" , () => {
    console.log("askajdf");
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Optional: Add smooth scrolling effect
      });
})

function menu_bar(){
    console.log("Asdf");
    let x = document.querySelector(".nav_phone");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


// gsap code



gsap.from(".travel_img" , {
    scrollTrigger:{
        trigger:".travel_img",
        start:"top 80%"
    },
    scale:0,
    duration:0.8,
    y:100,
    stagger:0.5
})

gsap.from("#kedar" , {
    scrollTrigger:{
        trigger:"#kedar",
        start:"top 80%"
    },
    opacity:0,
    y:60,
    duration:1,
})

gsap.from("#badri" , {
    scrollTrigger:{
        trigger:"#badri",
        start:"top 80%"
    },
    opacity:0,
    y:60,
    duration:1,
})

gsap.from("#naini" , {
    scrollTrigger:{
        trigger:"#naini",
        start:"top 80%"
    },
    opacity:0,
    y:60,
    duration:1,
})

gsap.from("#muss" , {
    scrollTrigger:{
        trigger:"#muss",
        start:"top 80%"
    },
    opacity:0,
    y:60,
    duration:1,
})

gsap.from("#har" , {
    scrollTrigger:{
        trigger:"#har",
        start:"top 80%"
    },
    opacity:0,
    y:60,
    duration:1,
})

gsap.from("#rishi" , {
    scrollTrigger:{
        trigger:"#rishi",
        start:"top 80%"
    },
    opacity:0,
    y:60,
    duration:1,
})

