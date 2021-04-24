import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент иконки в футере
 * @param {string} path Путь ссылки
 * @param {func|element} Icon Иконка
 * @returns {JSX.Element} Иконка в футере
 */
function FooterIcon({path, icon: Icon}) {
  return (
    <a
      href={path}
      target='_blank'
      rel='noreferrer'
      className='text-gray-400 hover:text-gray-800 transition-colors'
    >
      <Icon />
    </a>
  )
}

FooterIcon.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.func
}

export default FooterIcon
