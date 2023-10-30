import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Store } from './store/store';
import { Provider } from 'react-redux';


const element: HTMLElement | null = document.getElementById('root')

if (element) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>, element
  )
}
