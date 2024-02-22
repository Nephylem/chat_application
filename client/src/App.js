import React, { useState, useEffect } from "react";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import ChatContainer from "./components/Chatbox/ChatContainerBox";
import UserAuth from "./components/UserAuth";



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserAuth />} />
        <Route path="*" element={<UserAuth />} />
        <Route path="/chatbox" element={<ChatContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
