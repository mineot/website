import { document } from "@/core/doc";

type SidebarsProps = {
  showClose?: boolean;
};

export function Sidebar(props: SidebarsProps) {
  const closeButton = props.showClose ? (
    <button
      type="button"
      className="btn btn-link text-secondary"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      <i className="bi bi-x-lg"></i>
    </button>
  ) : null;

  const photo = (
    <img
      className="img-thumbnail w-75"
      src={document.photo}
      alt={document.name}
    />
  );

  const fastContacts = document.fastContact.map((contact: any) => (
    <a
      className="fast-contact-item text-secondary h4"
      key={contact.key}
      href={contact.url}
      target={contact.outside ? "_blank" : "_self"}
    >
      <i className={contact.icon}></i>
    </a>
  ));

  return (
    <div>
      <div className="offcanvas-header px-2 pt-2 pb-0">
        <h3 className="offcanvas-title text-secondary">{document.name}</h3>
        {closeButton}
      </div>
      <div className="offcanvas-body p-2">
        <div>{photo}</div>
        <div className="text-color mt-2">
          <small>{document.summary}</small>
        </div>
        <div className="fast-contacts mt-4">{fastContacts}</div>
      </div>
    </div>
  );
}
