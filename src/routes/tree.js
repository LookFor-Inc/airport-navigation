import {lazy} from 'react'

const DefaultLayout = lazy(() => import('@/layouts/DefaultLayout'))

const mainPage = {
  title: 'Главная страница',
  exact: true,
  path: '/',
  component: lazy(() => import('@/pages/Main/MainPage')),
  layout: DefaultLayout,
  entireFooter: true
}

const schemePage = {
  title: 'Indoor Schemes',
  exact: true,
  path: ['/terminal/:schemeId'],
  component: lazy(() => import('@/pages/Airport/AirportPage')),
  layout: DefaultLayout
}

export const routesTree = [
  mainPage,
  schemePage
]
