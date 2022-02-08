import React from 'react';
import { Alert } from 'antd';
import 'antd/dist/antd.css';

export const Success = () => {
  return (
    <Alert
      message="Success"
      description="You are logged in"
      type="success"
      showIcon
      closable
    />
  )
}  

export const Failure = ({error}) => {
  return (
    <Alert
      message="Error"
      description={error}
      type="error"
      showIcon
      closable
    />
  )
}  
