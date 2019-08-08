import zoid from 'zoid'
import { config } from '../../config'

const zoidComponentInit = zoid.create({
  tag: 'zoid-presentation', // This has to be unique per js loaded on the page
  url: `${config.baseUrl}/child.html`
})

// --------------------------------------------------
// Passing Options
// const element = document.querySelector('#title')
// element.innerHTML = window.xprops.alternateText

// document.addEventListener('click', () => {
//   window.xprops.updateBackgroundColor('card', 'pink')
// }, false)