const liNav = document.querySelectorAll('.navigation-container  ul .dropdown');

let accordionLi = document.querySelectorAll('.accordion-li-mobile');



let mouse = {
    x:null,
    y:null,
    radius:100
}


addEventListener('mousemove', event =>{
    mouse.x = event.x ;
    
    mouse.y = event.y;
    
});


liNav.forEach(li =>{
    li.addEventListener('mouseover', (e) =>{
        let ulChild = li.querySelector('ul');
        
        ulChild.style.display= 'flex';

        if(ulChild.style.display = 'flex'){
            ulChild.addEventListener('mouseleave', () =>{
                ulChild.style.display = 'none';
                
            });
        }


        // if(mouse.x && mouse.y !== ulChild || mouse.x && mouse.y !== li){
        //     ulChild.style.display = 'none';
        // }


    });

    li.addEventListener('mouseleave', (e) =>{
        let ulChild = li.querySelector('ul');
        
        // setInterval()
        // ulChild.style.display = 'none';
        

    });


    
})


accordionLi.forEach((li) =>{
    li.addEventListener("click", () =>{
        let accordionContent = li.querySelector('.accordion-content-mobile');
        let arrow = li.querySelector('.arrow-dark');


        accordionContent.classList.toggle('show');
        arrow.classList.toggle('rotate');

        // accordionContent.style.display = 'block';

        // if(accordionContent.style.display == 'block'){
        //     accordionContent.style.display = 'none';
        //     console.log('true');
        // }
    })
})




