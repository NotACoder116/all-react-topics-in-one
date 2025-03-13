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
  { id: 23, name: "Autocomplete", url: "/autocomplete" },
  { id: 24, name: "Why did you update", url: "/why-did-you-update" },
  { id: 25, name: "Atlys Assignment", url: "/atlys-assignment" },
  { id: 26, name: "storage", url: "/storage" },
  { id: 27, name: "random-practice", url: "/random-practice" },
  { id: 28, name: "Star Wars", url: "/star-wars" },
  { id: 29, name: "Pokemons", url: "/pokemons" },
  { id: 30, name: "products", url: "/products" },
  { id: 31, name: "Compound Component", url: "/compount-component" },
  { id: 32, name: "Context api using use reducer", url: "/context-api-using-use-reducer" },
  { id: 33, name: "Custom Crousel", url: "/custom-crousel" },
  { id: 34, name: "Anything Random", url: "/anything-random" },
  { id: 35, name: "Learn React Query", url: "/learn-react-query" },
  { id: 36, name: "Learn Storybook", url: "/learn-storybook" }, 
  { id: 37, name: "Learn Wrapped Prsctice", url: "/learn-wrapped-practice" }, 
  { id: 38, name: "Holy Grail Layout", url: "/holy-grail-layout" },
  { id: 39, name: "Tabs", url: "/tabs" },
  { id: 40, name: "Shimmer UI", url: "/shimmer" }, 
  { id: 41, name: "Nested Comments", url: "/nested-comments" },
  { id: 42, name: "Image Slider", url: "/image-slider" },
  { id: 43, name: "Progress Bar", url: "/progress-bar" }, 
  { id: 44, name: "Mouse Move", url: "/mouse-move" }, 
  { id: 45, name: "Feature Flag", url: "/feature-flag" }, 
  { id: 46, name: "Parent Modal", url: "/parent-modal" }, 
  { id: 47, name: "Employee Management", url: "/employee-management" }, 
  { id: 48, name: "Folder Structure", url: "/folder-structure" }, 
  { id: 49, name: "Form Validations", url: "/form-validations" }, 
  { id: 50, name: "Component Should Update", url: "/component-should-update" }, 
  { id: 51, name: "Custom Use Memo", url: "/custom-use-memo" }, 
  { id: 52, name: "Accordion Using Compound Component", url: "/accordion-using-compound-component" }, 
  { id: 53, name: "Country Capital Game", url: "/country-capital-game" }, 
  { id: 54, name: "Use Async", url: "/use-async" }
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
