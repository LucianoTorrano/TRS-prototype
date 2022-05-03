let tl1 = gsap.timeline({defaults:{duration:1.5, ease: Power2.easeOut, opacity:0}});

tl1.from('.hero-title',{})
    .from('.hero-subtitle',{delay:.5},"+.2")
    .from('.button-container',{delay:.5},"+.5")
    .from('.hero-right',{delay:.5},"+1");

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".about",
        ease: Power2.easeOut,
        start: "top bottom"
    }
});

    tl2.from('.about-circle',{opacity:0,duration:1.5})
        .from('.gsap-about-us-top',{y:15,  opacity:0,duration:1},'+.3')

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".about-history",
        ease: Power2.easeOut,
        start: "top bottom"
    }
});

    tl3.from('.gsap-about-us-history',{y:15,  opacity:0,duration:1})

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".contact",
        ease: Power2.easeOut,
        start: "top bottom"
    }
});
    
    tl4.from('.contact-container',{opacity:0,duration:1})
