type SidebarsProps = {
  showClose?: boolean;
};

export function Sidebar(props: SidebarsProps) {
  const closeButton = (
    <button
      type="button"
      className="btn btn-outline-secondary"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      <i className="bi bi-x-lg"></i>
    </button>
  );

  return (
    <div>
      <div className="offcanvas-header">
        <h3 className="offcanvas-title text-secondary">Website</h3>
        {props.showClose ? closeButton : null}
      </div>
      <div className="offcanvas-body">body</div>
    </div>
  );
}
