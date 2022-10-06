import React from 'react'

const Header = ({data}) => {
	return (
		<header className="App-header">
			<div className="head">{data.query.results.channel.location.city}</div>
			<div></div>
		</header>
  )
}

export default Header
