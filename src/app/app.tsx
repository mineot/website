import { LayoutLarge } from "./layout-large";
import { LayoutSmall } from "./layout-small";

export default function App() {
  const large = (
    <div className="d-none d-md-block overflow-hidden">
      <LayoutLarge />
    </div>
  );

  const small = (
    <div className="d-block d-md-none">
      <LayoutSmall />
    </div>
  );

  return (
    <div className="overflow-hidden">
      {large}
      {small}
    </div>
  );
}
