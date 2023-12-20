import { Large } from "./layout/large";
import { Small } from "./layout/small";

export default function App() {
  return (
    <div className="overflow-hidden">
      <div className="d-none d-md-block overflow-hidden">
        <Large />
      </div>
      <div className="d-block d-md-none">
        <Small />
      </div>
    </div>
  );
}
