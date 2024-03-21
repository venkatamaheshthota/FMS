"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  }; 

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
    <nav className="navbar navbar-expand-lg nav-container" style={{padding: '15px'}}>
      <div className="container">
        <div className="relative -mx-4 flex items-center">
          <div className="flex w-full items-center justify-between px-4">
            <a className="navbar-brand display-print" href="/">
                <img
                  src={"/images/logo/florida_state_logo.png"}
                  className="img-responsive dosLogo"
                  alt="Florida Department of State"
                />
            </a>
          </div>
          <div className="flex w-fulltext-right text-white justify-between px-4">
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal"
              id="basic-addon2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
    <header
        className={`ud-header left-0 top-${sticky ? 0: 15} z-40 flex w-full items-center ${
          sticky
            ? "shadow-nav fixed z-[9999] border-b border-stroke bg-dark/80 backdrop-blur-[5px] transition dark:border-dark-3/20 dark:bg-dark/10"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center">
            
            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* {console.log(sticky, pathUrl)} */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute left-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 visible"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-white dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-white dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-white dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute left-0 z-30 w-[250px] mt-5 ml-5 lg:w-[250px] rounded border-[.5px] border-body-color/50 ${theme === "dark" ? 'bg-white': 'bg-dark'} px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 ${
                    navbarOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <ul className="block">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={menuItem.id} className="group relative">
                          {pathUrl !== "/" ? (
                            <Link
                              scroll={false}
                              href={menuItem.path}
                              className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-dark dark:text-dark dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-2  ${
                                pathUrl === menuItem?.path && "text-white"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <Link
                              scroll={false}
                              href={menuItem.path}
                              className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-2 ${
                                sticky
                                  ? "text-dark group-hover:text-dark dark:text-white dark:group-hover:text-dark"
                                  : "text-body-color dark:text-dark lg:text-white"
                              } ${
                                pathUrl === menuItem?.path &&
                                sticky &&
                                "text-white"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          )}
                        </li>
                      ) : (
                        <li
                          className="submenu-item group relative"
                          key={menuItem.id}
                        >
                          {pathUrl !== "/" ? (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-white group-hover:text-white dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-2 ${
                                sticky
                                  ? "text-white group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                  : "text-white"
                              }`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          )}

                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "!-left-[25px]" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem: any) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuItem.id}
                                className={`block rounded px-4 py-[10px] text-sm ${
                                  pathUrl === submenuItem.path
                                    ? "text-primary"
                                    : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
                {/* theme toggler */}
                {/* <button
                  aria-label="theme toggler"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
                >
                  <span>
                    <svg
                      viewBox="0 0 16 16"
                      className="hidden h-[22px] w-[22px] fill-current dark:block"
                    >
                      <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                    </svg>

                  </span>
                </button> */}
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div className="w-200 max-w-full px-4">
                <Link
                  href="/"
                  className={`navbar-logo block w-full ${
                    sticky ? "py-2" : "py-5"
                  } `}
                >
                  {pathUrl !== "/" ? (
                    <>
                      {/* <Image
                        src={`/images/logo/florida_logo_orange.png`}
                        alt="logo"
                        width={140}
                        height={30}
                        className="header-logo w-full dark:hidden"
                      /> */}
                      {/* <Image
                        src={`/images/logo/florida_logo_orange.png`}
                        alt="logo"
                        width={140}
                        height={30}
                        className="header-logo hidden w-full dark:block"
                      /> */}
                    </>
                  ) : (
                    <>
                      <Image
                        src={`${
                          sticky
                            ? "/images/logo/florida_logo.png"
                            : "/images/logo/florida_logo_orange.png"
                        }`}
                        alt="logo"
                        width={140}
                        height={30}
                        style={{marginLeft: 50 }}
                        className="header-logo w-full dark:hidden"
                      />
                      {/* <Image
                        src={"/images/logo/florida_logo_orange.png"}
                        alt="logo"
                        width={140}
                        height={30}
                        className="header-logo hidden w-full dark:block"
                      /> */}
                    </>
                  )}
                </Link>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <p className={`text-white mb-1 dark:text-white`}>
                {"Division of Arts and Culture"}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
