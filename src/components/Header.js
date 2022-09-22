import React from 'react'

function Header(props) {
  const name = "Overreacted";

  return (
    <header>
      <h1>{props.name}</h1>;
    </header>
  )
}

export default Header



