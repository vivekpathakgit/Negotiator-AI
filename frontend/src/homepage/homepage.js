import ProductTiles from "../components/ProductTiles";
import Sell from "../components/Sell";
import Slides from "../components/Slides";
import Navbar from "../components/navbar";
import productList from "../data/productList";

import user from "../data/user";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { jwtDecode } from "jwt-decode"; //decode the google credentials
import { useState } from "react";

function setUser(id, name, email, image) {
  user.id = id;
  user.name = name;
  user.email = email;
  user.products = [];
  user.chats = [];
  user.image = image;
}

function Homepage() {
  let name = localStorage.getItem("name");
  const [loggedIn, setLogin] = useState(name);

  if (!loggedIn) {
    return (
      <div className="min-h-screen grid place-items-center  bg-prim-color">
        <div className="text-5xl text-center">
          Welcome to
          <br />
          Negotiation-AI
        </div>
        <div className="mb-[10rem]">
          <GoogleOAuthProvider clientId="">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
                setUser(
                  credentialResponse.clientId,
                  decoded.name,
                  decoded.email,
                  decoded.picture
                );
                setLogin(true);
                // setIsPending(false);
                localStorage.setItem("name", decoded.name);
                localStorage.setItem("id", credentialResponse.clientId);
                localStorage.setItem("email", decoded.email);
                localStorage.setItem("image", decoded.picture);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pb-12">
        <Navbar />
        <Slides />
        <div className="flex flex-wrap justify-start m-7 gap-5 min-h-full">
          {productList.map((product) => {
            return (
              <ProductTiles key={product.id} product={product} brief={false} />
            );
          })}
        </div>
        <Sell />
      </div>
    );
  }
}

export default Homepage;
