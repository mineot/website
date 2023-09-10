import { PropsWithChildren } from "react";

type LayoutProps = {};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  const large = (
    <div className="large">
      <div className="large-container">
        <div className="sidebar">
          <div className="sidebar-container">Sidebar</div>
        </div>
        <div className="body">
          <div className="body-container">
            <div className="container-fluid">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const medium = (
    <div className="medium">
      <div className="medium-container">
        <div className="head">
          <div className="head-container">Head</div>
        </div>
        <div className="body">
          <div className="body-container">
            <div className="container">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="layout">
      {large}
      {medium}
    </div>
  );
}
