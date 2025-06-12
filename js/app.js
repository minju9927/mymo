window.addEventListener('DOMContentLoaded', () => {


  const navItems = document.querySelectorAll('.nav-li')

  const totalMenuBtn = document.querySelector('.total-menu')
  const modalLayer = document.querySelector('.modal-layer')
  const modalCloseBtn = document.querySelector('.modal-btn')
  const header = document.querySelector('header')

  // ('','','')


  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scroll')
    } else {

      header.classList.remove('scroll')
    }
  })



  const modalOpen = () => {
    modalLayer.classList.add('full')

    setTimeout(() => {

      modalLayer.classList.add('active', 'blur-layer')
    }, 10)

  }
  const modalClose = () => {

    modalLayer.classList.remove('active')

    setTimeout(() => {

      modalLayer.classList.remove('full', 'blur-layer')
    }, 300)


  }



  totalMenuBtn.addEventListener('click', modalOpen)
  modalCloseBtn.addEventListener('click', modalClose)



  navItems.forEach((item, i) => {

    const btn = item.querySelector('a')
    const subList = btn.nextElementSibling;

    if (!subList) return


    item.addEventListener('mouseenter', () => {
      subList.classList.add('On')

    })
    item.addEventListener('mouseleave', () => {
      subList.classList.remove('On')

    })

  })


  // hero slider


  const heroSlider2 = new Swiper(".hero-slider-2", {
    slidesPerView: 1,
    effect: 'fade',
    slidesPerGroup: 1,
    autoplay: false
  });
  const heroSlider1 = new Swiper(".hero-slider-1", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: -200,
    navigation: {
      nextEl: ".hero-slider-1 .swiper-button-next",
      prevEl: ".hero-slider-1 .swiper-button-prev",
    },
    pagination: {
      el: '.hero-slider-1  .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    autoplay: false

  });


  heroSlider1.controller.control = heroSlider2
  heroSlider2.controller.control = heroSlider1


  const heroPlayBtn = document.querySelector('.slider-ctrol-wrap .slider-play')
  const heroStopBtn = document.querySelector('.slider-ctrol-wrap .slider-stop')



  heroPlayBtn.addEventListener('click', () => {
    heroSlider1.autoplay.stop()
    heroSlider1.update()
    heroSlider1.autoplay.start()

    heroPlayBtn.classList.remove('on')
    heroStopBtn.classList.add('on')
  })

  heroStopBtn.addEventListener('click', () => {
    heroSlider1.autoplay.stop()
    heroSlider2.autoplay.stop()


    heroPlayBtn.classList.add('on')
    heroStopBtn.classList.remove('on')
  })



})