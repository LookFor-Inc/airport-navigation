import CustomsIcon from '@/assets/icons/CustomsIcon'
import PassportControlIcon from '@/assets/icons/PassportControlIcon'
import ReceptionIcon from '@/assets/icons/ReceptionIcon'
import TruckIcon from '@/assets/icons/TruckIcon'
import {customs, entrance, passportControl, registration} from '@/data/checkpoints'

export const PEOPLE_AMOUNT_STATUS = {
  LESS: 'Мало людей',
  NORM: 'Достаточно людей',
  MANY: 'Много людей'
}

export const allTimeLineRules = {
  'depsu2572-msclon': [
    {
      subIcon: ReceptionIcon,
      stepName: 'Регистрация',
      time: '17:50',
      peopleStatus: PEOPLE_AMOUNT_STATUS.LESS,
      willSpendTime: 6,
      activeCheckpoint: entrance,
      infoText: 'Стойки',
      infoNumbers: '№24-27'
    },
    {
      subIcon: CustomsIcon,
      stepName: 'Таможенный контроль',
      time: '18:15',
      peopleStatus: PEOPLE_AMOUNT_STATUS.LESS,
      willSpendTime: 8,
      activeCheckpoint: registration
    },
    {
      subIcon: PassportControlIcon,
      stepName: 'Паспортный контроль',
      time: '18:30',
      peopleStatus: PEOPLE_AMOUNT_STATUS.NORM,
      willSpendTime: 9,
      activeCheckpoint: customs
    },
    {
      subIcon: TruckIcon,
      stepName: 'Посадка',
      time: '18:40',
      peopleStatus: PEOPLE_AMOUNT_STATUS.MANY,
      willSpendTime: 30,
      activeCheckpoint: passportControl,
      infoText: 'Выход',
      infoNumbers: '№20'
    }
  ],
  'depsu2609-mscos': [
    {
      subIcon: ReceptionIcon,
      stepName: 'Регистрация',
      time: '17:50',
      peopleStatus: PEOPLE_AMOUNT_STATUS.MANY,
      willSpendTime: 30,
      activeCheckpoint: entrance,
      infoText: 'Стойки',
      infoNumbers: '№24-27'
    },
    {
      subIcon: CustomsIcon,
      stepName: 'Таможенный контроль',
      time: '18:15',
      peopleStatus: PEOPLE_AMOUNT_STATUS.NORM,
      willSpendTime: 20,
      activeCheckpoint: registration
    },
    {
      subIcon: PassportControlIcon,
      stepName: 'Паспортный контроль',
      time: '18:30',
      peopleStatus: PEOPLE_AMOUNT_STATUS.NORM,
      willSpendTime: 9,
      activeCheckpoint: customs
    },
    {
      subIcon: TruckIcon,
      stepName: 'Посадка',
      time: '18:40',
      peopleStatus: PEOPLE_AMOUNT_STATUS.LESS,
      willSpendTime: 4,
      activeCheckpoint: passportControl,
      infoText: 'Выход',
      infoNumbers: '№20'
    }
  ]
}
