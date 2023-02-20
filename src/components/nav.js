import { menu } from "../data"

const nav = ()=>{
    return `
   <nav>   ${menu.map((iteam)=>
        `<a href="${iteam.link }">${iteam.name} </a>`
        
        ).join("")}
        </nav>
    `


}
export default nav