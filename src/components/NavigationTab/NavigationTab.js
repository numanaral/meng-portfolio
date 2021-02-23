import { FOOTER_HEIGHT } from "components/Footer/constants";
import { NAVBAR_HEIGHT } from "components/Navbar";
import useClientRect from "hooks/useClientRect";
import React, { cloneElement, useRef } from "react";
import Nav from "reactstrap/lib/Nav";
import TabContent from "reactstrap/lib/TabContent";
import TabPane from "reactstrap/lib/TabPane";
import { getElementFromElementOrType } from "utils/react";
import NavItem from "./NavItem";
import useHook from "./useHook";

const NavigationTab = ({ tabs = [] }) => {
  const { activeTab, toggle } = useHook();

  const [navigationRect, navigationRef] = useClientRect();
  //   const [tabRect, tabRef] = useClientRect();
  /** @type {React.RefObject<HTMLDivElement>} */
  const tabPaneRef = useRef();

  const { navItems, navContents } = tabs.reduce(
    (acc, { title, content, props = {} }) => {
      acc.navItems.push(title);
      acc.navContents.push({ content, props });
      return acc;
    },
    { navItems: [], navContents: [] }
  );

  return (
    <>
      <div className="nav-tabs-navigation" ref={navigationRef}>
        <div className="nav-tabs-wrapper">
          <Nav id="tabs" role="tablist" tabs>
            {navItems.map((title, index) => (
              <NavItem
                key={title}
                title={title}
                activeTab={activeTab}
                index={index}
                onClick={toggle}
              />
            ))}
          </Nav>
        </div>
      </div>
      {/* <TabContent activeTab={activeTab} className="text-center" ref={tabRef}> */}
      <TabContent
        activeTab={activeTab}
        className="text-center"
        ref={tabPaneRef}
        style={{
          height: `calc(100% - ${
            -4 + NAVBAR_HEIGHT + FOOTER_HEIGHT + navigationRect?.top || 0
          }px)`,
        }}
      >
        {navContents.map(({ content, props }, index) => (
          <TabPane key={index} tabId={index} style={{ height: "100%" }}>
            {cloneElement(getElementFromElementOrType(content), { ...props })}
          </TabPane>
        ))}
      </TabContent>
    </>
  );
};

export default NavigationTab;
