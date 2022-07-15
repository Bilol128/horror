const burger_btn = document.querySelector(".burger-button"),
      burger_menu = document.querySelector('.burger-menu'),
      body = document.querySelector('body'),
      navbar = document.querySelector('.navbar'),
      acardion = document.querySelectorAll('.acardion-element')

      acardion.forEach(acardion_elem => {
        acardion_elem.addEventListener('click' , function(){
            if(acardion_elem.classList.contains('acardion-active')){
                acardion_elem.classList.remove('acardion-active')
            }else{
                acardion.forEach((event2) => event2.classList.remove("acardion-active"));
                acardion_elem.classList.add('acardion-active')
            }
        })    
      });




      new Swiper('.slider-container' ,{
          loop:false,
          freeMode:true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
          },
          spaceBetween: 30,
          speed:200,
          slidesPerView: 5.36,
          initialSlide:1,
        breakpoints: {
            1210:{
                slidesPerView: 5.36,
            },
            1200: {
                slidesPerView: 2.6,
            },
            992:{
                slidesPerView: 2.36,
            },
            768: {
                slidesPerView: 2.36,
            },
            576:{
                slidesPerView:2.2,
            },
            480: {
                slidesPerView:1.1,
            },
            320: {
                slidesPerView: 1.1,
            },
        }
       })



      burger_btn.addEventListener("click" , function(){
          burger_btn.classList.toggle("burger-button_active")
          body.classList.toggle("body-lock_burger")
          burger_menu.classList.toggle("burger-menu_active")
      })
      window.addEventListener('scroll' , function(){
          if(window.scrollY >= 10){
            navbar.classList.add("navbar-border")
          }else{
              navbar.classList.remove('navbar-border')
          }
      })