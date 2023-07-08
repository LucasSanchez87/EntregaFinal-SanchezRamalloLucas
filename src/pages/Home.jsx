import React, {useContext, useEffect, useState} from 'react'
import ItemListContainer from '../components/ItemListContainer';
import {ProductsData} from "../json/Products"
import CartContext from '../context/CartContext';
import {collection, getDocs, getFirestore} from "firebase/firestore";

const Home = () => {

  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError ]=useState(false);

  useEffect(() => {
    const db =getFirestore();

    const productCollection = collection (db,"products");
    getDocs(productCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                );
      
    }) 
    .catch((error) => setError(true))
    .then(() => setLoading(false));

  },[]);
  
  const state = useContext(CartContext)
  return (
    <div>
        {loading ? (<div> loading</div>
    
  ) : error ? (
    <div>Error</div>
  ) : (
  <ItemListContainer productsData={productsData} />
  )}
  </div>
  )
}

export default Home;
