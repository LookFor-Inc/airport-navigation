import {active, waiting} from '@/data/checkpointsStatus'

export const passportControl = {
  target: 'aud13',
  title: 'Паспортный контроль',
  available: [
    'aud5',
    'aud14',
    'aud15'
  ],
  next: 'aud15',
  status: waiting
}
export const customs = {
  target: 'aud23',
  title: 'Таможенный контроль',
  available: [
    'aud13'
  ],
  next: passportControl,
  status: waiting
}
export const registration = {
  target: 'aud16',
  title: 'Регистрация',
  available: [
    'din0',
    'din1',
    'aud2',
    'aud7',
    'din8',
    'wc9',
    'aud10',
    'aud11',
    'aud12',
    'aud23'
  ],
  next: customs,
  status: waiting
}
export const entrance = {
  target: 'aud24',
  title: 'Вход в терминал D',
  available: [
    'din0',
    'din1',
    'aud2',
    'aud16',
    'aud17',
    'aud18',
    'aud19',
    'aud20',
    'bag1',
    'bag2',
    'aud24',
    'wc1'
  ],
  next: registration,
  status: active
}
