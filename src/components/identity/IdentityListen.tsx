import { Icon } from '@material-ui/core'

import styled from './identity-component.module.css'
import { useEffect } from 'react'

interface IIdentityListen {
  song?: string
  img: string | null
}

export const IdentityListen = ({ song, img }: IIdentityListen) => {
  useEffect(() => {
    if (song) {
      playSound()
    }
  }, [song])

  const playSound = () => {
    if (song) {
      new Audio(song).play()
    }
  }

  return <div className={styled.containerIcon}>
    {img
      ? <Icon className={styled.icon}>{img}</Icon>
      : <Icon className={styled.icon}>spatial_audio_off</Icon>
    }
  </div>
}
