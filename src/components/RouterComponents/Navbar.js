import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ChangeTheme/ChangeThemeContext";

const sidebarMenu = [
  { id: 1, name: "Home", url: "/" },
  { id: 4, name: "Map, Filter, Reduce", url: "/map-filter-reduce" },
  { id: 5, name: "Custom Use Effect Hook", url: "/custom-use-effect" },
  { id: 6, name: "Use Ref Hook", url: "/use-ref" },
  { id: 7, name: "Use Context Hook", url: "/use-context" },
  { id: 8, name: "Use Reducer Hook", url: "/use-reducer" },
  { id: 9, name: "Memo Vs. Callback", url: "/memo-vs-callback" },
  { id: 10, name: "Custom Use Memo", url: "/custom-memo" },
  { id: 11, name: "Use Imperative", url: "/use-imperative" },
  { id: 12, name: "Custom Use Window", url: "/custom-use-window" },
  { id: 13, name: "Custom Use Fetch", url: "/custom-use-fetch" },
  { id: 14, name: "Custom Debounce", url: "/custom-debounce" },
  { id: 15, name: "Custom Local Storage", url: "/custom-local-storage" },
  { id: 16, name: "Intersection Observer", url: "/intersection-observer" },
  { id: 17, name: "Custom History", url: "/custom-history" },
  { id: 18, name: "Use Idle", url: "/use-idle" },
  { id: 19, name: "HOC", url: "/hoc" },
  { id: 20, name: "Infinite Scroll", url: "/Infinite Scroll" },
  { id: 21, name: "Pagination", url: "/pagination" },
  { id: 22, name: "Movie Song", url: "/movie-song" },
  { id: 23, name: "Autocomplete", url: "/autocomplete" }
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <label className="switch mt-8 ml-12">
        <input
          type="checkbox"
          checked={theme === "light" ? true : false}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
      <ul className="font-medium text-lg ltr mt-8 text-center">
        {sidebarMenu.map((eachItem) => {
          return (
            <NavLink
              key={eachItem.id}
              className="text-cyan-500 hover:bg-slate-100"
              to={eachItem.url}
            >
              <h5 className="px-1.5 py-1.5">{eachItem.name}</h5>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
}

export default Navbar;
