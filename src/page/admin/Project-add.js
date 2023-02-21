import { router, useEffect } from "../../lib";
import axios from "axios";

const ProjectAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");
    const image = document.querySelector("#projects-images");
    const url = document.querySelector("#project-url");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(image.files);
      const formData = {
        name: name.value,
        url: url.value,
        gallery: urls,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/project"));
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
  <div class="khung-add">
     <div class="add"> 
       <h1>Project-add</h1>
        <form id="form-add">
            <label for="">Tên dự án</label> <br>
            <input type="text" id="name" class="border" /><br><br>
           
            <label for="">url dự án</label> <br>
            <input type="url" id="project-url" class="border" /><br><br>
           <div class="duc">
            <label for="">Ảnh dự án</label> <br>
            <input  type="file" multiple id="projects-images" class="border" />
          </div>
            <button id="themda" class="btn btn-primary">Thêm dự án</button>
          </form>

          </div>
          </div>
    </div>`;
};

export default ProjectAdd;