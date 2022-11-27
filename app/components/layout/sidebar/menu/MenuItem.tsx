
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { IMenuItem } from './menu.interface'

import styles from './Menu.module.scss'
import Image from 'next/image'


const MenuItem: FC<{ item: IMenuItem }> = ({item}) => {

  const { user } = useAuth()
  const { asPath } = useRouter()

  if (item.link === 'my-channel') {
    if (!user) return null
    else item.link = `/c/${user?.id}`
  }

  return (
    <li>
      <Link className={asPath === item.link ? styles.active : ''} href={item.link}>
        <span className={ item.image ? styles.image : '' }>
          {item.icon && <item.icon />}
          {item.image && <Image src={item.image} width={40} height={40} alt={item.title} />}
        </span>
        <b>{item.title}</b>
      </Link>
    </li>
  )
}

export default MenuItem