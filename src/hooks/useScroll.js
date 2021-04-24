import {useState, useEffect, useCallback} from 'react'

/**
 * Hook для определения прокрутки страницы
 * @returns {object} Состояния прокрутки
 */
const useScroll = () => {
  const [params, setParams] = useState({
    first: true,
    lastScrollTop: 0,
    scrollDirection: '',
    bodyOffset: document.body.getBoundingClientRect(),
    scrollY: document.body.getBoundingClientRect().top,
    scrollX: document.body.getBoundingClientRect().left
  })

  const handleScrollEvent = useCallback(() => {
    setParams(prevState => {
      const prevLastScrollTop = prevState.lastScrollTop
      const bodyOffset = document.body.getBoundingClientRect()

      return {
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        setBodyOffset: bodyOffset,
        lastScrollTop: -bodyOffset.top,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? 'down' : 'up'
      }
    })
  }, [])

  useEffect(() => {
    /**
     * Обработка прокрутки
     * @param {Event} event Событие
     * @returns {void}
     */
    const scrollListener = event => {
      handleScrollEvent(event)
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [handleScrollEvent])

  return [
    !params.lastScrollTop ? window.pageYOffset : params.scrollY,
    params.scrollX,
    params.scrollDirection
  ]
}

export default useScroll
