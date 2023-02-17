import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getShips } from '../../utilities/display_functions'

const DisplayStarShips = () => {

  const [ship, setShip] = useState([])

  const apiCall = async () =>
  {
    let response = await getShips()

    let shipList = response.data.results;
    setShip(shipList);
  }

  useEffect(() =>
  {
    apiCall()
  }, []);

  console.log(ship);

  let shipListJSX = ship.map((ship, index) =>
  {
    return(
      <div className='card' key={index}>
        <h1>{ship.name}</h1>
      </div>
    )
  })

  getShips();
  return (
    <div>{shipListJSX}</div>
  )
}

export default DisplayStarShips