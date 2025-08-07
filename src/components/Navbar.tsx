// resman-ui-host/src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const moduleRegistry = [
  { name: "Home", path: "/" },
  { name: "Admin", path: "/admin" },
  { name: "Recruit", path: "/recruit" },
];

const Navbar = () => {
  const [modules, setModules] = useState(moduleRegistry);

  useEffect(() => {
    setModules(moduleRegistry);
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#18206F" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <div className="flex justify-between items-center">
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          LOGO
        </Typography>
        </div>
        <div className="flex items-center space-x-8">
          {modules.map((module) => (
            <NavLink
              key={module.name}
              to={module.path}
              className={({ isActive }) =>
                `text-white font-medium hover:underline ${
                  isActive ? "underline font-bold" : ""
                }`
              }
            >
              {module.name}
            </NavLink>
          ))}
        </div>
        <div>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;