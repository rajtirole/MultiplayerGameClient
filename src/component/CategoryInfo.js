import React from 'react'
import './CategoryInfo.css'

const CategoryInfo = ({list,SetList}) => {
  return (
    <div className='CategoryInfoContainer'>
        <div className='imageContainer'>
            <img src={list.imageUrl}></img>
        </div>
        <div className='cardContainer'>
            <h3>{list.title}</h3>
            <p>
                {list.description}
            </p>
            <ul>{list?.descriptionList?.map((ele,index)=>{
                console.log(ele);
                return <li key={index}>
                    {ele}
                </li>
            })}</ul>
        </div>
    </div>  
  )
}

export default CategoryInfo