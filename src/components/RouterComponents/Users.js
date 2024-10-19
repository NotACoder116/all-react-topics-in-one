import React from 'react'
import { useParams } from 'react-router'

function Users() {
    const params = useParams();
    const { name } = params;

  return (
    <div>This is {name}'s' Page</div>
  )
}

export default Users