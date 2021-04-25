import CustomsIcon from '@/assets/icons/CustomsIcon'
import PassportControlIcon from '@/assets/icons/PassportControlIcon'
import ReceptionIcon from '@/assets/icons/ReceptionIcon'
import TruckIcon from '@/assets/icons/TruckIcon'

export const PEOPLE_AMOUNT_STATUS = {
  LESS: 'Мало людей',
  NORM: 'Достаточно людей',
  MANY: 'Много людей'
}

export const timelineRules = [
  {
    subIcon: ReceptionIcon,
    stepName: 'Регистрация',
    time: '17:50',
    peopleStatus: PEOPLE_AMOUNT_STATUS.LESS,
    type: 'checked'
  },
  {
    subIcon: CustomsIcon,
    stepName: 'Таможня',
    time: '18:15',
    peopleStatus: PEOPLE_AMOUNT_STATUS.LESS,
    type: 'checked'
  },
  {
    subIcon: PassportControlIcon,
    stepName: 'Паспортный контроль',
    time: '18:30',
    peopleStatus: PEOPLE_AMOUNT_STATUS.NORM,
    type: 'active'
  },
  {
    subIcon: TruckIcon,
    stepName: 'Посадка',
    time: '18:40',
    peopleStatus: PEOPLE_AMOUNT_STATUS.MANY,
    type: 'error'
  }
]
