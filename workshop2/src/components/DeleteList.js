export const DeleteList = (id , data)=>{
    return data.filter((e)=> e.id !== id)
}