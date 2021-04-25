import React from 'react'
import InfoTabHeader from '@/pages/Airport/components/InfoPageHeader'
import InfoTabBody from '@/pages/Airport/components/InfoTabBody'

/**
 * Вкладка инфо
 * @returns {JSX.Element} Элемент страницы
 */
function InfoTabPage() {
  return (
    <div className='overflow-y-scroll bg-gray-50' style={{height: 'calc(100vh - 60px)'}}>
      <InfoTabHeader />
      <InfoTabBody />
    </div>
  )
}

export default InfoTabPage
