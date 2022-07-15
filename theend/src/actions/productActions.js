import axios from "axios"
export const getAllProducts=()=>async dispatch=>{
    dispatch({type:'GET_PRODUCTS_REQUEST'})
    try{
        const response=await axios.get('/api/products/getallproducts')
        console.log(response)
        dispatch({type:'GET_PRODUCTS_SUCCESS', payload: response.data})
        
    }catch(error){
            console.log(error)
            dispatch({type:'GET_PRODUCTS_FAILED', payload: error})
    }   
}


export const getProductById=(productid)=>async dispatch=>{
    dispatch({type:'GET_PRODUCT_BY_ID_REQUEST'})
    try{
        const response=await axios.post('/api/products/getproductbyid',{productid})
        console.log(response)
        dispatch({type:'GET_PRODUCT_BY_ID_SUCCESS', payload: response.data})
    }catch(error){
            console.log(error)
            dispatch({type:'GET_PRODUCT_BY_ID_FAILED', payload: error})
    }
    
}

export const addProduct=(product)=>async dispatch=>{
    dispatch({type:'ADD_PRODUCT_REQUEST'})
    try{
        const response=await axios.post('/api/products/addproduct', {product})
        console.log(response)
        dispatch({type:'ADD_PRODUCT_SUCCESS'})
        
    }catch(error){
        dispatch({type:'ADD_PRODUCT_FAILED', payload:error})
    }
}

export const editProduct=(editedproduct)=>async dispatch=>{
    dispatch({type:'EDIT_PRODUCT_REQUEST'})
    try{
        const response=await axios.post('/api/products/editproduct', {editedproduct})
        console.log(response)
        dispatch({type:'EDIT_PRODUCT_SUCCESS'})
        window.location.href='/admin/productslist'
    }catch(error){ 
        dispatch({type:'EDIT_PRODUCT_FAILED', payload:error})
    }
}


export const deleteProduct=(productid)=>async dispatch=>{
    try{
        const response=await axios.post('/api/products/deleteproduct',{productid})
        alert('Deleted Successfully')
        console.log(response)
        window.location.reload()
    }catch(error){
        alert('something went wrong')
        console.log(error)
    }
}