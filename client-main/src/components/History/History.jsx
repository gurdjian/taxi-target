import React from 'react'
import { useSelector } from 'react-redux'

function History() {

  const user = useSelector(state => state.user)
  return (
    <div>
      {(user && `heloy, ${user.name}`)}
    </div >
  )
}

export default History
