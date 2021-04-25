import React from 'react'

/**
 * Икнока таможни
 * @param {object} props Дополнительные свойтсва
 * @returns {JSX.Element} Икнока таможни
 */
function CustomsIcon(props) {
  return (
    <svg {...props} width='32' height='32' viewBox='0 0 32 32' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4.01669 11.0458H2.94581C1.35312 11.0458 0 12.3306 0 13.9917V23.0958C0 24.7568 1.35281 26.0417 2.94581
      26.0417H4.95412V11.9833C4.95419 11.4655 4.53444 11.0458 4.01669 11.0458Z'/>
      <path d='M30.996 7.96669V7.83337H21.0876V7.96669C21.0876 10.6984 23.3101 12.9209 26.0418 12.9209C28.7736 12.9209
      30.996 10.6984 30.996 7.96669Z'/>
      <path d='M19.0125 5.95831H30.9958V0.9375C30.9958 0.41975 30.576 0 30.0583 0H22.0249C21.5072 0 21.0874 0.41975
      21.0874 0.9375V4.08331H19.0125C18.4947 4.08331 18.075 4.50306 18.075 5.02081C18.075 5.53856 18.4947 5.95831
      19.0125 5.95831Z'/>
      <path d='M19.0124 26.0417H4.9541V29.0542C4.9541 30.7152 6.30691 32.0001 7.89991 32.0001H17.0041C18.5968 32.0001
      19.9499 30.7153 19.9499 29.0542V26.9792C19.9499 26.4614 19.5302 26.0417 19.0124 26.0417Z'/>
      <path d='M13.6076 21.9625L13.1174 22.4533C12.6838 22.9416 12.4247 23.5418 12.3569 24.1666H15.8118L13.6076
      21.9625Z'/>
      <path d='M26.0417 12.9208C23.8776 12.9208 21.7618 13.7974 20.2373 15.3253L14.9326 20.6359L18.4633 24.1666H20.0705
      L23.0958 21.1425V31.0625C23.0958 31.5802 23.5156 32 24.0333 32H31.0625C31.5802 32 32 31.5802 32 31.0625V18.8781
      C32 15.5932 29.3271 12.9208 26.0417 12.9208Z'/>
    </svg>

  )
}

export default CustomsIcon