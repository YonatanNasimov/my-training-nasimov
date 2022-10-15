import React from 'react'
import VodItem from './vodItem'

function VodList() {
  return (
    <main className='container-fluid'>
      <div className='container'>
        <h2>List of TV shows: </h2>
        <div className='row'>
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
        </div>
      </div>
    </main>
  )
}

export default VodList