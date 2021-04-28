import React from "react";
import "./App.css";
import ArgoContainer from "./components/ArgoContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-body">
        <ArgoContainer />
      </section>
      <Footer />
    </div>
  )
}