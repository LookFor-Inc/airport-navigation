import React from 'react'
import PropTypes from 'prop-types'
import Content from '@/components/Page/Content'

/**
 * Компонент (шапка) для задания структуры веб-страницы
 * @param {JSX.Element} children Дочерний компонент для отображения содержимого
 * @returns {JSX.Element} Компонент шапки
 * @constructor
 */
function Header({children}) {
  return (
    <Content>
      {children}
    </Content>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
