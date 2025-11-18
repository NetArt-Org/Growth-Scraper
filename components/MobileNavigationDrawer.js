"use client"; // Required for useState, useEffect in App Router

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import Link from "next/link";
import Image from "next/image";

const MobileNavigationDrawer = ({ isDrawerOpen, setIsDrawerOpen, drawerButtonRef,authLinks,menuData,appPromo,contactSection }) => {
  const [clicked, setClicked] = useState(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isDrawerOpen]);

  const handleToggle = (index) => {
    setClicked(clicked === index ? null : index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsDrawerOpen(false);
      drawerButtonRef.current?.focus();
    }
  };

  return (
    <div
      className="mobile_navigation"
      ref={drawerRef}
      tabIndex={isDrawerOpen ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {isDrawerOpen && (
        <div
          className="backdrop"
          onClick={() => {
            setIsDrawerOpen(false);
            drawerButtonRef.current?.focus();
          }}
        ></div>
      )}

      <div className={`drawer_content ${isDrawerOpen ? "active" : ""}`}>
        <div className="close_drawer">
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              drawerButtonRef.current?.focus();
            }}
          >
            <X size={30} />
          </button>
        </div>
        <div>
          <MegaMenu appPromo={appPromo} handleToggle={handleToggle} clicked={clicked} setIsDrawerOpen={setIsDrawerOpen} menuData={menuData} contactSection={contactSection}/>
          <div className="flex" style={{ gap: "5px", display: "flex", margin: "0" }}>
            <Link href={authLinks.signIn.href} className='header-btn gradient-border'>
              {authLinks.signIn.label}
            </Link>
            <Link href={authLinks.register.href} className='header-btn gradient-banner-button'>
              {authLinks.register.label}
            </Link>
          </div>
          <div  style={{display:"flex",gap:"20px",flexWrap:"wrap",padding:"40px 0.5rem",fontSize:"14px"}}>
                {contactSection.map((item, index) => (
                  <a
                    className="socialLinks"
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontSize:"14px"}}
                  >
                    {item.label}
                    <Image src={item.icon} alt="Arrow" width={16} height={16} />
                  </a>
                ))}
              </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;