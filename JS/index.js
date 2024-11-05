function slider(paginationSelector, slidesSelector) {
  const sliderPaginationEl = document.querySelectorAll(paginationSelector)

  const slidesContainer = document.querySelectorAll(slidesSelector)

  sliderPaginationEl.forEach((el, i) => {
    el.onclick = () => {
      sliderPaginationEl.forEach((el) => {
        el.classList.remove('active')
      })
      slidesContainer.forEach((el) => {
        el.classList.remove('active')
      })
      sliderPaginationEl[i].classList.add('active')
      slidesContainer[i].classList.add('active')
    }
  })
}
slider(
  '.slider_pagination .slider_pagination_el',
  'section.services .slider_slides_container',
)
slider(
  'section.clients .clients_slider_pagination_el',
  'section.clients .clients_slider_slide',
)

const buttonUp = document.querySelector('.icon-up')
buttonUp.onclick = () => {
  window.scrollTo(0, 0)
}
