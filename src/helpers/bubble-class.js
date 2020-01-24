import noise from 'perlin-simplex'
import bubbleSpecs from '@/helpers/bubble-spec'

const simplex = new noise()

const SCROLL_SPEED = 0.3
const NOISE_SPEED = 0.004
const NOISE_AMOUNT = 5
const CANVAS_WIDTH = 2800

const bubblesEl = document.querySelector('.bubbles')

class Bubbles {
  constructor(specs) {
    this.bubbles = []

    specs.forEach((spec, index) => {
      this.bubbles.push(new Bubble(index, spec))
    })

    requestAnimationFrame(this.update.bind(this))
  }

  update() {
    this.bubbles.forEach(bubble => bubble.update())
    this.raf = requestAnimationFrame(this.update.bind(this))
  }
}

class Bubble {
  constructor(index, { src, x, y, s = 1 }) {
    this.index = index
    this.x = x
    this.y = y
    this.scale = s
    this.src = src

    this.noiseSeedX = Math.floor(Math.random() * 64000)
    this.noiseSeedY = Math.floor(Math.random() * 64000)

    this.el = document.createElement('div')
    this.el.style.backgroundImage = `url(${require(`@/assets/bubble/${this.src}`)})`
    this.el.className = 'bubble'
    bubblesEl.appendChild(this.el)
  }

  update() {
    this.noiseSeedX += NOISE_SPEED
    this.noiseSeedY += NOISE_SPEED
    let randomX = simplex.noise(this.noiseSeedX, 0)
    let randomY = simplex.noise(this.noiseSeedY, 0)

    this.x -= SCROLL_SPEED
    this.xWithNoise = this.x + randomX * NOISE_AMOUNT
    this.yWithNoise = this.y + randomY * NOISE_AMOUNT

    if (this.x < -200) {
      this.x = CANVAS_WIDTH
    }

    this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px) scale(${this.scale})`
  }
}

export default new Bubbles(bubbleSpecs)
