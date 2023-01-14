import React from 'react';
import { useState } from "react";
import ButtonsNavegation from '../buttonsNavegation/buttonNavegation';

const PagesHTTP = () => {
  const [httpCat, setHttpCat] = useState("");
  const [image, setImage] = useState("");
  const findCat = (event) => {
    try {
      event.preventDefault();
      setImage("https://http.cat/" + httpCat);
    }
    catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <h1>Status Codes</h1>
      <form action="#">
        <input
          placeholder="Digite algum status http."
          tipe="text"
          onChange={(event) => setHttpCat(event.target.value)}
        />
        <button type="button" onClick={findCat}>Buscar</button>
      </form>
      <div>{image && <img src={image} alt="Cats HTTP" />}</div>
      <ButtonsNavegation rota1='/home' rota2='/form' />
    </div>
  );
}
export default PagesHTTP;