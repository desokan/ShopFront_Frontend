import NavBarTop from "./NavBarTop";
import NavBarMid from "./NavBarMid";
import NavBarBottom from "./NavBarBottom";
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <NavBarTop t={t} />
      <NavBarMid t={t} />
      <NavBarBottom t={t} />
    </nav>
  );
};

export default NavBar;
