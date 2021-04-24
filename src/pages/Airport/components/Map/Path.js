import React from 'react'
import PropTypes from 'prop-types'
import PathLine from './PathLine'

/**
 * Элемент пути карты
 * @param {string} mapViewBox ViewBox карты
 * @returns {JSX.Element} Элемент пути
 */
function Path({mapViewBox}) {
  return (
    <svg viewBox={mapViewBox ? mapViewBox : '0 0 0 0'}>
      <PathLine sizes={mapViewBox.split(' ').slice(2, 5)} />
    </svg>
  )
}

Path.propTypes = {
  mapViewBox: PropTypes.node
}

export default Path
