document.addEventListener('DOMContentLoaded', () => {
  new ScrollObserver(
    '.main-title',
    (target, isIntersecting) => {
      if (isIntersecting) {
        target.classList.add('inview')
      }
    },
    { rootMargin: '-100px 0px -100px 0px' },
  )
  new ScrollObserver(
    '.item',
    (target, isIntersecting) => {
      if (isIntersecting) {
        target.classList.add('inview')
      }
    },
    { rootMargin: '-100px 0px -100px 0px' },
  )
  new ScrollObserver(
    '.down-title',
    (target, isIntersecting) => {
      if (isIntersecting) {
        const ta = new TweenTextAnimation(target)
        ta.animate()
      }
    },
    { rootMargin: '-100px 0px -100px 0px' },
  )
  new ScrollObserver(
    '.skills',
    (target, isIntersecting) => {
      if (isIntersecting) {
        target.classList.add('inview')
      }
    },
    { rootMargin: '-100px 0px -100px 0px' },
  )
  const btn = document.querySelector('.toggle-icon')
  btn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('menu-open')
  })
})
