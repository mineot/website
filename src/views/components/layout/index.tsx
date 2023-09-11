import { Navbar } from "./navbar";
import { OffCanvas } from "./offcanvas";
import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar";

type LayoutProps = {};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  const large = (
    <div className="large">
      <div className="large-container">
        <div className="left">
          <div className="left-container">
            <Sidebar showClose={false} />
          </div>
        </div>
        <div className="body">
          <div className="body-container">
            <div className="container-fluid">
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const medium = (
    <div className="medium">
      <div className="medium-container">
        <div className="top">
          <div className="top-container">
            <Navbar />
          </div>
        </div>
        <div className="body">
          <div className="body-container">
            <div className="container">
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      </div>
      <OffCanvas />
    </div>
  );

  return (
    <div className="layout">
      {large}
      {medium}
    </div>
  );
}
