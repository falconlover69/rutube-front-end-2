import Link from 'next/link'
import React, { FC } from 'react'

import styles from './Sidebar.module.scss'
import Menu from './menu/Menu'
import { menu } from './menu/menu.data'

const Sidebar: FC = () => {

    // TODO: get prifile


	return <aside className={styles.sidebar}>
        <Link href='/'>
            <span className={styles.logo}>
                Rutube 2.0
            </span>
        </Link>

        <Menu title='Меню' items={menu} />

        <div className={styles.copy}>
            @  2022 Rutube 2.0 by Greg Ivanov
        </div>
    </aside>
}

export default Sidebar
