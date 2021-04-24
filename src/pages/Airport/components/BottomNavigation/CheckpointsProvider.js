import React, {createContext, useContext, useState} from 'react'
import PropTypes from 'prop-types'
import {registration} from '@/data/checkpoints'

const CheckpointsContext = createContext(null)

/**
 * Provider этапов, пройденных пользователем в аэропорту
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Provider
 */
const CheckpointsProvider = ({children}) => {
  const [checkpoint, setCheckpoint] = useState(registration)

  return (
    <CheckpointsContext.Provider value={{checkpoint, setCheckpoint}}>
      {children}
    </CheckpointsContext.Provider>
  )
}

CheckpointsProvider.propTypes = {
  children: PropTypes.node
}

/**
 * Hook для управления этапам в аэропорту
 * @returns {Context} Контекст
 */
export function useCheckpoints() {
  return useContext(CheckpointsContext)
}

export default CheckpointsProvider
