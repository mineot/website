import { Navbar } from "./navbar";
import { OffCanvas } from "./offcanvas";
import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar";

type LayoutProps = {};

function Large(props: PropsWithChildren<LayoutProps>) {
  const { children } = props;

  return (
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
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Medium(props: PropsWithChildren<LayoutProps>) {
  const { children } = props;

  return (
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
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <OffCanvas />
    </div>
  );
}

export function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children } = props;

  return (
    <div className="layout">
      <Large>{children}</Large>
      <Medium>{children}</Medium>
    </div>
  );
}
