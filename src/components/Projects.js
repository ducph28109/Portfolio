import { useEffect, useState } from "../lib";

const Projects = () => {
    const[data,setData] = useState([])
        useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);


    return `
    
    <div id="projects">
    <P id="pro">Projects</P>
   
    
    <div class="ckhoi">
    ${data.map(project=>
    `<div class="duan">
   
    <img src="${project.gallery}" alt="">
    </a>
    <a href="">
    <h3 id="suaname">${project.name}</h3>
    </a>

    <a target="_blank" href="${project.url}"><button>View website</button></a> 
    </div>`
    ).join("")}

</div>



    </div>
    `;
};
export default Projects;