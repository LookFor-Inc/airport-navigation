import React from 'react'

/**
 * Индикатор загрузки страницы
 * @returns {JSX.Element} Индикатор
 */
export default function PageProgress() {
  return (
    <div className='absolute inset-0 bg-gray-100 z-40'>
      <svg
        className='absolute top-1/2 left-1/2 animate-spin -ml-6 -mt-4 mr-3 h-12 w-12 text-primary'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3
        7.938l3-2.647z'
        />
      </svg>
    </div>
  )
}
