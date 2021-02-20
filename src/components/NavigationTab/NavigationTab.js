import React from "react";
import Nav from "reactstrap/lib/Nav";
import TabContent from "reactstrap/lib/TabContent";
import TabPane from "reactstrap/lib/TabPane";
import { getElementFromElementOrType } from "utils/react";
import NavItem from "./NavItem";
import useHook from "./useHook";

const NavigationTab = ({ tabs = [] }) => {
  const { activeTab, toggle } = useHook();

  const { navItems, navContents } = tabs.reduce(
    (acc, { title, content }) => {
      acc.navItems.push(title);
      acc.navContents.push(content);
      return acc;
    },
    { navItems: [], navContents: [] }
  );

  return (
    <>
      <div className="nav-tabs-navigation">
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
      <TabContent activeTab={activeTab} className="text-center">
        {navContents.map((content, index) => (
          <TabPane key={index} tabId={index}>
            {getElementFromElementOrType(content)}
          </TabPane>
        ))}
      </TabContent>
    </>
  );
};

export default NavigationTab;
