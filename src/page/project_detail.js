
import Headerp from "../components/hederphu";
import Footer from "../components/Footer";
import { useEffect, useState } from "../lib"


const project_detail = ({id}) => {
    const [data,setData] = useState([])
    console.log(data);
   useEffect(()=>{
    fetch(`http://localhost:3000/projects/${id}`)
    .then((response)=>response.json())
    .then((data)=>setData(data))
   },[])
     
  return` 
  ${Headerp()}
  <div class="project-detail-js">

    <div class="pdtong">


    <div class="pdtrai">
    <img src="${data.gallery}" alt="">
    </div>


    <div class="pdphai">
    <h1 id="origin">Project information</h1>
    <hr>
    <h2>Name of project:  ${data.name}</h2>
    <h3 id="thea">Link Url: <a href="${data.url}">${data.url}</a> </h3>

    <div class="duoi">
    <h2>This is of portfolio detail</h2>
    <p> ${data.text}</p>
    </div>

   
  
</div>

</div>



    
         </div>
         ${Footer()}
  `
}

export default project_detail