import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import UploadFiles from "./Components/Uploadfile";
import Faq from "./Components/faq";
import Unauthorized from "./Components/unauth";
import FilesPage from "./Components/files";

import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from "./authconfig";

function App() {
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={loginRequest}
    >
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload/:id" element={<UploadFiles />} />
          <Route path="/upload" element={<Unauthorized />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/unauth" element={<Unauthorized />} />
          <Route path="/files" element={<FilesPage/>}/>
        </Routes>
      </>
    </MsalAuthenticationTemplate>
  );
}

export default App;
