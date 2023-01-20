import React from 'react'
import { Button } from "../../../helpers";
import "./style-btn.css"

export const BtnCustom = ({title}) => {
  return (
    <Button  className='btn-15' color="primary">{title}</Button>
  )
}
