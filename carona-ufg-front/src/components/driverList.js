import React from 'react';
import driversApi from '../api/driversApi'

export const DriverList = () => {

  const updateDriverList = () => {
    driversApi.getDrivers()
      .then(result => {
        console.log('result', result);
      })
  }

  return (
      <div>
        { updateDriverList() }
      </div>


    );
}

