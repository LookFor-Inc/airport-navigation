import React from 'react'
import SearchIcon from '@/assets/SearchIcon'
import IconButton from '@/components/IconButton'
import Input from '@/components/Input'

/**
 * Меню схемы
 * @returns {JSX.Element} Элемент меню
 */
function SearchNavbar() {
  return (
    <div className='fixed inset-x-0 w-screen md:w-96 z-30'>
      <div className='static bg-white md:rounded-br-lg py-2 md:py-5 px-5 shadow-md'>
        <div className='flex md:pt-5 space-x-2'>
          <Input
            placeholder='Поиск в аэропорту'
            type='search'
            size='sm'
          />
          <IconButton
            className='hover:bg-white pr-0'
            icon={<SearchIcon className='text-gray-400 hover:text-gray-500 h-4' />}
          />
        </div>
      </div>
    </div>
  )
}

SearchNavbar.propTypes = {}

export default SearchNavbar
