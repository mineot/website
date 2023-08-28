import { document } from "@/core/doc";
import { Menu } from "./menu";

type SidebarsProps = {
  showClose?: boolean;
};

export function Sidebar(props: SidebarsProps) {
  return (
    <div>
      <div className="offcanvas-header px-2 pt-2 pb-0">
        <h3 className="offcanvas-title text-secondary">{document.name}</h3>
        {props.showClose ? (
          <button
            type="button"
            className="btn btn-link text-secondary"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        ) : null}
      </div>
      <div className="offcanvas-body p-2">
        <div>
          <img
            className="img-thumbnail w-75"
            src={document.photo}
            alt={document.name}
          />
        </div>
        <div className="text-color mt-2">
          <small>{document.summary}</small>
        </div>
        <div className="fast-contacts mt-4">
          {document.fastContact.map((contact: any) => (
            <a
              className="fast-contact-item text-secondary h4"
              key={contact.key}
              href={contact.url}
              target={contact.outside ? "_blank" : "_self"}
            >
              <i className={contact.icon}></i>
            </a>
          ))}
        </div>
        <div className="mt-3">
          <Menu />
        </div>
      </div>
    </div>
  );
}
