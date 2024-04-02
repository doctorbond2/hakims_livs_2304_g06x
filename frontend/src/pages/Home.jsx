import ItemList from '../components/ItemList'
import { useEffect, useState } from 'react'
import { GET_REQUEST } from '@/utils/helpers/request.helper'


const Home = () => {
  const [productList,setProductList] = useState(null)
    useEffect(() => {
      const data = GET_REQUEST("/");
      if(data) {
        setProductList(data)
      }
    }, [])
    
    
  return (
    <>
        <ItemList {...{productList}}/>
    </>

  )
}

export default Home