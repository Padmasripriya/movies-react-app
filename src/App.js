import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { MoviesList } from "./Movies/MoviesList"
import { MovieDetail } from "./Movies/MovieDetail"
import "./App.css"

//routing with params
export function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<MoviesList />} />
        <Route path="/moviesList" element={<MoviesList />} />
        <Route path="moviesList/:moviesListId" element={<MovieDetail />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

/* Notes */

//import { Counter } from './Counter';
//import { Accordian } from './Accordian';
//import { Input } from './Input';

/* JSX Syntax starts here */
    /* the word class is special class in JS, so use className */
    /*<div className="App"> 
        <h1>Hello React</h1>
        <FirstComponent name="priya" greeting="Hello"/>
        <FirstComponent name="world"/>
        <Counter />
        <Accordian />
        <Input />
    </div>*/

    /* Use this function outside the App()
    function FirstComponent({name, greeting="Hello"}){
    return (
      <h2> {greeting} {name} </h2>
    );
    } */
