import axios from "axios";

export const GetProductos= async (Numero) =>{
    let url=`https://dummyjson.com/products`
    if (Numero>0) {
        url=`https://dummyjson.com/products?limit=${Numero}`
    }
    return axios.get(url,)
    .then(function(res){
        return res
    })
    .catch(function(err){
        throw err
    })
}

export const GetProductoId= async (id) =>{
    return axios.get(`https://dummyjson.com/products/${id}`,)
    .then(function(res){
        return res
    })
    .catch(function(err){
        throw err
    })
}