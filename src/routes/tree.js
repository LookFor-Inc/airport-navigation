import {lazy} from 'react'

const DefaultLayout = lazy(() => import('@/layouts/DefaultLayout'))

const mainPage = {
  title: 'Main Page',
  exact: true,
  path: '/',
  component: lazy(() => import('@/pages/Main/MainPage')),
  layout: DefaultLayout,
  entireFooter: true
}

const schemePage = {
  title: 'Airport Navigation',
  exact: true,
  path: ['/terminal/:terminalId/:schemeId'],
  component: lazy(() => import('@/pages/Airport/AirportPage')),
  layout: DefaultLayout
}

export const routesTree = [
  mainPage,
  schemePage
]
