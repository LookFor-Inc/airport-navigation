import React, {useState} from 'react'
import classNames from 'classnames'
import Autosuggest from 'react-autosuggest'

const theme = {
  container: 'react-autosuggest__container',
  containerOpen: 'react-autosuggest__container--open',
  input: 'input py-1.5 px-3 text-sm',
  inputOpen: 'react-autosuggest__input--open',
  inputFocused: 'react-autosuggest__input--focused',
  suggestionsContainer: 'react-autosuggest__suggestions-container',
  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
  suggestionsList: 'react-autosuggest__suggestions-list',
  suggestion: 'select-none py-2 px-6',
  suggestionHighlighted: 'bg-primary text-white',
  sectionContainer: 'react-autosuggest__section-container',
  sectionContainerFirst: 'react-autosuggest__section-container--first',
  sectionTitle: 'text-sm font-semibold px-4 pt-2'
}

/**
 * Hook с реализацияей автокопмлита
 * @param {string} placeholder Дефолтное значение, которое отображается, если поле для ввода пустое
 * @param {[{title: string, audiences: [{title: string, target: string}]}]} suggestions Массив, состаящий из объектов,
 * которые содержат информаццию об этажах и комнатах на этаже
 * @param {function} onSuggestionSelectedCallback Callback функция, которая вызывается при клике на элемент выпадающего
 * @returns {object} Объект, который содержит три поля: bind - оторбажение компонента,
 * setValue - принудительная установка значения,
 * value - значение в поле ввода
 */
export default function useAutocomplete(placeholder = '', suggestions = [], onSuggestionSelectedCallback) {
  const [value, setValue] = useState('')
  const [displayedSuggestions, setDisplayedSuggestions] = useState([])
  const SUGGESTIONS_LIMIT = 5
  let suggestionsSize = 0


  const suggestionsContainerClasses = classNames('absolute w-full mt-1 rounded-md bg-white shadow-lg ' +
    'max-h-65 overflow-auto text-base text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
  {'hidden': !displayedSuggestions.length})

  /**
   * Отображение контейнера выпадающего списка, внутри которого находится список со всеми элементами
   * @param {object} containerProps Пропсы, которые передаются в соотвествии с документацией,
   * для корректного рендера контейнера
   * @param {object} children Список всех элементов, которые будут отображены.
   * @returns {JSX.Element} Элемент, отвечающий за отображения контейнейра
   */
  const renderSuggestionsContainer = ({containerProps, children}) => (
    <div className='relative'>
      <div {...containerProps} className={suggestionsContainerClasses}>
        {children}
      </div>
    </div>)

  /**
   * Отображение заголовка
   * @param {object} section Объект, в котором содержится поле, откуда можно получить текст для отображения
   * @returns {JSX.Element} Элемент, отвечающий за отображение заголовка внутри выпадающего списка
   */
  const renderSectionTitle = section => <span>{section.title}</span>

  /**
   * Отображение элемента списка
   * @param {object} suggestion Объект, в котором содержится поле, откуда можно получить текст для отображения
   * @returns {JSX.Element} Элемент, отвечающий за отображение элемента выпадающего списка
   */
  const renderSuggestion = suggestion => (
    <span className='block truncate text-sm'>{suggestion.title}</span>)

  /**
   * Выбор значения из элемента массива, которое отображается в поле
   * выпадающего списка с автодоплнениями.
   * @param {string | Object |  number} suggestion Элемент массива
   * @returns {string} Значение, которое следует отобразить
   */
  const getSuggestionValue = suggestion => suggestion.title

  /**
   * Функция, реализующая фильтрацию, с помощью которой происходит выборка отображаемых элементов
   * @param {string} value Значение из поля ввода
   * @returns {{nestedSuggestions: *, title: string}[]} Отфильтрованный список элементов
   */
  const getSuggestions = value => {
    const inputValue = value.trim().replace(/\s+/g, ' ').toLowerCase()

    return suggestions.map(section => {
      suggestionsSize = 0
      const sectionSuggestions = []
      for (let i = 0; i < section.nestedSuggestions.length; i++) {
        if (suggestionsSize >= SUGGESTIONS_LIMIT) break
        const isCorrectSuggest = section.nestedSuggestions[i].title.toLowerCase().includes(inputValue)
        if (isCorrectSuggest) {
          sectionSuggestions.push(section.nestedSuggestions[i])
          suggestionsSize++
        }
      }
      return {
        title: section.title,
        nestedSuggestions: sectionSuggestions
      }
    }).filter(section => section.nestedSuggestions.length > 0)
  }

  /**
   * Функция, которая возвращает список из предложений для конкретной секции
   * @param {[object]} section Список из элементов для конкретной секции
   * @returns {[{title: *, target: unknown}]|{title: string, target: string}[]|*} Список элементов
   */
  const getSectionSuggestions = section => {
    return section.nestedSuggestions
  }

  /**
   * Стандартная функция input, сохраняет текущее введённое значение внутри поля ввода
   * @param {Event} event Действие
   * @param {string} newValue Новое значение
   * @returns {void}
   */
  const onChange = (event, {newValue}) => {
    setValue(newValue)
  }

  /**
   * Функция, вызывающаяся при открытии выпадающего списка
   * @returns {void}
   */
  const onSuggestionsFetchRequested = ({value}) => {
    setDisplayedSuggestions(getSuggestions(value))
  }

  /**
   * Функция, вызывающаяся при закрытии выпадающего списка
   * @returns {void}
   */
  const onSuggestionsClearRequested = () => {
    setDisplayedSuggestions([])
  }

  /**
   * Функция, которая вызывается при выборе элемента выпадающего списка
   * @param {Event} event Действие
   * @param {Object} suggestion Данные об элементе, которые был выбран
   * @returns {void}
   */
  function onSuggestionSelected(event, {suggestion}) {
    setValue(suggestion.title)
    onSuggestionSelectedCallback(suggestion.title, suggestion.target)
  }

  const inputProps = {
    placeholder,
    value,
    onChange,
    type: 'search'
  }

  /**
   * Компонент с реализацией автодоплнения. Включает в себя: отображение поля ввода,
   * отображение выпадающего списка.
   * @returns {JSX.Element} Компонент, отвечающий за автодоплнение
   */
  function getAutosuggestionComponent() {
    return <Autosuggest
      theme={theme}
      multiSection={true}
      suggestions={displayedSuggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      getSectionSuggestions={getSectionSuggestions}
      renderSuggestionsContainer={renderSuggestionsContainer}
      renderSectionTitle={renderSectionTitle}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      focusInputOnSuggestionClick={false}
    />
  }

  return {
    bind: getAutosuggestionComponent(),
    setValue,
    value
  }
}
