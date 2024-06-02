import React, { useEffect, useState } from "react";
import imageIcon from "../assets/back.png";
import "./MultiplayerBox.css";
import ListCategory from "./ListCategory";
import CategoryInfo from "./CategoryInfo";
import { BACKEND_URL } from "../constant";
import axios from 'axios'

const MultiplayerBox = () => {
    const [list,SetList]=useState(false)
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/items`).then((res)=>{
            console.log(res.data.data);
            SetList(res?.data?.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className="MultiplayerBoxContainer">
      <div className="MultiplayerContainer">
        <div className="navigationContainer">
          <img src={imageIcon}></img>
          <h5> MULTIPLAYER /</h5>
        </div>
        <h2>QUICKMATCH</h2>
      </div>

      <div className="CategoryContainer">
    {list&&<ListCategory list={list} SetList={SetList}></ListCategory>}
    {list&&<CategoryInfo list={list} SetList={SetList}></CategoryInfo>}
      </div>
    </div>
  );
};

export default MultiplayerBox;
