import { document } from "@/core/doc";

export interface Props {
  showClose?: boolean;
}

export function Sidebar(props: Props) {
  const buttons = [];

  if (props.showClose) {
    buttons.push(
      <button
        type="button"
        className="btn btn-secondary float-end"
        data-bs-dismiss="offcanvas"
        key={new Date().getTime()}
      >
        <i className="bi bi-x-lg"></i>
      </button>,
    );
  }

  return (
    <div className="sidebar">
      <div className="header">
        <div className="header-container">
          <div className="title">
            <span>{document.name}</span>
          </div>
          <div className="close">{buttons}</div>
        </div>
      </div>
      <div className="body">Body</div>
    </div>
  );
}
