import Page from "@/components/Page/Page";
import PageContainer from "@/components/PageContainer/PageContainer";
import { contacts } from "@/data";
import React from "react";

function Contactos() {
  return (
    <Page title="Contactos">
      <div className="flex flex-wrap gap-12 justify-between">
        <div>
          <h4 className="font-semibold">Email:</h4>
          <a
            href="mailto:bilheteira@teatrofeiticeiradonorte.pt"
            className="font-normal"
          >
            bilheteira@teatrofeiticeiradonorte.pt
          </a>
        </div>
        <div>
          <h4 className="font-semibold">Telemóvel:</h4>
          <a href="tel:+4733378901">{contacts.tel}</a>
        </div>
        <div>
          <h4 className="font-semibold">Morada:</h4>
          <p>
            Rua António Maria Cardoso, 54
            <br />
            1200-027 Lisboa
          </p>
        </div>
      </div>
    </Page>
  );
}

export default Contactos;
