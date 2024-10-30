import React from 'react'

function Main({background,children}) {
  return (
    <div className={background}> {children} </div>
  )
}

export default Main