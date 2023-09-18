import { document } from "@/core/doc";

export interface Props {
  showClose?: boolean;
}

function CloseButton(props: Props) {
  if (props.showClose) {
    return (
      <div className="close">
        <button
          type="button"
          className="btn btn-link text-secondary float-end"
          data-bs-dismiss="offcanvas"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    );
  }

  return <div className="close"></div>;
}

function Header(props: Props) {
  return (
    <div className="header">
      <div className="header-container">
        <div className="title">
          <span>{document.name}</span>
        </div>
        <CloseButton showClose={props.showClose} />
      </div>
    </div>
  );
}

export function Sidebar(props: Props) {
  const fastContactItems = document.fastContacts.map((item: any) => {
    return (
      <div className="fast-contact-item" key={item.key}>
        <a
          href={item.url}
          className="btn btn-secondary"
          target={item.outside ? "_blank" : ""}
        >
          <i className={item.icon}></i>
        </a>
      </div>
    );
  });

  const body = (
    <div className="body">
      <div>
        <img
          className="img-fluid img-thumbnail w-75"
          src={document.photo}
          alt={document.name}
        />
      </div>
      <div className="mt-2">{document.summary}</div>
      <div className="fast-contacts">{fastContactItems}</div>
    </div>
  );

  return (
    <div className="sidebar">
      <Header showClose={props.showClose} />
      {body}
    </div>
  );
}
