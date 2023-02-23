import nav from "./nav";

const Headerp = () => {
    return `
   
    <div class="maumenu">
    <div class="heder">
    <div class="logo">
    <a href="/project">
        <img src="https://res.cloudinary.com/dy2ta56tt/image/upload/v1676951205/ecma-image/zia56mkg1ecytsptoe8o.png" alt="">
        </a>
    </div>
   
    <div class="menu">
    
   ${nav()}

   </div>
</div>
</div>

    
    `;
};
export default Headerp;


