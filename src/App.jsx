import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Events from "./Events";
import UserNotRegisteredError from "./UserNotRegisteredError";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/access-denied" element={<UserNotRegisteredError />} />
        </Routes>
      </Layout>
    </Router>
  );
}