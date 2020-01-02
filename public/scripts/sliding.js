window.addEventListener('load',function(){
    
    gliders=document.querySelectorAll('.glider');

    gliders.forEach(glider=> {
        
   
    window._ = new Glider(glider, {
        slidesToShow: 2.2, //'auto',
        slidesToScroll: 1,
        draggable: true,
        scrollLock: false,
        dots: '#dots',
        rewind: true,

        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToScroll:1,
                    slidesToShow: 4.3,
                    
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToScroll:1 ,
                    slidesToShow: 3,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    dots: false,
                    arrows: false,
                    scrollLock: true,
                    exactWidth: true
                }
            }
        ]
    });

});

  });