import { getByTitle } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const SocialButton = ({ name, provider, handleOnClick }) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (name.toLowerCase() === "facebook") {
      setIcon("facebook");
    } else if (name.toLowerCase() === "google") {
      setIcon("google");
    } else if (name.toLowerCase() === "github") {
      setIcon("github");
    }
  }, []);

  return (
    <li>
      <button onClick={() => handleOnClick(provider)}>
        {icon === "facebook" ? <i class='fab fa-facebook-f'></i> : null}
        {icon === "google" ? <i class='fab fa-google-plus-g'></i> : null}
        {icon === "github" ? <i class='fab fa-github'></i> : null}
        <span>{name}</span>
      </button>
    </li>
  );
};

export default SocialButton;
