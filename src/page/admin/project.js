
import { useEffect, useState } from "../../lib";
const ProjectsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    useEffect(() => {
     
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
               
                const newProjects = data.filter((project) => project.id != id);
                setData(newProjects);


                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE",
                }).then(() => alert("Xóa thành công"));
            });
        }
    });

    return `<div>
    
    <div class="ql">
    
        <h1>Quản lý dự án</h1>
        <div class="them">
        <button> <a href="./Project-add">Thêm dự án</a></buton>
        </div>
        <table border="2" class="table table-bordered">
            <thead id="indam">
                <tr>
                    <th>Id</th>
                    <th>Tên dự án</th>
                    <th>Ảnh</th>
                    <th>Link Url</th>
                    <th>Action</th>
                </tr>
            </thead>
        <tbody>
            ${data
                .map(
                    (project, index) => `
                <tr id="tang">
                    <td id="id">${index + 1}</td>
                    <td id="tda">${project.name}</td>
                    <td id="anhda"><img src="${project.gallery}" alt=""></td>
                    <td id="linkurl">${project.url}</td>
                    <td>
                        <button id="xoa" data-id="${
                            project.id
                        }" class="btn btn-remove btn-danger">Xóa</button>
                      <button id="sua">  <a href="/admin/projects/${project.id}/edit">Sửa</a> </button> 
                    </td>
                </tr>
            `
                )
                .join("")}
            
        </tbody>
        </container>
        </div>
    </div>`;
};

export default ProjectsPage;
