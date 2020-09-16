import Vue from 'vue'
import Inview from 'vueinview'
import { gsap } from 'gsap'
import { Power4 } from 'gsap/gsap-core.js'

Vue.use(Inview)

const revealCallback = (entries, self) => {
  const revealAnim = gsap.timeline({ ease: Power4.easeInOut, stagger: 1 })

  entries.forEach((entry) => {
    // eslint-disable-next-line no-console
    // el.classList.add('in-box-view')
    const container = entry.target
    const img = entry.target.querySelector('.reveal-img')
    const easeInOut = Power4.easeInOut

    if (entry.isIntersecting) {
      revealAnim.set(container, {
        visibility: 'visible'
      })
      revealAnim.fromTo(
        container,
        {
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
          webkitClipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
        },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          webkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.9,
          ease: easeInOut
        }
      )
      revealAnim.from(img, 4, {
        scale: 1.3,
        ease: Power4.easeOut,
        delay: -2
      })
      self.unobserve(entry.target)
    }
  })
}

const onEnter = (el) => {
  // eslint-disable-next-line no-console
  console.log(el)
  const revealObserver = new IntersectionObserver(revealCallback, { root: null, rootMargin: '0px', threshold: 0.9 })

  // el.classList.add('in-box-view')

  revealObserver.observe(el)
}

Vue.prototype.$inviewImageEnter = onEnter
