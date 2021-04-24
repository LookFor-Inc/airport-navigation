import React from 'react'
import FigmaIcon from '@/assets/icons/Social/FigmaIcon'
import TelegramIcon from '@/assets/icons/Social/TelegramIcon'
import FooterIcon from '@/components/Footer/components/FooterIcon'

const socialLinks = [
  {
    icon: FigmaIcon,
    path: 'https://www.figma.com/@lookfor'
  },
  {
    icon: TelegramIcon,
    path: 'https://t.me/'
  }
]

/**
 * Компонент списка иконок в футере
 * @returns {JSX.Element} Иконки в футере
 */
function FooterIconList() {
  return (
    <div className='py-8 max-w-xs mx-auto flex items-center justify-around'>
      {socialLinks.map((social, idx) =>
        <FooterIcon
          key={idx}
          {...social}
        />
      )}
    </div>
  )
}

export default FooterIconList
