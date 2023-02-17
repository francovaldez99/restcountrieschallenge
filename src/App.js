import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { Routes, Route,useLocation } from "react-router-dom";
import Detail from "./components/Detail";




function App() {
  const location = useLocation();

  const [subregiones, setRegiones] = useState("");
  const [Theme, setTheme] = useState({
    dark:"",
  })

  const [state, setStates] = useState({
    countries: [],
    allCountries: [],
    regiones: ["Americas", "Africa", "Asia", "Europe", "Oceania", "Antarctic"],
    detail: [],
  });
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all/")
      .then((response) => response.json())
      .then((data) =>
        setStates({
          ...state,
          countries: data,
          allCountries: data,
          detail: data,
        })
      );
  }, []);

  function clickfiltro(e) {
    if (e.target.value === "clear") {
      setStates({
        ...state,
        countries: state.allCountries,
      });
    } else {
      setStates({
        ...state,
        countries: state.allCountries.filter(
          (element) => element.region === e.target.value
        ),
      });
    }
    setRegiones(e.target.value);
  }


  const inputHandler = (e) => {
    e.preventDefault();
    setStates({
      ...state,
      countries: state.allCountries.filter(
        (element) =>
          element.name.official.toLowerCase() ===
            e.target.value.toLowerCase() ||
          element.name.official
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          element.name.common.toLowerCase() === e.target.value.toLowerCase() ||
          element.name.common.includes(e.target.value.toLowerCase()) || e.target.value===""
      ),
    });
  };

  return (
    <div className={`App ${Theme.dark?Theme.dark:null}`}>
   
      
        <Navbar
          clickfiltro={() => clickfiltro}
          regiones={state.regiones}
          inputHandler={() => inputHandler}
          subregiones={subregiones}
          Theme={Theme}
          setTheme={setTheme}
        />
      
      <Routes>
        <Route  exact path="/" element={<Cards countries={state.countries} Theme={Theme}/>} />
        <Route
          path="/detail/:id"
          element={<Detail countrydetail={state.detail}  Theme={Theme}/>}
        />
      </Routes>
    </div>
  );
}

export default App;

