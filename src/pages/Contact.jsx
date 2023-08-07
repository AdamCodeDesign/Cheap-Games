import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact_container container row" style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100vh"}}>
        <article className="adress col-6">
          <h1>Sklep Cheap Games</h1>
          <h3>ul. Adama Kodersa 1/1</h3>
          <h3>42-400 Wrocław</h3>
        </article>
        <article className="contacts col-6">
          <h1>Phone number</h1>
          <h1>669-848-852</h1>
          <h1>e-mail: leshchuDev@gmail.com</h1>
        </article>
      </section>
    </>
  );
}
