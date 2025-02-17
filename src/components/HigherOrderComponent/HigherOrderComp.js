import React from 'react';
import WithAuthentication from './WithAuthentication';

const UserAuthenticated = () => {
   return <div>User is authenticated </div>
}

const ParentButton = WithAuthentication(UserAuthenticated);

const HigherOrderComp = () => {
  return (
    <ParentButton isAuthenticated={false}/>
  )
}

export default HigherOrderComp