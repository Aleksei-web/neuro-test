import styled from './identity-component.module.css'

interface IIdentityActions {
  handlerAction: (i: number) => void
}

export const IdentityActions = ({ handlerAction }: IIdentityActions) => {
  return <div className={styled.actionContainer}>
    <button onClick={() => handlerAction(0)} className={styled.actionItem}>Не появлялся</button>
    <button onClick={() => handlerAction(1)} className={styled.actionItem}>Появлялся в речи</button>
    <button onClick={() => handlerAction(2)} className={styled.actionItem}>Появлялся как изображение</button>
  </div>
}
