export class CanvasGrade2 {
  ctx;
  COLOR = "white";
  X = 500 - 35;
  Y = 300 - 35;
  RADIUS = 70;
  IS_PLAYING = false;

  constructor(private canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  stop() {
    this.IS_PLAYING = false;
    this.ctx?.clearRect(0, 0, 800, 400);
  }

  async play() {
    this.IS_PLAYING = true;
    const corners = [
      0, 4, 6, 8, 6, 8, 10, 0, 12, 6, 8, 5, 4, 0, 6, 4, 8, 12, 0, 8, 12, 0, 4,
      6, 8, 6, 8, 10, 0, 11, 6, 8, 6, 4, 0, 6, 4, 8, 12, 0, 8, 11, 0, 4,
    ];

    for (let corner of corners) {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, 800, 400);
      if (corner === 0) {
        this.drawCircle();
      } else {
        this.drawPolygon(corner);
      }
      await this.delay(200);
      if (!this.IS_PLAYING) {
        break;
      }
    }
  }

  private delay(milliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  private drawCircle() {
    if (this.ctx !== null) {
      this.ctx.beginPath();
      this.ctx.arc(this.X, this.Y, this.RADIUS, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = this.COLOR;
      this.ctx.fill();
    }
  }

  private drawPolygon(n: number) {
    if (!this.ctx) return;

    const arrAngle = [];
    for (let i = 0; i < n; i++) {
      const angle = (2 * Math.PI * i) / n;
      arrAngle.push({
        x: this.RADIUS * Math.cos(angle) + this.X,
        y: this.RADIUS * Math.sin(angle) + this.Y,
      });
    }
    this.ctx.beginPath();
    this.ctx.moveTo(this.X, this.Y);

    arrAngle.forEach((el) => {
      if (!this.ctx) return;
      this.ctx.lineTo(el.x, el.y);
    });

    this.ctx.lineTo(arrAngle[0].x, arrAngle[0].y);
    this.ctx.fillStyle = this.COLOR;
    this.ctx.fill();
  }
}
