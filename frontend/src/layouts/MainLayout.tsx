import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h2>Navbar (à construire)</h2>

      <main>
        <Outlet />
      </main>

      <footer>Footer (à construire)</footer>
    </>
  );
}

export default MainLayout;