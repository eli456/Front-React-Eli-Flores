import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import FlowerList from './FlowerList';
import  {Imagen} from './Inicio';
import CreateFlores from './CreateFlower';
import Login from "./Login";
import Search from "./Search";
import Openai from "./openai";

const Home = () => {
  return (
    <>
      <FlowerList />
    </>
  );
};

const App = () => {
  return (
    <div >
      <Header />
      <Imagen />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateFlores/>}/>
          <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/openai" element={<Openai />} />
        </Routes>
      </div>
  );
};
export default App;