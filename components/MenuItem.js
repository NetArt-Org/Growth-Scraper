"use client"; // Needed for Next.js App Router

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import DropdownContent from "./DropdownContent";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const MenuItem = ({ label, href, children, onToggle, active, setIsDrawerOpen, setIsDropdownOpen, activeMenu, appPromo,contactSection }) => {
  const pathname = usePathname();

  const handleClick = () => {
    document.activeElement?.blur();
  };
  return (
    <>
      <li
        onMouseEnter={() => children && setIsDropdownOpen(true)}
        onMouseLeave={() => children && setIsDropdownOpen(false)}
      >
        <div className={`nav_item_content ${activeMenu == label ? "menu-active" : "main-menu"}`}
         onClick={(e) => {
          if (children) {
            e.preventDefault(); // Prevent default only when there's a dropdown
            onToggle();         // Trigger toggle
          } else {
            setIsDrawerOpen && setIsDrawerOpen(false); // Close drawer for simple links
          }
          document.activeElement?.blur();
        }}
        >
          <Link
            href={href}
            className={`${pathname === href ? "active" : ""}`}
            // className={pathname === href ? "active" : "" }
            onClick={() => {
              setIsDrawerOpen && setIsDrawerOpen(false);
              handleClick();
            }}
          >
            {label}
          </Link>
          {children && (
            <button
              className="md:hidden"
              onClick={onToggle}
              aria-label="Toggle dropdown"
              aria-haspopup="menu"
              aria-expanded={active ? "true" : "false"}
            >
              {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )}
        </div>
        {children && (
          <div
            role="menu"
            className={`dropdown ${active ? "h-auto" : "h-0 overflow-hidden md:h-auto"}`}
          >
            <Container>
              <DropdownContent
                submenuscontent={children}
                setIsDrawerOpen={setIsDrawerOpen}
                handleClick={handleClick}
                appPromo={appPromo}
              />
              <div className="contactSection">
                {contactSection.map((item, index) => (
                  <a
                    className="socialLinks"
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                    <Image src={item.icon} alt="Arrow" width={16} height={16} />
                  </a>
                ))}
              </div>
            </Container>
          </div>
        )}
      </li>
    </>
  );
};

export default MenuItem;