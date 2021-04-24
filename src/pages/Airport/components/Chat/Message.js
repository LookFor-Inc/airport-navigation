import React from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'

/**
 * Компонент сообщения
 * @param {boolean} fromUser Сообщение от пользователя
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Элемент сообщения
 */
function Message({fromUser, children}) {
  const classes = className('flex my-3', {
    'flex-row-reverse': fromUser
  })
  return (
    <div className={classes}>
      <div
        className='p-3 rounded-xl max-w-xs'
        style={{backgroundColor: '#F0F1F1'}}
      >{children}</div>
    </div>
  )
}

Message.propTypes = {
  fromUser: PropTypes.bool,
  children: PropTypes.node
}

export default Message
