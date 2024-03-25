export const truncateText =(text,textLength)=>{
console.log(text.split(" ").length,textLength)
    if(text.split(" ").length <= textLength){
        return text
    }
    return `${text.split(" ").slice(0,textLength).join(" ")} ...`
   
}