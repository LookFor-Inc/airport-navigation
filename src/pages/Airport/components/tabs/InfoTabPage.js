import React from 'react'
import InfoTabHeader from '@/pages/Airport/components/InfoPageHeader'
import Timeline from '@/pages/Airport/components/Timeline/Timeline'

/**
 * Вкладка инфо
 * @returns {JSX.Element} Элемент страницы
 */
function InfoTabPage() {
  return (
    <>
      <InfoTabHeader />
      <Timeline />
    </>
  )
}

export default InfoTabPage
