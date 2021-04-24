import React from 'react'
import InfoTabHeader from '@/pages/Airport/components/InfoPageHeader'
import InfoTabBody from '@/pages/Airport/components/InfoTabBody'

/**
 * Вкладка инфо
 * @returns {JSX.Element} Элемент страницы
 */
function InfoTabPage() {
  return (
    <>
      <InfoTabHeader time='1 час 2 минуты'/>
      <InfoTabBody />
    </>
  )
}

export default InfoTabPage
