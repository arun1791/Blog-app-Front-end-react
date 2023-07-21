import{myAxois} from "./helper";

const   loadAllCategories=()=>
{
    return myAxois.get('/api/v1').then(response=>{return response.data})
}