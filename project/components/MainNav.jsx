import React, { useState } from "react";
import "rsuite/dist/styles/rsuite-default.css";
import {
  Sidebar,
  Sidenav,
  Nav,
  Navbar,
  Dropdown,
  Icon,
  Avatar,
  Container,
} from "rsuite";
import Link from "next/link";

import { careers } from "../constants/constants";
import { useAppContext } from "../context/context";

const headerStyle = {
  textAlign: "center",
  padding: 18,
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            <Icon icon={expand ? "angle-left" : "angle-right"} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

const MainNav = (props) => {
  const [authenticated, setAuthenticated, currentUser, setCurrentUser] =
    useAppContext();
  if (!currentUser) return null;

  const [expand, setExpand] = useState(true);

  function handleToggle() {
    setExpand(!expand);
  }

  var users = null;
  if (currentUser.area === "ADMIN")
    users = (
      <Link href="/users">
        <Nav.Item icon={<Icon icon="peoples" />}>Administración</Nav.Item>
      </Link>
    );

  var user_careers = [currentUser.area];
  if (currentUser.area === "ADMIN" || currentUser.area === "SERV_EDUCATIVOS")
    user_careers = careers;

  return (
    <Sidebar
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
      width={expand ? 260 : 56}
      collapsible
    >
      <Sidenav expanded={expand} defaultOpenKeys={["3"]} appearance="subtle">
        <Sidenav.Header style={headerStyle}>
          {/*<div>
                        <span style={{ color:'#fff', marginLeft: 12, fontSize: '18px' }}> Proyección de Matrícula</span>
                    </div>*/}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 15,
            }}
          >
            <Avatar circle src="https://img.icons8.com/color/480/avatar.png" />
            <span style={{ overflow: "hidden", marginTop: 12, fontSize: 14 }}>
              {currentUser.email}
            </span>
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            {users}
            <Dropdown eventKey="3" title="Carreras" icon={<Icon icon="bank" />}>
              {user_careers.map((career) => (
                <Dropdown.Item key={career}>
                  <Link href={{ pathname: "/career", query: { name: career } }}>
                    {career}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <Container
        style={{
          position: "absolute",
          bottom: 0,
          alignSelf: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <NavToggle expand={expand} onChange={handleToggle} />
      </Container>
    </Sidebar>
  );
};

export default MainNav;
