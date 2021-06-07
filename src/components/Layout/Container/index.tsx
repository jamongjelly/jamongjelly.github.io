import React, { ReactNode } from "react";
import Navbar from "../../ui/Navbar";
import DashBoard from "../DashBoard";
import "./Container.scss";

interface Container {
  title: string;
  description: string;
  children?: ReactNode;
}

function Container({ title, description, children, ...rest }: Container) {
  return (
    <div id="container" {...rest}>
      <Navbar />
      <DashBoard title={title} description={description}>
        {children}
      </DashBoard>
    </div>
  );
}

export default Container;