/* @jsx node */

import zoid from 'zoid'
import { config } from '../../config'
import { node, dom } from 'jsx-pragmatic';

const zoidComponentInit = zoid.create({
  tag: 'zoid-presentation', // This has to be unique per js loaded on the page
  url: `${config.baseUrl}/child.html`,
  dimensions: {
    width: '300px',
    height: '300px'
  }
})

const options = {}
const zoidComponent = zoidComponentInit(options)

const elementId = '#zoid-component'
zoidComponent.render(elementId)

// --------------------------------------------------
// Pre-render Template
// const zoidComponentInit = zoid.create({
//   tag: 'zoid-presentation', // This has to be unique per js loaded on the page
//   url: `${config.baseUrl}/child.html`,
//   dimensions: {
//     width: '300px',
//     height: '300px'
//   },
//   prerenderTemplate: function containerTemplate({ doc }) {
//     const html = doc.createElement('html')
//     const p = doc.createElement('p')
//     p.innerText = 'Please wait while the component loads...'
//     html.appendChild(p)
//     return html;
//   }
// })

// --------------------------------------------------
// Context
// const zoidComponentInit = zoid.create({
//   tag: 'zoid-presentation', // This has to be unique per js loaded on the page
//   url: `${config.baseUrl}/child.html`,
//   dimensions: {
//     width: '300px',
//     height: '300px'
//   },
//   prerenderTemplate: function containerTemplate({ doc }) {
//     const html = doc.createElement('html')
//     const p = doc.createElement('p')
//     p.innerText = 'Please wait while the component loads...'
//     html.appendChild(p)
//     return html;
//   },
//   defaultContext: 'popup'
// })

// --------------------------------------------------
// Passing Options
// const options = {
//   alternateText: 'Stuff',
//   updateBackgroundColor: (elementId, color) => {
//     const el = document.querySelector(`#${elementId}`)
//     el.style.backgroundColor = color
//   }
// }

// --------------------------------------------------
// Props Validation
// const zoidComponentInit = zoid.create({
//   tag: 'zoid-presentation', // This has to be unique per js loaded on the page
//   url: `${config.baseUrl}/child.html`,
//   dimensions: {
//     width: '300px',
//     height: '300px'
//   },
//   prerenderTemplate: function containerTemplate({ doc }) {
//     const html = doc.createElement('html')
//     const p = doc.createElement('p')
//     p.innerText = 'Please wait while the component loads...'
//     html.appendChild(p)
//     return html;
//   },
//   defaultContext: 'popup',
//   props: {
//     alternateText: {
//       type: 'string',
//       required: false
//     },
//     updateBackgroundColor: {
//       type: 'function',
//       required: true
//     }
//   }
// })

// --------------------------------------------------
// Props Validation 2
// const zoidComponentInit = zoid.create({
//   tag: 'zoid-presentation', // This has to be unique per js loaded on the page
//   url: `${config.baseUrl}/child.html`,
//   dimensions: {
//     width: '300px',
//     height: '200px'
//   },
//   prerenderTemplate: function containerTemplate({ doc }) {
//     const html = doc.createElement('html')
//     const p = doc.createElement('p')
//     p.innerText = 'Please wait while the component loads...'
//     html.appendChild(p)
//     return html;
//   },
//   defaultContext: 'popup',
//   props: {
//     alternateText: {
//       type: 'string',
//       validate: ({ value, props }) => {
//         console.log(value, props)
//         console.log(value.includes('People'))
//         if (value.includes('People')) {
//           throw Error('Bad text friend')
//         }
//         // ...
//       }
//     },
//     updateBackgroundColor: {
//       type: 'function',
//       required: true
//     }
//   }
// })
