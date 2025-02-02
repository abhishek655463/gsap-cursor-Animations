let main=document.getElementById("main");
let cursor=document.querySelector("#cursor");
let overlay=document.querySelector("#overlay");

let image=document.querySelector("#image");
    main.addEventListener("mousemove",function(event){

        gsap.to(cursor,{
          x:event.x,
          y:event.y,
          duration:0.1,
          ease: "power2.out"
        })
        // gsap.to("#cursor2",{
        //     x:event.x,
        //     y:event.y,
        //     duration:0.3,
        //     ease: "power1.out"
        //   })
        
    

    })

image.addEventListener("mouseenter",(events)=>{
    gsap.to(cursor,{
        scale:4,
        duration:0.1,
        ease: "power2.out"
      })

      cursor.innerHTML="click"


});

image.addEventListener("mouseleave",(events)=>{
    gsap.to(cursor,{
        scale:1,
        duration:0.1,
        ease: "power2.out"
        
      })

      cursor.innerHTML=""
    });