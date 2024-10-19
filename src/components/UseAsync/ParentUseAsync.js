import React from 'react'
import UseAsync from './UseAsync';

const ParentUseAsync = () => {
    const fakeApiCall = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              let random = Math.random() * 10;
              random <= 5 ? resolve("Success") : reject("error");
            }, 1000);
        });
    }

    const { status, value, error } = UseAsync(fakeApiCall, true);
  return (
    <div>
      <div>Status: {status}</div>
      <div>Value: {value}</div>
      <div>error: {error}</div>
</div>
);
}

export default ParentUseAsync