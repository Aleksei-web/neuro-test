import { Icon } from '@material-ui/core'

import styled from './component-decoding.module.css'
import { useEffect } from 'react'

interface IObject {
  iconName: string
  handlerObject: () => void
}

export const Object = ({ iconName, handlerObject }: IObject) => {
  useEffect(() => {
    setTimeout(handlerObject, 2000)
  }, [])

  return <div>
    <Icon className={styled.objectIcon}>{iconName}</Icon>
  </div>
}
