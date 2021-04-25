import CustomsIcon from '@/assets/icons/CustomsIcon'
import PassportControlIcon from '@/assets/icons/PassportControlIcon'
import ReceptionIcon from '@/assets/icons/ReceptionIcon'
import TruckIcon from '@/assets/icons/TruckIcon'
import {customs, entrance, passportControl, registration} from '@/data/checkpoints'

export const timelineRules = [
  {
    subIcon: ReceptionIcon,
    stepName: 'Регистрация',
    time: '17:50',
    rules: ['Проверка документов', 'Cдача багажа'],
    activeCheckpoint: entrance
  },
  {
    subIcon: CustomsIcon,
    stepName: 'Таможня',
    time: '18:15',
    rules: ['Осмотр содержимого багажа', 'Прохождение металлодетектора', 'Запрет на пронос жидкости'],
    activeCheckpoint: registration
  },
  {
    subIcon: PassportControlIcon,
    stepName: 'Паспортный контроль',
    time: '18:30',
    rules: ['Проверка документов'],
    activeCheckpoint: customs
  },
  {
    subIcon: TruckIcon,
    stepName: 'Посадка',
    time: '18:40',
    rules: ['Проверка билета', 'Размещение пассажиров'],
    activeCheckpoint: passportControl
  }
]
