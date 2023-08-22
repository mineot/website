import { PropsWithChildren } from "react";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";

type LayoutProps = {};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <div className="layout">
      <div className="head">
        <Navbar />
      </div>
      <div className="body">
        <div className="body-content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="panel">
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
