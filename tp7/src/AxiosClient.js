import axios from "axios";

export const GetProductos= async () =>{
    return axios.get(`https://dummyjson.com/products?limit=6`,)
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