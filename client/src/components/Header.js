import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <h3>process.env.EMAIL_ALUNO</h3> */}
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "black"}
          text={showAdd ? "Fechado" : "Adicionado"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "BIA 2024 - Aula 3",
};

export default Header;
