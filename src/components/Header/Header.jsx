import { NavLink } from "react-router-dom";

export const Header = () => {
  const navItems = [
    { href: "", text: "Home  " },
    { href: "about", text: "About Us  " },
    { href: "articles", text: "Articles  " },
  ];

  return (
    <div>
      <nav>
        {navItems.map(({ href, text }) => (
          <NavLink to={href} key={text}>
            {text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
