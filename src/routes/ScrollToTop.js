import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

/**
 * Компонент для прокрутки страницы наверх
 * @returns {null} Прокручивает наверх страницы
 */
export default function ScrollToTop() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
