import Link from "next/link";
import React, { forwardRef } from "react";
import { useRouter } from "next/router";

const NavLink = forwardRef(({ href, onClick, children }, ref) => {
  const router = useRouter();
  console.log('router: ', router);
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      style={{ padding: 4, color: router.pathname === href ? 'red' : 'blue' }}
    >
      {children}
    </a>
  )
});

const Menu = () => {
  return (
    <nav>
      <Link href='/' passHref legacyBehavior>
        <NavLink>Home</NavLink>
      </Link>
      <Link href='/about' passHref legacyBehavior>
        <NavLink>About</NavLink>
      </Link>
      <Link href='/contact' passHref legacyBehavior>
        <NavLink>Contact</NavLink>
      </Link>
    </nav>
  );
}

export default Menu;