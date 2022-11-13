import React from 'react'
import { useSelector } from 'react-redux'

export default function VipInfo(props) {
  const { vipObj } = useSelector(state => state.vipSlice)
  console.log(props.obj)
  return (
    <div className='p-1'>
      {vipObj.rank ?
        <div >
          <div>
            <img src={vipObj.person.squareImage} alt={"picture of " + vipObj.person.name} />
          </div>
          <div>
            <p>Name : {vipObj.person.name}</p>
            <p>Company : {vipObj.source}</p>
            <p>Age : {Math.floor((Date.now() - vipObj.birthDate) / (1000 * 60 * 60 * 24 * 365))}</p>
            <p>{(vipObj.finalWorth).toLocaleString()} M</p>
          </div>
        </div>
        : <div>Loading...</div>}
    </div>
  )
}
// {props.obj.person.squareImage}