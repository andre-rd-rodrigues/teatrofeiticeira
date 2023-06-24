import HeroSection from "@/components/HeroSection/HeroSection";
import Page from "@/components/Page/Page";
import PageContainer from "@/components/PageContainer/PageContainer";
import { contacts } from "@/data";
import React from "react";

function Contactos() {
  return (
    <>
      <HeroSection src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1719&q=80">
        <div>
          <h1>Contactos</h1>
        </div>
      </HeroSection>
      <PageContainer>
        <div className="flex flex-wrap gap-12 justify-between my-20">
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
      </PageContainer>
    </>
  );
}

export default Contactos;
