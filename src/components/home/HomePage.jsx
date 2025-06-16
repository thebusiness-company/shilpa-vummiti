import React, { useEffect } from 'react'
import FashionBanner from './Banner';
import MeetShilpaBanner from './MeetShilpaBanner';
import CategoryProductView from '../product/CategoryProductView';
import { randomValue } from '../../GenerateCardCode';
const HomePage = () => {
  useEffect(()=>{
    if(localStorage.getItem("cart_code")===null){
      localStorage.setItem("cart_code",randomValue)
    }
  },[])
  return (
    <>
    <FashionBanner/>
    <MeetShilpaBanner/>
    <CategoryProductView/>
    
    
    </>
  )
}

export default HomePage
