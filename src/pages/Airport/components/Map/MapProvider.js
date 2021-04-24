import React, {createContext, useState,
  useContext, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const MapContext = createContext(null)

/**
 * Provider карты
 * @param {elements} children Дочерние элементы
 * @returns {JSX.Element} Provider карты
 */
const MapProvider = ({children}) => {
  const svgRef = useRef(null)
  const [svg, setSvg] = useState(null)

  useEffect(() => {
    setSvg(svgRef.current)
  }, [])

  return (
    <svg ref={svgRef} className='map w-full h-full'>
      <MapContext.Provider value={svg}>
        {children}
      </MapContext.Provider>
    </svg>
  )
}

MapProvider.propTypes = {
  children: PropTypes.node
}

/**
 * Hook для получения данных контекста карты
 * @returns {null} Контекста карты
 */
export const useMap = () => {
  return useContext(MapContext)
}

export default MapProvider
