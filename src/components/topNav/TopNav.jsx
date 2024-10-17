import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="topNav_cont">
      <div className="topNavLogoOne">
      
        <img 
         
          src="https://wb05nopapi.wpdns.site/wp-content/uploads/2023/09/proworkslogoclearbackground-1.png"
          alt="nav logo"
        />
      </div>

      <div className="topNavTwo">
        <i class="bi bi-geo-alt"></i>
        <p>
          403 Powerhouse Suite <br /> 306 <br /> e3xample TX, 00000
        </p>
      </div>
      <div className="topNavThree">
        <i class=" bi bi-envelope"></i> <p className="jennifer">example <br /> @domain.com</p>
      </div>
      <div className="topNavFour">
        <i class="fa-solid fa-tty"></i>
        <p>
          000-000- <br /> 0000
        </p>
      </div>
    </div>
  );
};

export default TopNav;
