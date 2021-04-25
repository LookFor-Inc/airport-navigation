import React from 'react'

/**
 * Иконка прилёта
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка прилёта
 */
function PlaneArrivalIcon(props) {
  return (
    <svg {...props} width='24' height='19' viewBox='0 0 24 19' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M23.4 17.2188H0.6C0.2685 17.2188 0 17.4845 0 17.8125V18.4062C0 18.7343 0.2685 19 0.6 19H23.4C23.7315 19 24
        18.7343 24 18.4062V17.8125C24 17.4845 23.7315 17.2188 23.4 17.2188ZM4.25363 11.59C4.59338 11.8802 5.019 12.1014
        5.47125 12.2183L16.9598 15.187C17.8084 15.406 19.095 15.5971 20.4566 15.2379C21.7391 14.899 22.5049 14.312
        22.7332 13.4937C22.9654 12.6562 22.6001 11.7622 21.6488 10.8345C20.8646 10.0704 19.8034 9.49926 18.579
        9.18271L14.9081 8.2342L11.0584 1.2543C10.9407 1.04096 10.7801 0.853706 10.5866 0.704052C10.3931 0.554398 10.1706
        0.445509 9.933 0.384082C8.57513 0.0330274 8.51625 0 8.21625 0C7.73288 0 7.26188 0.192969 6.918 0.547363C6.69621
        0.775798 6.54002 1.05865 6.46553 1.36674C6.39104 1.67483 6.40096 1.997 6.49425 2.30004L7.75088 6.3843L4.87313
        5.64062L3.99 3.51945C3.77475 3.00252 3.327 2.7268 2.78025 2.58578C2.25 2.44848 2.09175 2.39207 1.8
        2.39207C0.4725 2.39207 0 3.45414 0 4.06199V7.19922C0 7.72283 0.232875 8.2201 0.63675 8.55854L4.25363 11.59ZM1.8
        4.06199L2.32575 4.19781L3.55013 7.13984L10.41 8.91256L8.21625 1.78125L9.4785 2.10744L13.7006 9.76273L18.1241
        10.9057C19.0436 11.1432 19.8255 11.5573 20.385 12.1029C20.952 12.6554 21.0128 12.9653 20.9978 13.0195C20.9831
        13.0721 20.7694 13.3111 19.9924 13.5163C19.7389 13.5831 18.8055 13.8225 17.4143 13.4633L5.92538 10.4945C5.73788
        10.4463 5.562 10.3546 5.4165 10.2307L1.8 7.19922V4.06199Z'
      />
    </svg>
  )
}

export default PlaneArrivalIcon
