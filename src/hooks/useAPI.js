import React, {useEffect, useState} from 'react'

const useAPI = (route, id) => {
  //fetch data
  useEffect(() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com'
    fetch(`${baseUrl}/${route}/${id}`)
      .then(response => console.log(response.json()))
      .catch(error => console.log(error))
  }, [route, id])
  


  return (
    <div>useAPI</div>
  )
}

export default useAPI