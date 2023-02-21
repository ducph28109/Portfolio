import { data } from "autoprefixer";
import axios from "axios";
import { router, useEffect, useState } from "../../lib";
const ProjectEdit = ({ id }) => {
    const [project, setProject] = useState({});
    
    useEffect(() => {
        fetch("http://localhost:3000/projects/" + id)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const name = document.querySelector("#name");
        const link = document.querySelector("#url");
      
        const image = document.querySelector("#projects-images");


        form.addEventListener("submit",  async (e) => {
            e.preventDefault();
           
            let urls = await uploadFiles(image.files);
            let img = project.gallery
            console.log(project)
            console.log(img)
            if(image.files.length==0){
                urls = img
            }else{
                console.log(image.files);
            }
            const formData = {
                name: name.value,
                gallery: urls,
                url:link.value

            };
            console.log(urls)
            fetch("http://localhost:3000/projects/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(() => router.navigate("/project"))
                .catch((error) => console.log(error));
        });
    });
    const uploadFiles = async (files) => {
        if (files) {
            const CLOUD_NAME = "dy2ta56tt";
            const PRESET_NAME = "ASM_ECMA";
            const FOLDER_NAME = "ecma-image";
          const urls = [];
          const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    
          const formData = new FormData();
          
    
          formData.append("upload_preset", PRESET_NAME);
          formData.append("folder", FOLDER_NAME);
    
          for (const file of files) {
            formData.append("file", file);
    
            const response = await axios.post(api, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            urls.push(response.data.secure_url);
          }
          console.log(urls);
          return urls;
        }
      };
    return `<div>
    <div class="tong_edit">
    <div class="editfrom">
    <h1>Product Edit</h1>
 
        <form id="form-edit">
        <label id="cochu" for="">Name</label> <br>
            <input type="text" id="name" class="border" value="${project.name}" /> <br> <br>
            <label id="cochu" for="">Url</label> <br>
            <input type="text" id="url" class="border" value="${project.url}" /><br><br>
            <label id="cochu" for="">Ảnh</label> <br>
             <input type="file" multiple id="projects-images" class="border" /><br><br>
            <button id="suaedit" class="btn btn-primary">Save</button>
        </form>


        </div>
        </div>
    </div>`;
};

export default ProjectEdit;