interface IProgress {
  width: number
}

export const Progress = ({ width }: IProgress) => {
  const showResult = () => {
    if (width < 20) {
      return 'старайся'
    }
    if (width < 40) {
      return 'еще чуть чуть'
    }
    if (width < 60) {
      return 'хорошо'
    }
    if (width < 80) {
      return 'отлично'
    } else {
      return 'самый лучший'
    }
  }
  return <div className="progress" role="progressbar" style={{ height: '30px' }}>
    <div className="progress-bar text-bg-warning" style={{ width: `${width}%` }}>{showResult()}</div>
  </div>
}
