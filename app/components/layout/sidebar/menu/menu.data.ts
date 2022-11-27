import { IMenuItem } from "./menu.interface";
import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi'

export const menu: IMenuItem[] = [
    {
        title: 'Главная',
        link: '/',
        icon: HiHome,
    },
    {
        title: 'Тренды',
        link: '/trending',
        icon: HiChartBar,
    },
    {
        title: 'Мой канал',
        link: '/my-channel',
        icon: HiStar,
    },
    {
        title: 'Мои подписки',
        link: '/subscriptions',
        icon: HiCollection,
    },
]