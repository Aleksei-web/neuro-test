import { MouseEvent } from 'react'

export class CanvasMaze {
  canvas
  ctx
  matrix!: any[][]
  tractor!: { x: number, y: number }
  sellSize = 100
  padding = 5
  wallColor = 'black'
  freeColor = 'white'
  backgroundColor = 'gray'
  width = 1000
  height = 600
  columns = 10
  rows = 6

  constructor (canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.start()
  }

  start () {
    this.matrix = this.createMatrix()
    this.tractor = {
      x: 0, y: 0
    }
    this.matrix[this.tractor.x][this.tractor.y].visited = true
    this.matrix[this.tractor.x][this.tractor.y].circle = true
    this.matrix[0][0].selectedBall = true

    this.drawMaze()
  }

  drawMaze () {
    if (!this.ctx) {
      return
    }

    this.ctx.clearRect(0, 0, this.width, this.height)

    while (!this.isReadyMaze()) {
      console.log('111')
      this.moveTractor()
    }

    console.log(this.matrix)

    this.addCircle()

    if (this.matrix[0][0].selectedBall) {
      this.setVariablePath(0, 0)
    }

    for (let y = 0; y < this.columns; y++) {
      for (let x = 0; x < this.rows; x++) {
        this.drawItem(this.matrix[x][y])
        if (this.matrix[x][y].circle) {
          this.drawCircle(y, x, this.matrix[x][y].selectedBall, this.matrix[x][y].variable)
        }
      }
    }

    this.strokeStar(this.columns * this.sellSize - this.sellSize / 2, this.rows * this.sellSize - this.sellSize / 2, 15, 5, 2)
  }

  createMatrix () {
    const itemMatrix = {
      x: 0,
      y: 0,
      l: true,
      r: true,
      t: true,
      b: true,
      visited: false,
      circle: false,
      selectedBall: false,
      variable: false
    }
    const matrix = []
    for (let y = 0; y < this.rows; y++) {
      const row = []
      for (let x = 0; x < this.columns; x++) {
        itemMatrix.x = x * this.sellSize
        itemMatrix.y = y * this.sellSize
        row.push({ ...itemMatrix })
      }
      matrix.push(row)
    }

    return matrix
  }

