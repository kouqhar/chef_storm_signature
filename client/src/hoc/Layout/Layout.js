import { useState } from "react";

//  Components
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Navigation/Footer/Footer";

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [hideSideDrawer, setHideSideDrawer] = useState(null);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setHideSideDrawer(false);
    setShowSideDrawer(!showSideDrawer);
  };

  const hideSideDrawerToggleHandler = () => {
    setHideSideDrawer(true);
    setShowSideDrawer(false);
  };

  return (
    <Aux>
      <Toolbar />
      <SideDrawer
        closed={sideDrawerClosedHandler}
        sideDrawerShow={showSideDrawer}
        sideDrawerHide={hideSideDrawer}
        toggle={sideDrawerToggleHandler}
        hideSideBarHandler={hideSideDrawerToggleHandler}
      />
      {children}
      <Footer />
    </Aux>
  );
};

export default Layout;
