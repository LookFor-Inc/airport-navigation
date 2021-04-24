import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

/**
 * Коммпонент ссылки в футере
 * @param {string} path Путь ссылки
 * @param {string} text Текст ссылки
 * @returns {JSX.Element} Ссылка в футере
 */
function FooterLink({path, text}) {
  return (
    <li className='my-2 w-full sm:w-auto'>
      <Link
        className='text-sm text-gray-400 hover:text-gray-800 transition-colors'
        to={path}
      >
        {text}
      </Link>
    </li>
  )
}

FooterLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FooterLink
