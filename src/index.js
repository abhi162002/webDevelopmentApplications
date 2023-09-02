import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
 
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
const root = ReactDOM.createRoot(document.getElementById("root"));

const ClerkProviderWithRoutes= ()  => {
  const navigate = useNavigate();
 
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl="/" routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp  redirectUrl="/" routing="path" path="/sign-up" />}
        />
        <Route
          path="/"
          element={
          <>
            <SignedIn>
              <App />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
