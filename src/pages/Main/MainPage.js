import React from 'react'
import {Link} from 'react-router-dom'
import terminals from '@/data/terminals'

/**
 * Главная страница
 * @returns {JSX.Element} Элемент главной страницы
 */
function MainPage() {
  return (
    <>
      {terminals.map(terminal => (
        <Link
          key={terminal.id}
          to={`/terminal/${terminal.id}`}
        >{terminal.name}</Link>
      ))}
    </>
  )
}

MainPage.propTypes = {}

export default MainPage
