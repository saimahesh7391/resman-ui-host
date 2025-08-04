// import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { Link } from 'react-router-dom';

// const navItems = [
//   'Admin',
//   'Recruit',
//   'Employee',
//   'Sales',
//   'Finance',
//   'HR',
//   'Reports',
// ];

// export default function Navbar() {
//   return (
//     <AppBar
//       position="static"
//       style={{
//         background: '#18206F',
//       }}
//     >
//       <Toolbar className="flex justify-between items-center">
//         {/* Left: Logo + Menu */}
//         <div className="flex justify-between items-center">
//           {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton> */}
//           <Typography variant="h6" className="text-white font-bold">
//             LOGO
//           </Typography>
//           {/* <img src="/logo.png" alt="App Logo" /> */}
//         </div>
//         <div className="flex items-center space-x-8">
//           {/* Navigation Links */}
//           <div className="flex space-x-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={`/${item.toLowerCase()}`}
//                 className="text-white font-medium cursor-pointer hover:underline"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Right: Icons */}
//         <div>
//           <IconButton className="text-white" color="inherit">
//             <NotificationsIcon />
//           </IconButton>
//           <IconButton className="text-white" color="inherit">
//             <AccountCircle />
//           </IconButton>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

// Dynamic module registry
const moduleRegistry = [
  { name: "Admin", path: "/admin" },
  { name: "Recruit", path: "/recruit" },
  // Add more modules (Employee, Sales, etc.) as they’re created
];

const Navbar = () => {
  const [modules, setModules] = useState(moduleRegistry);

  // In the future, fetch modules dynamically from a config or API
  useEffect(() => {
    // Example: Fetch available modules from a config
    setModules(moduleRegistry);
  }, []);

  return (
    <AppBar position='static' sx={{ backgroundColor: "#18206F" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Logo */}
        <Typography variant='h6' sx={{ color: "white", fontWeight: "bold" }}>
          LOGO
        </Typography>

        {/* Center: Navigation Links */}
        <div className='flex space-x-4'>
          {modules.map((module) => (
            <Link
              key={module.name}
              to={module.path}
              className='text-white font-medium hover:underline'
            >
              {module.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div>
          <IconButton color='inherit'>
            <NotificationsIcon />
          </IconButton>
          <IconButton color='inherit'>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
