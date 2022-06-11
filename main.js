let toggle = document.querySelector('#header .toggle-button')
let collapse = document.querySelectorAll('#header .collapse')

toggle.addEventListener('click', function () {
  for (let col of collapse) {
    col.classList.toggle('collapse-toggle')
  }
})


new Masonry('#posts .grid', {
  itemSelector: '.grid-item',
  gutter: 20,
})
