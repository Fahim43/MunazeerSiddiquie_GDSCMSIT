var tl = gsap.timeline()

tl.from("#ch-logo img",{
    y:400,
    opacity:0,
    duration:0.3,
    delay:0.6,
})
tl.from("#ch-logo i",{
    opacity:0,
    delay:0.6,
})
tl.to("#ch-logo i",{
    y:30,
    repeat:-1,
    duration:0.5,
    yoyo:true
})
gsap.to("#ch-logo i", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#ch-logo i",
        scroller: "body",
        // markers: true,
        start: "top 7%",
        end: "top 53%",
        scrub: true
    }
})
gsap.to("#ch-logo", {
    y: -70,
    opacity: 0,
    duration: 1,
    delay:0.3,
    scrollTrigger: {
        trigger: "#ch-logo",
        scroller: "body",
        // markers: true,
        start: "top -40%",
        end: "top -55%",
    }
})


gsap.from("#ch2 span, #ch2 button",{
    y:400,
    opacity:0,
    duration:0.6,
    delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#ch2 span, #ch2 button",
        scroller:"body",
    }
})
// gsap.from("#page1", {
//     y: -70,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page",
//         scroller: "body",
//         // markers: true,
//         start: "top -40%",
//         end: "top -55%",
//     }
// })




const scrollElement = document.getElementById('scroll');

    function hideScrollElement() {
      scrollElement.style.display = 'none';
    }

    function showScrollElement() {
        scrollElement.style.display = 'block';
      }
  
      function handleScroll() {
        if (window.scrollY > 0) {
          hideScrollElement();
        } else {
          showScrollElement();
        }
      }
    window.addEventListener('scroll', handleScroll);

// const scrollElement = document.getElementById('scroll');

// function hideScrollElement() {
//   scrollElement.style.display = 'none';
// }

// function handleScroll() {
//   if (window.scrollY > 0) {
//     hideScrollElement();
//     window.removeEventListener('scroll', handleScroll);
//   }
// }