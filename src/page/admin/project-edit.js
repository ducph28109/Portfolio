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
                // .then(() => router.navigate("/project"))
                .catch((error) => console.log(error));
        });
    });
    const uploadFiles = async (files) => {
        if (files) {
          const CLOUD_NAME = "dychym88x";
          const PRESET_NAME = "up-load-image";
          const FOLDER_NAME = "Portfolio-Cv";
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
        <form id="form-edit">
            <input type="text" id="name" class="border" value="${project.name}" />

            <input type="text" id="url" class="border" value="${project.url}" />
             <input type="file" multiple id="projects-images" class="border" />
            <button class="btn btn-primary">Sửa</button>
        </form>
    </div>`;
};

export default ProjectEdit;