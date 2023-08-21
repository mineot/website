import { PropsWithChildren } from "react";

type LayoutProps = {};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <div className="layout">
      <div className="head">
        <h1>Head</h1>
      </div>
      <div className="body">
        <div className="body-content">
          <div className="sidebar">
            <div>Sidebar</div>
          </div>
          <div className="panel">
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
