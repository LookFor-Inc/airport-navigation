import CustomsIcon from '@/assets/icons/CustomsIcon'
import PassportControlIcon from '@/assets/icons/PassportControlIcon'
import ReceptionIcon from '@/assets/icons/ReceptionIcon'
import TruckIcon from '@/assets/icons/TruckIcon'

export const timelineRules = [
  {
    subIcon: ReceptionIcon,
    stepName: 'Регистрация',
    time: '17:50',
    rules: ['Проверка документов', 'Cдача багажа']
  },
  {
    subIcon: CustomsIcon,
    stepName: 'Таможня',
    time: '18:15',
    rules: ['Осмотр содержимого багажа', 'Прохождение металлодетектора', 'Запрет на пронос жидкости']
  },
  {
    subIcon: PassportControlIcon,
    stepName: 'Паспортный контроль',
    time: '18:30',
    rules: ['Проверка документов']
  },
  {
    subIcon: TruckIcon,
    stepName: 'Посадка',
    time: '18:40',
    rules: ['Проверка билета', 'Размещение пассажиров']
  }
]
