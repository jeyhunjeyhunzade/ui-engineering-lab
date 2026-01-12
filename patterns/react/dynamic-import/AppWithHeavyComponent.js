// Regular import (loads immediately)
import HeavyComponent from "./HeavyComponent";

function App() {
  return <HeavyComponent />;
}

// Dynamic import (loads when needed)
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
