import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import Routes from '@/routes/Routes'
import {store, persist} from '@/store/configureStore'

/**
 * Главный компонент
 * @returns {JSX.Element} Приложение
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App
