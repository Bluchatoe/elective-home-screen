import { Outlet } from "react-router-dom";

function Body() {
  return (
    <main className="h-full w-full max-h-full overflow-hidden bg-stone-950/80">
      <Outlet />
    </main>
  );
}

export default Body;
