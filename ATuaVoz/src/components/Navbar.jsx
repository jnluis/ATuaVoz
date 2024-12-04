import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Update theme state on load and when toggled
  React.useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navLinks = [
    { label: "Equipa", href: "equipa" },
    { label: "Manifestos", href: "manifesto" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* Left Content */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          className={`transition-all ${
            isMenuOpen ? "absolute left-1/2 transform -translate-x-1/2" : ""
          }`}
        >
            {/* TODO: talez esta posição absolute tenha de ser mudada! */}
          <Link color="foreground" href="/ATuaVoz/">
            <p className="font-bold text-inherit">Logo da lista</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Content */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Link color="foreground" href={link.href}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
            {isDarkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.href}>
            <Link
              href={link.href}
              color="foreground"
              className="w-full text-center"
              size="lg"
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
        {/* Add Theme Toggle to Mobile Menu */}
        <NavbarMenuItem>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2"
          >
            {isDarkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
