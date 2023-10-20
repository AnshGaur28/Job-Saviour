import React from "react";
import backgroundimg from '../../public/assets/herobg.png';
import { useNavigate } from 'react-router-dom';

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const navigate = useNavigate();

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const handleLogout = () => {
    // Remove JWT token from local storage
    localStorage.removeItem("jwtToken");

    // Redirect to the login page or any other page after logout
    // You can use the useNavigate hook from react-router-dom for navigation
    // For example:
    // const navigate = useNavigate();
    navigate("/login");
  };



  return (
    <div className="-m-6 max-h-[768px]  overflow-scroll p-1 m-1 ">
      <Navbar className="sticky top-0 z-10  px-4 py-2 lg:px-8 lg:py-4 bg-black"  >
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-xl bold text-white"
          >
            Job Saviour
          </Typography>
          {localStorage.getItem('jwtToken') !== null && <div className="flex items-center gap-4">
            <Button
              variant="text"
              size="lg"
              className="hidden lg:inline-block text-white"
            >
              <a href="/jobpost">Job Posts</a>
            </Button>
            <Button
              variant="text"
              size="lg"
              className="hidden lg:inline-block text-white"
            >
              <a href="/jobpost-form">Post Job</a>
            </Button>
          </div>}
          <div className="flex items-center gap-4">
            {localStorage.getItem('jwtToken') === null ?
              <div className="flex items-center gap-x-5">
                <Button
                  variant="text"
                  size="lg"
                  className="hidden lg:inline-block text-white"
                >
                  <a href="/login">Log In</a>
                </Button>
                <Button
                  variant="gradient"
                  size="lg"
                  className="hidden lg:inline-block text-white"
                >
                  <a href="register">Sign in</a>
                </Button>
              </div> :
              <Button
                variant="gradient"
                size="lg"
                className="hidden lg:inline-block text-white"
                onClick={handleLogout}
              >
                LogOut
              </Button>
            }
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        {localStorage.getItem('jwtToken') === null ? <MobileNav open={openNav}>
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav> :
          <MobileNav open={openNav}>
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log out</span>
              </Button>
            </div>
          </MobileNav>
        }
      </Navbar>
    </div>
  );
}