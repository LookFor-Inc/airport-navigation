import BaggageIcon from '@/assets/icons/BaggageIcon'
import CovidIcon from '@/assets/icons/CovidIcon'
import MoneyIcon from '@/assets/icons/MoneyIcon'
import RestaurantIcon from '@/assets/icons/RestaurantIcon'
import ToiletIcon from '@/assets/icons/ToiletIcon'

export const fastActions =[
  {
    icon: ToiletIcon,
    name: 'Туалет',
    type: 'wc'
  },
  {
    icon: RestaurantIcon,
    name: 'Рестораны',
    type: 'res'
  },
  {
    icon: CovidIcon,
    name: 'Тест на Covid',
    type: 'cov'
  },
  {
    icon: BaggageIcon,
    name: 'Упаковка багажа',
    type: 'bag'
  },
  {
    icon: MoneyIcon,
    name: 'Обмен валют',
    type: 'mon'
  }
]
