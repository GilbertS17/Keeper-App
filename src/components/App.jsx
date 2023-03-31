import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const card = notes.map((item) => {
  return <Note key={item.key} title={item.title} content={item.content} />;
});

function App() {
  return (
    <>
      <Header />
      {card}
      <Footer />
    </>
  );
}

export default App;
