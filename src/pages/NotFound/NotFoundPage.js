import React from 'react'

/**
 * Компонент страницы 404
 * @returns {JSX.Element} Страница 404
 */
function NotFoundPage() {
  return (
    <div className='h-screen flex items-center justify-center uppercase text-2xl text-gray-500 font-light'>
      <div className='border-r-2 border-gray-500 mr-5 pr-6'>404</div>
      <div>Not Found</div>
    </div>
  )
}

export default NotFoundPage
