import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

export class HallOfFame extends React.Component {
  render () {
    return (
      <div id='hall-of-fame'>
        <Header className='main-header' />
        <div className='press-one hof-div'>
          <h1 className='hof'>Episode 6</h1>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/contestants/taylar.jpg' className='hof-photo' />
          <img src='../public/img/contestants/kelton.jpg' className='hof-photo' />
          <img src='../public/img/contestants/rachel.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Rachel Ratner</h1>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-two hof-div'>
          <h1 className='hof'>Episode 5</h1>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/contestants/markeith.jpg' className='hof-photo' />
          <img src='../public/img/contestants/mario.jpg' className='hof-photo' />
          <img src='../public/img/contestants/guppie.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Markeith Wiley</h1>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-three hof-div'>
          <h1 className='hof'>Episode 4</h1>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/contestants/michael.jpg' className='hof-photo' />
          <img src='../public/img/contestants/shana.jpg' className='hof-photo' />
          <img src='../public/img/contestants/donormaal.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Shana Cleveland</h1>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-four hof-div'>
          <h1 className='hof'>Episode 3</h1>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/contestants/ken.jpg' className='hof-photo' />
          <img src='../public/img/contestants/sj.jpg' className='hof-photo' />
          <img src='../public/img/contestants/shinyu.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Ken Jennings</h1>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-five hof-div'>
          <h1 className='hof'>Episode 2</h1>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <img src='../public/img/contestants/derek.jpg' className='hof-photo' />
          <img src='../public/img/contestants/ceci.jpg' className='hof-photo' />
          <img src='../public/img/contestants/amber.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Ceci Gomez</h1>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-six hof-div'>
          <h1 className='hof'>Episode 1</h1>
          <img src='./public/img/greenborders.png' className='press-top-border' />
          <h1 className='hof six-winner'>Winner: Patricia Boiko</h1>
          <img src='./public/img/pinkborders.png' className='press-lower-border' />
        </div>
        <Footer className='main-footer' />
      </div>
    )
  }
}
