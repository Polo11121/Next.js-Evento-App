import Link from "next/link";

const ROUTES = [
  {
    name: "Terms & Conditions",
    path: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
];

export const Footer = () => (
  <footer className="mt-auto flex flex-col sm:flex-row justify-around sm:justify-between items-center h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
    <small className="text-xs">
      &copy; 2050 Michael Jackson. All right reserved
    </small>
    <ul className="flex gap-x-3 sm:gap-x-6">
      {ROUTES.map(({ name, path }) => (
        <li key={path}>
          <Link href={path}>{name}</Link>
        </li>
      ))}
    </ul>
  </footer>
);
