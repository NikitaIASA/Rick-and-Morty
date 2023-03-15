import React from "react";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { ProtectedRoute } from "./components/Routes/ProtectedRoute";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/Character";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route
          path="/signin"
          element={
            <ProtectedRoute redirectTo="/profile" component={<SignIn />} />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/signin" component={<Profile />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
