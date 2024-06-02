import React from 'react'
import './ListCategory.css'
import data from '../data.json'

const ListCategory = ({list,SetList}) => {
  return (
    <div className='ListCategoryContainer'>
      <ul>
      {data.map((ele,index)=>{
        return <li key={index}  onMouseEnter={()=>{
            console.log(ele);
            SetList(ele)
        }}>
            {ele.title}
        </li>
      })}
      </ul>
    </div>
  )
}

export default ListCategory