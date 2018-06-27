import zoid from 'zoid'
import { config } from '../../config'

const element = 'zoid-component'
const options = {}

const helloWorld = zoid.create({
  tag: 'hello-world', // This has to be unique per js loaded on the page
  url: `${config.baseUrl}/child.html`
})

helloWorld.render(options, element)