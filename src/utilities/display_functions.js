import React from 'react'
import axios from 'axios'

export const getShips = async () => {

    let returnedData = await axios({
        method: 'GET',
        url: '/services/sw-api'
    });

  return returnedData
}
