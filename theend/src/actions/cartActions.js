export const addToCart=(product, quantity)=>(dispatch, getState)=>{
  
    let cartItem={
        name:product.name,
        _id:product._id,
        quantity: Number(quantity),
        price:product.price,
    }
    if(cartItem.quantity>10){
        alert("You can't add more than 10 items")
    }else{
        if(cartItem.quantity<1){
            dispatch({type:'DELETE_FROM_CART', payload:product})
        } else {
            dispatch({type:'ADD_TO_CART', payload:cartItem})
        }

    }

    
    const cartItems=getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

export const deleteFromCart=(product)=>(dispatch, getState)=>{
    dispatch({type:'DELETE_FROM_CART', payload:product})
    const cartItems=getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}