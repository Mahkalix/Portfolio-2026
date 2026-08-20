import { RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import { router } from "./router/router.jsx";

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
