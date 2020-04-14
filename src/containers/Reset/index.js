import React from 'react'
import Button from '../../components/Button'
import './index.css'

function Reset() {
  return (
    <div className="control-btns">
      <Button mark="X"/> <Button mark="RESET"/> <Button mark="O"/>
    </div>
  );
}

export default Reset;
