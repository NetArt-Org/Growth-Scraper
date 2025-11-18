import { useState, useRef } from 'react';
import Link from 'next/link';
import Container from './Container';
import { AlignJustify } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';
// import { headerConfig } from '@/menuData';
// import { menuData } from '@/menuData';

const Navigation = ({ activeMenu,headerConfig,menuData }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const drawerButtonRef = useRef(null);
  const { logo, authLinks,appPromo,contactSection } = headerConfig;
  return (
    <header className={`nav__header_mobile md:nav__header  ${isDropdownOpen ? "header-gray" : null}`}>
      <Container>
        <div className="toolbar">
          <button
            ref={drawerButtonRef}
            className="menu_icon md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
           {/* Logo */}
           <Link className="logo__link" href={logo.link}>
           {/* <Link className="logo__link logo-container" href={logo.link}> */}
            {/* <img src={logo.imageSrc} alt="Logo" className="logo-icon" /> */}
            {/* <div className="logo-text" style={{ color: "#5D08B7", fontWeight: "normal" }}>
              {logo.text}
            </div> */}
          </Link>
          <div className="hidden md:flex flex menu-gap" style={{ position: "relative", alignItems: "center" }}>
            <MegaMenu setIsDropdownOpen={setIsDropdownOpen} activeMenu={activeMenu} menuData={menuData} contactSection={contactSection} appPromo={appPromo}/>
            <div className="hidden md:flex flex">
              <Link href={authLinks.signIn.href} className="header-btn gradient-border">
                {authLinks.signIn.label}
              </Link>
              <Link href={authLinks.register.href} className="header-btn gradient-banner-button">
                {authLinks.register.label}
              </Link>
            </div>
          </div>

          {/* Mobile navigation drawer */}
          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef,authLinks,menuData,appPromo,contactSection }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;