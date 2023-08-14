import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"
import { useTranslation } from "react-i18next";

export const Imagen = () => {
  return (
    <div class="imagen">
      <h2>.</h2>
      <h2>.</h2>
      <h2>.</h2>
    </div>

  );
};

export const Informacion = () => {
  const { t } = useTranslation();
  return (
    <div class="Entrada sombra" >
      <section>
        <p>{t("¿Que información sobre los pedidos puedes encontrar en esta página?")}</p>

        <li>Podrás encontrar información acerca de: </li>
        <li>ID del pedido</li>
        <li>Flor solicitada para su venta!</li>
        <li>Tipo de flores vendidas</li>
        <li>Color de flor vendida</li>
        <li>Cantidad de flores solicitadas</li>
        <li>Fecha de pedido!</li>
        <li>Ocasión por la que fue solicitada la compra</li>
        <li>Precio del pedido</li>
        <li>Forma de pago con la que se realizó el pedido</li>
        <li>Existencias del pedido</li>
        <li>Dirección de entrega</li>
      </section>
    </div>
  );
}


export const Alumno = () => {
  return (
    <div>
      <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover .Carta">
        <div className='TarjetaFoto'>
          <img src="./img/Yo1.jpg" alt="Foto mía"
            class="d-block w-full"></img>
          <h2>
            Nombre del Alumno: <br></br>
            Matricula del Alumno: <br></br>
            Escolaridad: <br></br> 
          </h2>

          <h3>
            Elizabeth Galindo Pedraza <br></br>
            S20020310 <br></br>
            602 Ingeniería de Software, UV
          </h3>
        </div>

        <div class="px-2 py-2">
          <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            Trabajo
          </p>

          <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 Carta1">
            Página realizada en React para la gestión de pedidos de flores!
          </h1>

          <p class="mb-1">
            El front puede mostrar los pedidos almacenados en una ApiRest de Python con DJango!
          </p>

        </div>

      </div>



      <div class="w-full bg-white py-1 px-2 clearfix Carta2">
        <span class="float-left">
          Red Social Personal:  
          <a href="https://www.facebook.com/elizabeth.pedrazagalindo.71" class="styled-link"> Facebook</a>
        </span>
        <span class="float-right">
         <p class="styled-link"> +52 272 259 4250</p>
        </span>
      </div>
    </div>

  )
}