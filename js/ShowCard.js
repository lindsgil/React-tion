import React from 'react'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    title: string,
    year: string,
    description: string
  },
  render () {
    const { title, year, description } = this.props.show
    return (
      <div className='show-card'>
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default ShowCard
