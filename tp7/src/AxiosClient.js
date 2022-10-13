import axios from "axios";

export const GetProductos= async () =>{
    return axios.get(`https://dummyjson.com/products`,)
    .then(function(res){
        return res
    })
    .catch(function(){
        throw "Error"
    })
}