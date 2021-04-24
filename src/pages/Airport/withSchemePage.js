import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import PageProgress from '@/components/PageProgress'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import {clearSearch, fetchSchemeAsync, resetPath} from '@/store/Scheme/actions'

/**
 * HOK для страницы схемы
 * @param {React.Component} PageComponent Компонент страницы
 * @returns {React.Component} Компонент с расширенной функциональностью
 */
function withSchemePage(PageComponent) {
  /**
   * Компонент-обёртка
   * @param {Object} props Параметры
   * @returns {JSX.Element} Компонент
   */
  const SchemeWrapper = ({resetPath, clearSearch, fetched, fetchSchemeAsync}) => {
    const {schemeId} = useParams()

    useEffect(() => {
      clearSearch()
      resetPath()

      if (schemeId !== undefined) {
        fetchSchemeAsync(schemeId)
      }
    }, [])

    return (
      <>
        {fetched === false && <NotFoundPage />}
        {fetched === undefined && <PageProgress />}
        {fetched === true && <PageComponent />}
      </>
    )
  }

  SchemeWrapper.propTypes = {
    resetPath: PropTypes.func,
    clearSearch: PropTypes.func,
    fetched: PropTypes.bool,
    fetchSchemeAsync: PropTypes.func
  }

  /**
   * Получение состояния схемы
   * @param {object} state Состояние
   * @returns {object} Значения состояний
   */
  const mapState = state => {
    return {
      fetched: state.schemeData.fetched
    }
  }

  /**
   * Методы Redux
   * @param {function} dispatch Запрос на установку
   * @returns {object} Функция установки
   */
  const mapDispatch = dispatch => {
    return {
      resetPath: () => dispatch(resetPath()),
      clearSearch: () => dispatch(clearSearch()),
      fetchSchemeAsync: schemeId => dispatch(fetchSchemeAsync(schemeId))
    }
  }

  return connect(mapState, mapDispatch)(SchemeWrapper)
}

export default withSchemePage
