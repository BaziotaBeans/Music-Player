var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    spaceBetween: 14,
    width: 100,
    height: 185,
    // autoHeight: true,
    setWrapperSize:true,
    speed: 300,
    updateOnWindowResize: true,  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
});