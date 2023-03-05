import React from 'react'
import Flickerdata from './Flickerdata';
import { useSearchParams } from 'react-router-dom';
function Default() {
  const [searchParams] = useSearchParams();
  const value = searchParams.get('key');
  return (
    <Flickerdata tag={value}/>
  )
}
export default Default