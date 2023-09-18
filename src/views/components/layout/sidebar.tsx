import { document } from "@/core/doc";

export interface Props {
  showClose?: boolean;
}

function CloseButton(props: Props) {
  const { showClose } = props;

  if (showClose) {
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
  const { name } = document;
  const { showClose } = props;

  return (
    <div className="header">
      <div className="header-container">
        <div className="title">
          <span>{name}</span>
        </div>
        <CloseButton showClose={showClose} />
      </div>
    </div>
  );
}

function FastContactItem(props: any) {
  const { item } = props;
  const { url, icon, outside } = item;
  const target = outside ? "_blank" : "";

  return (
    <div className="fast-contact-item">
      <a href={url} className="btn btn-secondary" target={target}>
        <i className={icon}></i>
      </a>
    </div>
  );
}

function FastContacts() {
  const { fastContacts } = document;

  const items = fastContacts.map((item: any) => {
    return <FastContactItem key={item.key} item={item} />;
  });

  return <div className="fast-contacts">{items}</div>;
}

function Body() {
  const { name, photo, summary } = document;

  return (
    <div className="body">
      <div>
        <img className="img-fluid img-thumbnail w-50" src={photo} alt={name} />
      </div>
      <div className="mt-2">{summary}</div>
      <FastContacts />
    </div>
  );
}

export function Sidebar(props: Props) {
  const { showClose } = props;

  return (
    <div className="sidebar">
      <Header showClose={showClose} />
      <Body />
    </div>
  );
}
