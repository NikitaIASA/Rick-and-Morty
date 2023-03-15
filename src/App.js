import React from "react";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./routes/PrivateRoute";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import CharacterPage from "./pages/Character";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignIn";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
