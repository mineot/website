import { PropsWithChildren } from "react";

type LayoutProps = {};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  const items = [];

  for (let index = 0; index < 1000; index++) {
    items.push(<div key={index}>Item: {index}</div>);
  }

  return (
    <div className="layout">
      <div className="head">
        <div className="head-container">Head</div>
      </div>
      <div className="body">
        <div className="body-container">
          <div className="sidebar">
            <div className="sidebar-container">
              {/* Sidebar */}
              {items}
            </div>
          </div>
          <div className="content">
            Content
            {/* <div>{props.children}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