  removeSelectedBall () {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        this.matrix[y][x].selectedBall = false
        this.matrix[y][x].variable = false
      }
    }
  }

  addCircle () {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        const { l, r, t, b } = this.matrix[y][x]
        const isCorner = (l && t) || (t && r) || (l && b) || (r && b)
        if (isCorner) {
          this.matrix[y][x].circle = true
        }
        if (l && !r) {
          this.matrix[y][x].circle = true
        }
        if (t && !b) {
          this.matrix[y][x].circle = true
        }
        if (r && !l) {
          this.matrix[y][x].circle = true
        }
        if (b && !t) {
          this.matrix[y][x].circle = true
        }
        if (!t && !l && !b && !r) {
          this.matrix[y][x].circle = true
        }
      }
    }
  }

  drawWall (x: number, y: number, xTo: number, yTo: number) {
    if (!this.ctx) return
    this.ctx.beginPath()
    this.ctx.strokeStyle = 'green'
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(xTo, yTo)
    this.ctx.stroke()
  }

  strokeStar (x: number, y: number, r: number, n: number, inset: number) {
    x = x + 10
    y = y + 10
    if (!this.ctx) return
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.translate(x, y)
    this.ctx.moveTo(0, 0 - r)
    for (let i = 0; i < n; i++) {
      this.ctx.rotate(Math.PI / n)
      this.ctx.lineTo(0, 0 - (r * inset))
      this.ctx.rotate(Math.PI / n)
      this.ctx.lineTo(0, 0 - r)
    }
    this.ctx.closePath()
    this.ctx.fillStyle = '#FFD700'
    this.ctx.fill()
    this.ctx.restore()
  }

  clickCircle (e: MouseEvent<HTMLCanvasElement>) {
    const node = e.target as HTMLElement
    const { left, top } = node.getBoundingClientRect()
    const x = e.clientX - left - 25
    const y = e.clientY - top - 25
    const matrixX = Math.floor(x / this.sellSize)
    const matrixY = Math.floor(y / this.sellSize)
    console.log({ matrixY, matrixX })

    if (!this.matrix[matrixY] || !this.matrix[matrixY][matrixX]) {
      return
    }

    if (!this.matrix[matrixY][matrixX].variable) {
      return
    }

    if (matrixY === this.rows - 1 && matrixX === this.columns - 1) {
      this.start()
      return
    }
    this.removeSelectedBall()
    this.matrix[matrixY][matrixX].selectedBall = true

    this.setVariablePath(matrixX, matrixY)

    this.drawMaze()
  }

  setVariablePath (x: number, y: number) {
    const { l, r, t, b } = this.matrix[y][x]
    if (!b) {
      for (let i = y + 1; i < this.rows; i++) {
        if (this.matrix[i][x].circle) {
          this.matrix[i][x].variable = true
        }
        if (this.matrix[i][x].b) {
          break
        }
      }
    }

    if (!t) {
      for (let i = y - 1; i >= 0; i--) {
        if (this.matrix[i][x].circle) {
          this.matrix[i][x].variable = true
        }
        if (this.matrix[i][x].t) {
          break
        }
      }
    }

    if (!l) {
      for (let i = x - 1; i >= 0; i--) {
        if (this.matrix[y][i].circle) {
          this.matrix[y][i].variable = true
        }
        if (this.matrix[y][i].l) {
          break
        }
      }
    }

    if (!r) {
      for (let i = x + 1; i <= this.columns; i++) {
        console.log('i ', i)
        if (this.matrix[y][i].circle) {
          this.matrix[y][i].variable = true
        }
        if (this.matrix[y][i].r) {
          break
        }
      }
    }
  }

  private moveTractor () {
    const directionsMap = {
      left: 'left',
      right: 'right',
      top: 'top',
      bottom: 'bottom'
    }
    const directions = []

    if (this.tractor.y > 0) {
      directions.push(directionsMap.left)
    }

    if (this.tractor.y < this.columns - 1) {
      directions.push(directionsMap.right)
    }

    if (this.tractor.x > 0) {
      directions.push(directionsMap.top)
    }

    if (this.tractor.x < this.rows - 1) {
      directions.push(directionsMap.bottom)
    }

    const randomItem = this.getRandomItem(directions)

    switch (randomItem) {
      case directionsMap.top:
        return this.moveTractorTop()
      case directionsMap.right:
        return this.moveTractorRight()
      case directionsMap.bottom:
        return this.moveTractorBottom()
      case directionsMap.left:
        return this.moveTractorLeft()
    }
  }

  private getRandomItem (directions: string[]): string {
    const idx = Math.floor(Math.random() * directions.length)

    return directions[idx]
  }

  private isReadyMaze () {
    console.log('is ready ------->>>')
    let visited = true
    for (let y = 0; y < this.columns; y++) {
      for (let x = 0; x < this.rows; x++) {
        if (!this.matrix[x][y].visited) {
          visited = false
        }
      }
    }

    return visited
  }

  private moveTractorLeft () {
    if (!this.matrix[this.tractor.x][this.tractor.y - 1].visited) {
      this.matrix[this.tractor.x][this.tractor.y].l = false
      this.tractor.y -= 1
      this.matrix[this.tractor.x][this.tractor.y].r = false
      this.matrix[this.tractor.x][this.tractor.y].visited = true
    } else {
      this.tractor.y -= 1
    }
  }

  private moveTractorRight () {
    if (!this.matrix[this.tractor.x][this.tractor.y + 1].visited) {
      this.matrix[this.tractor.x][this.tractor.y].r = false
      this.tractor.y += 1
      this.matrix[this.tractor.x][this.tractor.y].l = false
      this.matrix[this.tractor.x][this.tractor.y].visited = true
    } else {
      this.tractor.y += 1
    }
  }

  private moveTractorTop () {
    if (!this.matrix[this.tractor.x - 1][this.tractor.y].visited) {
      this.matrix[this.tractor.x][this.tractor.y].t = false
      this.tractor.x -= 1
      this.matrix[this.tractor.x][this.tractor.y].b = false
      this.matrix[this.tractor.x][this.tractor.y].visited = true
    } else {
      this.tractor.x -= 1
    }
  }

  private moveTractorBottom () {
    if (!this.matrix[this.tractor.x + 1][this.tractor.y].visited) {
      this.matrix[this.tractor.x][this.tractor.y].b = false
      this.tractor.x += 1
      this.matrix[this.tractor.x][this.tractor.y].t = false
      this.matrix[this.tractor.x][this.tractor.y].visited = true
    } else {
      this.tractor.x += 1
    }
  }

  private drawItem (matrix1: {
    x: number,
    y: number,
    l: boolean,
    r: boolean,
    t: boolean,
    b: boolean,
    visited: boolean
  }) {
    const { x, y, l, r, t, b } = matrix1

    if (l) {
      this.drawWall(x, y, x, y + this.sellSize)
    }
    if (r) {
      this.drawWall(x + this.sellSize, y, x + this.sellSize, y + this.sellSize)
    }
    if (t) {
      this.drawWall(x, y, x + this.sellSize, y)
    }
    if (b) {
      this.drawWall(x, y + this.sellSize, x + this.sellSize, y + this.sellSize)
    }
  }

  private drawCircle (x: number, y: number, selectedBall: boolean, isVariable: boolean) {
    x += x * this.sellSize + this.sellSize / 2
    y += y * this.sellSize + this.sellSize / 2
    const radius = 30
    let fill
    if (isVariable) {
      fill = 'gray'
    }
    if (selectedBall) {
      fill = 'orange'
    }
    const stroke = 'white'
    const strokeWidth = 1
    if (this.ctx !== null) {
      this.ctx.beginPath()
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
      if (fill) {
        this.ctx.fillStyle = fill
        this.ctx.fill()
      }
      if (stroke) {
        this.ctx.lineWidth = strokeWidth
        this.ctx.strokeStyle = stroke
        this.ctx.stroke()
      }
    }
  }
}
