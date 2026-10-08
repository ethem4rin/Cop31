import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Temel stiller bileşen stillerinden ÖNCE yüklenmeli — aksi halde
   .container gibi ortak sınıflar bileşen kurallarını ezer. */
import "./index.css";
import "./App.css";

import App from "./App.jsx";
import Admin from "./admin/Admin.jsx";
import { ADMIN_PATH } from "./admin/config";
import { ContentProvider } from "./content/ContentContext";

/* Basit yönlendirme: /cop31kluadmin → yönetim paneli, diğer her şey → site.
   Sunucu bu adresi tanımıyorsa #/cop31kluadmin de çalışır. */
function isAdminRoute() {
  const path = window.location.pathname.replace(/\/+$/, "").toLowerCase();
  const hash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  const target = ADMIN_PATH.replace(/^\//, "").toLowerCase();
  return path === `/${target}` || hash === target;
}

const Root = isAdminRoute() ? Admin : App;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContentProvider>
      <Root />
    </ContentProvider>
  </StrictMode>
);
