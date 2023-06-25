import styled from './instruction.module.css'

interface IInstruction {
  startTest: () => void
  instruction: string
  skill: string[]
  imgName: string
}

export const Instruction = ({ startTest, instruction, skill, imgName }: IInstruction) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const logo = require(`./${imgName}`)

  return <>
    <div className={styled.container}>
      <div className={styled.sectionInfo}>
        <div>
          <div>
            <h2 className={styled.title}>Инструкции</h2>
            <p>
              {instruction}
            </p>
          </div>
          <div style={{
            overflowY: 'auto',
            maxHeight: '300px'
          }}>
            <h2 className={styled.title}>Когнитивные способности</h2>
            {skill.map(el => <p key={el}>{el}</p>)}
          </div>

        </div>
        <div>
        </div>
      </div>
      <div className={styled.sectionImg} style={{ backgroundImage: `url(${logo})` }}>
        <button onClick={startTest} className={styled.btnStart}>начать</button>
      </div>
    </div>
  </>
}
