import React, {createElement} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {active, completed, waiting} from '@/data/checkpointsStatus'
import {schemeTab} from '@/data/schemeSidebarTabs'
import {useCheckpoints} from '@/pages/Airport/components/BottomNavigation/CheckpointsProvider'
import {useNavigation} from '@/pages/Airport/components/BottomNavigation/NavigationProvider'
import {setSearchFrom, setSearchTo} from '@/store/Scheme/actions'

/**
 * @param {JSXElement} Icon Иконка(компонент)
 * @param {string} text Текст для кнопки
 * @param {string} color Цвет иконки
 * @returns {JSX.Element} Компонент кнопки с текстом и иконкой
 */
function TimelineButton({icon, text, color, activeCheckpoint, setSearchTo, setSearchFrom, ...props}) {
  const {setCheckpoint} = useCheckpoints()
  const {setTab} = useNavigation()
  const classes = classNames(
    'flex items-center justify-end font-bold text-gray-800 rounded-md p-1 hover:bg-gray-100 sm:text-xl',
    {'hover:bg-gray-0': activeCheckpoint.status === completed || activeCheckpoint.status === waiting},
    props.className)

  const iconClasses = classNames('w-3 h-3 ml-1', {
    'text-error': color === 'error',
    'text-primary': color === 'primary'
  })

  return (
    <button
      {...props}
      className={classes}
      type='button'
      disabled={activeCheckpoint.status === completed || activeCheckpoint.status === waiting}
      onClick={() => {
        setSearchFrom(activeCheckpoint.target, activeCheckpoint.title)
        activeCheckpoint.status = completed
        if ((typeof activeCheckpoint.next) !== 'object') {
          setSearchTo(activeCheckpoint.next, '')
        } else {
          setSearchTo(activeCheckpoint.next.target, activeCheckpoint.next.title)
          activeCheckpoint.next.status = active
          setCheckpoint(activeCheckpoint.next)
        }
        setTab(schemeTab)
      }}
    >
      <p className='break-all line-clamp-1'>{text}</p>
      {createElement(icon, {className: iconClasses})}
    </button>
  )
}

TimelineButton.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.oneOf(['error', 'primary']),
  className: PropTypes.string,
  activeCheckpoint: PropTypes.object,
  setSearchTo: PropTypes.func,
  setSearchFrom: PropTypes.func
}

/**
 * Установка поиска
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const targetCardDispatch = dispatch => {
  return {
    setSearchTo: (target, value) => dispatch(setSearchTo(target, value)),
    setSearchFrom: (target, value) => dispatch(setSearchFrom(target, value))
  }
}

export default connect(null, targetCardDispatch)(TimelineButton)
