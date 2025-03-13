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
import UseEffectParent from "./components/Hooks/CustomUseEffect/UseEffectParent";
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
import WhyDidYouUpdateParent from "./components/whyDidYouUpdate/WhyDidYouUpdateParent";
import AtlysParentApp from "./components/AtlysAssignment/AtlysParentApp";
import Storage from "./components/Storage/Storage";
import RandomPractice from "./components/RandomPractice/RandomPractice";
import StarWars from "./components/StarWars/StarWars";
import Pokemon from "./components/PokemonApp/Pokemon";
import Products from "./components/ECommerce/Products";
import HigherOrderComp from "./components/HigherOrderComponent/HigherOrderComp";
import CompountComponent from "./components/CompoundComponent/CompountComponent";
import AuthProvider from "./components/ContextApiUsingReducer/AuthProvider";
import ParentCustomCrousel from "./components/CustomCrousel/ParentCustomCrousel";
import PracticeByChoice from "./components/RandomPractice/PracticeByChoice";
import ToggleContainer from "./components/learnReactQuery/ToggleContainer";
import Storybook from "./components/LearnStorybook/Storybook";
import PracticeComp from "./components/PracticeComp/PracticeComp";
import HolyGrailLayout from "./components/HolyGrailLayout/HolyGrailLayout";
import Tabs from "./components/Tabs/Tabs";
import Shimmer from "./components/Shimmer/Shimmer";
import NestedComments from "./components/NestedComments/NestedComments";
import ImageSlider from "./components/ImageSlider.js/ImageSlider";
import ParentProgress from "./components/ProgressBar/ParentProgress";
import MouseMove from "./components/MouseMove/MouseMove";
import FeatureFlagProvider from "./components/FeatureFlag/FeatureFlagProvider";
import FeatureFlag from "./components/FeatureFlag/FeatureFlag";
import ParentModal from "./components/Modal/ParentModal";
import EmployeeManagement from "./components/EmployeeList/EmployeeManagement";
import ParentFolderStructure from "./components/FolderStructure/ParentFolderStructure";
import FormValidations from "./components/FormValidations/FormValidations";
import ComponentShouldUpdate from "./components/ComponentShouldUpdate/ComponentShouldUpdate";
import ParentCustomUseMemo from "./components/CustomUseMemo/ParentCustomUseMemo";
import ParentAccordion from "./components/AccordionUsingCompoundComp/ParentAccordion";
import CountryCapitalGame from "./components/CountryCapitalGame/CountryCapitalGame";

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
        path: "/hoc",
        element: <HigherOrderComp />,
      },
      {
        path: "/Infinite Scroll",
        element: <InfiniteScroll />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/movie-song",
        element: <ParentMovieSong />,
      },
      {
        path: "/autocomplete",
        element: <ParentAutocomplete />,
      },
      {
        path: "/why-did-you-update",
        element: <WhyDidYouUpdateParent />,
      },
      {
        path: "/atlys-assignment",
        element: <AtlysParentApp />,
      },
      {
        path: "/storage",
        element: <Storage />,
      },
      {
        path: "/random-practice",
        element: <RandomPractice />,
      },
      {
        path: "/star-wars",
        element: <StarWars />,
      },
      {
        path: "/pokemons",
        element: <Pokemon />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/compount-component",
        element: <CompountComponent />,
      },
      {
        path: "/accordion-using-compound-component",
        element: <ParentAccordion />,
      },
      {
        path: "/context-api-using-use-reducer",
        element: <AuthProvider />,
      },
      {
        path: "/custom-crousel",
        element: <ParentCustomCrousel />,
      },
      {
        path: "/anything-random",
        element: <PracticeByChoice />,
      },
      {
        path: "/learn-react-query",
        element: <ToggleContainer />,
      },
      {
        path: "/learn-storybook",
        element: <Storybook />,
      },
      {
        path: "/learn-wrapped-practice",
        element: <PracticeComp />,
      },
      {
        path: "/holy-grail-layout",
        element: <HolyGrailLayout />,
      },
      {
        path: "/tabs",
        element: <Tabs />,
      },
      {
        path: "/shimmer",
        element: <Shimmer />,
      },
      {
        path: "/nested-comments",
        element: <NestedComments />,
      },
      {
        path: "/image-slider",
        element: <ImageSlider />,
      },
      {
        path: "/progress-bar",
        element: <ParentProgress />,
      },
      {
        path: "/mouse-move",
        element: <MouseMove />,
      },
      {
        path: "/feature-flag",
        element: <FeatureFlag />,
      },
      {
        path: "/parent-modal",
        element: <ParentModal />,
      },
      {
        path: "/employee-management",
        element: <EmployeeManagement />,
      }, 
      {
        path: "/folder-structure",
        element: <ParentFolderStructure />,
      }, 
      {
        path: "/form-validations",
        element: <FormValidations />,
      }, 
      {
        path: "/component-should-update",
        element: <ComponentShouldUpdate />,
      },
      {
        path: "/custom-use-memo",
        element: <ParentCustomUseMemo />,
      },
      {
        path: "/country-capital-game",
        element: <CountryCapitalGame />,
      },
      {
        path: "/*",
        element: <h1>Page Not Found</h1>,
      }
    ],
  },
]);

function App() {
  return (
    <FeatureFlagProvider>
      <ThemeContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ThemeContextProvider>
    </FeatureFlagProvider>
  );
}

export default App;
