import React from 'react'
import { Shoes } from './Shoes'
export const Zagolovok = () => {
  return (
    <div className="preview-container">
    <div className ="hits">ХИТЫ ПРОДАЖ</div>
    <Shoes />
    <div className="sales">СКИДКИ</div>
    <Shoes />
    <div className="new">НОВИНКИ</div>
    <Shoes />
    </div>
  )

}
