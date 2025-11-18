// import { menuData } from '../menuData';
import MenuItem from './MenuItem';

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen, setIsDropdownOpen, activeMenu, menuData, appPromo, contactSection }) => {
  return (
    <div className="nav__container">
      <nav>
        <ul>
          {Object.entries(menuData).map(([key, { label, href, children }], index) => (
            <MenuItem
              key={key}
              label={label}
              href={href}
              // eslint-disable-next-line react/no-children-prop
              children={children}
              setIsDrawerOpen={setIsDrawerOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              onToggle={() => {
                handleToggle && handleToggle(index);
                setIsDropdownOpen(clicked !== index); // Toggle open state
              }}
              activeMenu={activeMenu}
              active={clicked === index}
              appPromo={appPromo}
              contactSection={contactSection}
            />
          ))}
        </ul>
      </nav>
      <div >
      </div>
    </div>
  );
};

export default MegaMenu;