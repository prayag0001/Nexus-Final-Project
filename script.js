function wow(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
wow();

// gsap.to(".bottle",{
//     scrollTrigger:{
//         trigger:".bottle",
//         scroller:"#main",
//         start:"top 10%",
//         end:"top -250%",
//         scrub:2 ,
//         pin:true
//     },
//     rotate: -15,
// })

var boom= gsap.timeline();

// boom.to(".bottle",{
//   scrollTrigger:{
//     trigger:".bottle",
//     scroller:"#main",
//     start:"top 15%",
//     end:"top -20%",
//     scrub:2 ,
//     pin:true
// },
// rotate: -15,
// duration: 1,
// })
boom.to(".bottle",{
  scrollTrigger:{
    trigger:".bottle",
    scroller:"#main",
    start:"top 14.5%",
    end:"top -300%",
    scrub:.5 ,
    pin:true
},
rotate: -15,
// duration: .001,
})
.to(".bottle",{
  scrollTrigger:{
    trigger:".bottle",
    scroller:"#main",
    start:"top 14%",
    end:"top -80%",
    scrub:.5 ,
    pin:true
},
scale: .5,
opacity:0,
x:40
})

gsap.from(".aboutus h1,.email h1,.email section,.smedia",{
  scrollTrigger:{
    trigger:".aboutus h1",
    start:"top 50%",
    scroller:"#main",
  },
  stagger:.3,
  x:30,
  opacity:0
})


// var hazy = document.querySelector("#onewo"),
// cluster = document.querySelector(".cluster"),
// sumpina = document.querySelector("#sumpina"),
// ipaa = document.querySelector("#ipaa"),
// hoppya = document.querySelector("#hoppya"),
// hazya = document.querySelector("#hazya"),
// ;



// hazy.addEventListener("click",{
//   ipaa.style.display="flex";

// })

