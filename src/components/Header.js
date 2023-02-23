import nav from "./nav";

const Header = () => {
    return `
    <div>

    <div class="container">
    <div class="banner">
    <!-- <img src="/img/banner.png" alt=""> -->
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

    <div class="hello">
        <p>HI! MY NAME IS ĐỨC</p>
        <p id="gchu">I'm fontend web developer</p>
    </div>
    <div class="but">
   <a target="_blank" href="https://www.topcv.vn/xem-cv/V1EAWVMHVgRYUlcGVQFSDVpaVAgHA1xXB1QDUgfd09"> <button>My resume</button></a>
</div>
   
</div>

</div>
    </div>
    `;
};
export default Header;


