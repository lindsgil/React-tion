import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import {PressPage} from './PressPage.js'
import '../public/normalize.css'
import '../public/style.css'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match
              exactly pattern='/presspage'
              component={PressPage}
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))
