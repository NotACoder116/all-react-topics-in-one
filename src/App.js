// import { useEffect, useRef, useState } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import ParentAutocomplete from "./components/Autocomplete/ParentAutocomplete";
import { ThemeContextProvider } from "./components/ChangeTheme/ChangeThemeContext";
import DebounceInput from "./components/CustomHook/CustomUseDebounce/DebounceInput";
import UsersData from "./components/CustomHook/CustomUseFetch/UsersData";
import UseWindowsSize from "./components/CustomHook/UseWindowsSize";
import ParentUseIdle from "./components/CustomIdle/ParentUseIdle";
import ParentState from "./components/customStateWithHistory/ParentState";
import ParentHoc from "./components/HOCComponents/ParentHoc.JS";
import UseEffectParent from "./components/Hooks/CustomUseEffect/UseEffectParent";
import CustomUseMemo from "./components/Hooks/CustomUseMemo";
import UseImperativeHandle from "./components/Hooks/UseImperativeHandle";
import UseMemoUseCallback from "./components/Hooks/UseMemoUseCallback";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import MapFilterReduce from "./components/MapFilterReduce/MapFilterReduce";
import ParentMovieSong from "./components/MovieSongsRedux/ParentMovieSong";
import Pagination from "./components/Pagination/Pagination";
import Home from "./components/RouterComponents/Home";
import ParentUseAsync from "./components/UseAsync/ParentUseAsync";
import GrandParent from "./components/UseContext/GrandParent";
import UseCustomLocalStorageHook from "./components/UseLocalStorage/UseCustomLocalStorageHook";
import UseReducerPractice from "./components/UseReducer/UseReducerPractice";
import UserRef from "./components/UseRef/UserRef";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/use-ref",
        element: <UserRef />,
      },
      {
        path: "/map-filter-reduce",
        element: <MapFilterReduce />,
      },
      {
        path: "/custom-use-effect",
        element: <UseEffectParent />,
      },
      {
        path: "/use-context",
        element: <GrandParent />,
      },
      {
        path: "/use-reducer",
        element: <UseReducerPractice />,
      },
      {
        path: "/memo-vs-callback",
        element: <UseMemoUseCallback />,
      },
      {
        path: "/use-imperative",
        element: <UseImperativeHandle />,
      },
      {
        path: "/custom-use-window",
        element: <UseWindowsSize />,
      },
      {
        path: "/custom-use-fetch",
        element: <UsersData />,
      },
      {
        path: "/custom-debounce",
        element: <DebounceInput />,
      },
      {
        path: "/custom-local-storage",
        element: <UseCustomLocalStorageHook />,
      },
      {
        path: "/custom-history",
        element: <ParentState />,
      },
      {
        path: "/use-idle",
        element: <ParentUseIdle />,
      },
      {
        path: "/use-async",
        element: <ParentUseAsync />,
      },
      {
        path: '/hoc',
        element: <ParentHoc />
      },
      {
        path: '/Infinite Scroll',
        element: <InfiniteScroll />
      },
      {
        path: '/pagination',
        element: <Pagination />
      },
      {
        path: '/movie-song',
        element: <ParentMovieSong />
      },
      {
        path: '/autocomplete',
        element: <ParentAutocomplete />
      },
      {
        path: "/*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);

function App() {
  // const [counter, setCounter] = useState(0);
  // const inputRef = useRef();
  // let userData = {
  //   name: "Yadwinder",
  //   greet: function () {
  //     return "Hello " + this.name;
  //   },
  // };

  return (
    <ThemeContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ThemeContextProvider>
  );

  // useEffect(() => {
  //   console.log("Updated");
  // }, [counter]);

  // function onHandleFocus() {
  //   inputRef.current.focus();
  //   inputRef.current.value = "Yadwinder";
  //   console.log("Initialized");
  // }

  // useEffect(() => {
  //   console.log(inputRef.current); // logs the <input> element
  //   inputRef.current.focus(); // focuses the input field
  //   console.log("From parent");
  // }, []);

  // return (
  //   <ThemeContextProvider>
  //     <div>
  //       {/* <hr /> */}
  //       {/* <Button name="Button by props" />

  //     <HelloWorld name="Hello world by props" />
  //     <UserRef inputRef={inputRef} />
  //     <button onClick={() => onHandleFocus()}>Focus</button>
  //     <hr></hr> */}
  //       <BrowserRouter>
  //         <div className="flex">
  //           <div className="w-1/5 border-x-2">
  //             <ButtonContext.Provider value="Yadwinder web dev">
  //               <UserContext.Provider value={userData}>
  //                 <Navbar />
  //                 {/* <Sidebar /> */}
  //               </UserContext.Provider>
  //             </ButtonContext.Provider>
  //           </div>
  //           <div className="flex justify-center items-center w-4/5">
  //             <Routes>
  //               <Route path="/" element={<Home />} />
  //               <Route path="/users/:name" element={<Users />} />
  //               <Route
  //                 path="/map-filter-reduce"
  //                 element={<MapFilterReduce />}
  //               />
  //               <Route
  // path="/custom-use-effect"
  // element={<UseEffectParent />}
  //               />
  //               <Route path="/use-ref" element={<UserRef />} />
  //               <Route path="/use-context" element={<GrandParent />} />
  //               <Route path="/use-reducer" element={<UseReducerPractice />} />
  //               <Route path="/memo-vs-callback" element={<UseMemoUseCallback />} />
  //               <Route path="/custom-memo" element={<CustomUseMemo />} />
  //               <Route path="/use-imperative" element={<UseImperativeHandle />} />
  //               <Route path="/custom-use-window" element={<UseWindowsSize />} />
  //               <Route path="/custom-use-fetch" element={<UsersData />} />
  //               <Route path="/custom-debounce" element={<DebounceInput />} />
  //               <Route path="/custom-local-storage" element={<UseCustomLocalStorageHook />} />
  //               {/* <Route path="/intersection-observer" element={<UseCustomLocalStorageHook />} /> */}
  //               <Route path="/*" element={<h1>Page Not Found</h1>} />
  //             </Routes>
  //             {/* <div>
  //           <Category name="This sending from App"/>
  //         </div>
  //         <div>
  //           <Posts />
  //         </div> */}
  //           </div>

  //           {/* <UseReducerPractice />
  //       <UseCustomHook /> */}

  //           {/* <div>
  //         <div>{counter}</div>
  //         <button onClick={() => setCounter(counter + 1)}>Counter</button>
  //       </div>
  //       <hr></hr> */}

  //           {/* <UseTransition /> */}

  //           {/* <div>
  //         <h2>Use Deffered</h2>
  //         <DefferedInput />
  //       </div> */}
  //         </div>
  //       </BrowserRouter>
  //       {/* <BrowserRouter>
  //     <Navbar/>
  //     <br />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/users/:name" element={<Users/>} />
  //       <Route path="/*" element={<h1>Page Not Found</h1>} />
  //     </Routes>
  //   </BrowserRouter> */}
  //     </div>
  //   </ThemeContextProvider>
  // );
}

export default App;
