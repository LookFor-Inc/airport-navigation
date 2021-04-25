import React from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'

/**
 * Компонент сообщения
 * @param {boolean} fromUser Сообщение от пользователя
 * @param {string} time Время сообщения
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Элемент сообщения
 */
function Message({fromUser, time, children}) {
  const classes = className('flex my-3', {
    'flex-row-reverse': fromUser
  })

  return (
    <div className={classes}>
      <div
        className='p-3 rounded-xl max-w-xs'
        style={{backgroundColor: '#F0F1F1'}}
      >
        {children}
        <p className='flex flex-row-reverse text-gray-700 italic'>{time}</p>
      </div>
    </div>
  )
}

Message.propTypes = {
  fromUser: PropTypes.bool,
  time: PropTypes.string,
  children: PropTypes.node
}

export default Message
