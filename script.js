

var timeout;


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});






function moveCircle(xscale,yscale){


    window.addEventListener("mousemove", function(dets){
        document.querySelector('#minicircle').style.transform = `translateX(${dets.clientX}px) translateY(${dets.clientY}px) scale(${xscale},${yscale})`;
    });
}

function circleShape(){
    clearTimeout(timeout);

    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener('mousemove',(dets)=>{


        xscale=gsap.utils.clamp(0.8,1.2,dets.clientX - xprev);
        yscale=gsap.utils.clamp(0.8,1.2,dets.clientY - yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;

        moveCircle(xscale,yscale);
   timeout= setTimeout(() => {

    
        document.querySelector('#minicircle').style.transform = `translateX(${dets.clientX}px) translateY(${dets.clientY}px) scale(1,1)`;
    }, 100);

    })
    

}

function firstPageAnim(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .from(".boundingelem" ,{
        y:'100',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        // stagger: 0.1 to make delay in each class
    })
    .from("#footer",{
        y:-10,
        opacity:0,
        duration:1,
        ease:Expo.easeInOut
    })

}
    document.querySelectorAll('.elem1').forEach(function (elem){
        var rotate=0;
        var rotatedegree=0;
        elem.addEventListener('mousemove',function(dets){
         
            let topdiff= dets.clientY-elem.getBoundingClientRect().top;
       
            rotatedegree= dets.clientX-rotate;
            rotate=dets.clientX;
            // calculate the degree how much to rotate based on the difference on x axis

             gsap.to(elem.querySelector('img'),{
                opacity:1,
                ease:Power3,
                top:topdiff,
                left:dets.clientX,
                rotate: gsap.utils.clamp(-20,20,rotatedegree) // to rotate a certain degree 

             })
        })
        elem.addEventListener('mouseleave',()=>{
            gsap.to(elem.querySelector('img'),{
                opacity:0,
                ease:Power3
            })
        })
    })



firstPageAnim();

circleShape();




