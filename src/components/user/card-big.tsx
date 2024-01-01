import { useDocument, DocumentType } from "@/doc";

export function CardBig(): any {
  const doc: DocumentType = useDocument();

  return (
    <div className="d-flex flex-column gap-1 text-center">
      <h1>{doc?.name}</h1>
      <div className="text-center">
        <img
          src={doc?.photo}
          alt={doc?.name}
          className="img-thumbnail img-fluid w-50 mb-2"
        />
      </div>
      <small>{doc?.summary}</small>
    </div>
  );
}
