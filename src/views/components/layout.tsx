import { PropsWithChildren } from "react";

type LayoutProps = {};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <div className="layout">
      <div>{props.children}</div>
    </div>
  );
}
