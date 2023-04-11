import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "../components/CreateArea";

const card = notes.map((item) => {
  return <Note key={item.key} title={item.title} content={item.content} />;
});

function App() {
  return (
    <>
      <Header />
      <CreateArea />
      {card}
      <Footer />
    </>
  );
}

export default App;
