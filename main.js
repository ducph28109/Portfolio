import { router,render } from "./src/lib";
import ProjectAdd from "./src/page/admin/Project-add";
import ProjectsPage from "./src/page/admin/project";
import ProjectEdit from "./src/page/admin/project-edit";
import Home from "./src/page/Home";
import project_detail from "./src/page/project_detail";
const container = document.querySelector("#container");

router.on("/",()=> render(Home,container));
router.on("/Project-add", ()=> render(ProjectAdd,container))
router.on("/admin/projects/:id/edit", ({data})=> render(()=>ProjectEdit(data),container))
router.on("/project", ()=> render(ProjectsPage,container))
router.on("/project/:id", ({data})=> render(()=>project_detail(data),container))
router.notFound(()=> console.log( "not found page"));

router.resolve();