import React from 'react'
import FooterLink from '@/components/Footer/components/FooterLink'
import NAV_TABS from '@/data/navTabs'

/**
 * Компонент списка ссылок в футере
 * @returns {JSX.Element} Ссылки в футере
 */
function FooterLinkList() {
  return (
    <ul className='max-w-screen-md mx-auto flex flex-wrap justify-around text-center'>
      {Object.values(NAV_TABS).map(tabs => tabs.map(({path, text}) => (
        <FooterLink
          key={path}
          path={path}
          text={text}
        />
      )))}
    </ul>
  )
}

export default FooterLinkList
