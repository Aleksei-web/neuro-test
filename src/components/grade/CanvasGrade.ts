export interface Circle {
  x: number;
  y: number,
  directions: string,
  color: string
  speed: number
}

export class CanvasGrade {
  ctx

  constructor (private canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
  }

  public renderCircle (items: Circle[]) {
    if (!this.ctx) return
    this.ctx.clearRect(0, 0, 1000, 600)
    items.forEach((el) => {
      this.drawCircle(el)
    })
  }

  private drawCircle (item: Circle) {
    const radius = 25
    if (this.ctx !== null) {
      this.ctx.beginPath()
      this.ctx.arc(item.x, item.y, radius, 0, 2 * Math.PI, false)
      this.ctx.fillStyle = item.color
      this.ctx.fill()
      this.ctx.stroke()
    }
  }

  private moveCircle (item: Circle) {
    if (item.directions === 'left') {
      if (item.x >= 520) {
        item.x -= item.speed
      } else {
        item.directions = 'right'
      }
    }
    if (item.directions === 'right') {
      if (item.x <= 480) {
        item.x += item.speed
      } else {
        item.directions = 'left'
      }
    }
  }
}
