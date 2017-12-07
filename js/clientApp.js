import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Vids from './Vids'
import {PressPage} from './PressPage.js'
import {HallOfFame} from './HallOfFame.js'
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
            <Match
              exactly pattern='/vids'
              component={Vids}
            />
            <Match
              exactly pattern='/halloffame'
              component={HallOfFame}
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))
