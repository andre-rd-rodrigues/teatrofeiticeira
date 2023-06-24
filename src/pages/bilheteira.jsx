import HeroSection from "@/components/HeroSection/HeroSection";
import Page from "@/components/Page/Page";
import PageContainer from "@/components/PageContainer/PageContainer";
import React from "react";

function bilheteira() {
  return (
    <>
      <HeroSection src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80">
        <div>
          <h1>Bilheteira</h1>
        </div>
      </HeroSection>
      <PageContainer>
        <h3 className="mt-20">Horário:</h3>
        <p>
          Todos os dias das 15 às 19h, em dias de espetáculo funciona até à hora
          de início do mesmo, e em dias de sessões matinais, abre uma hora antes
          do início.
        </p>
        <p>
          A bilheteira encerra também nos dias 1 de janeiro, domingo de Páscoa,
          1 de maio, durante todo o mês de agosto e 25 de dezembro.
        </p>
        <p>
          <em>
            Os horários de atendimento e/ou de programação podem sofrer
            alterações.
          </em>
        </p>

        <p>
          <span className="font-medium">Tel.: </span>(+351) 213 257 651 / 213
          257 620 (chamada para rede fixa nacional)
        </p>
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a href="mailto:bilheteira@teatrofeiticeiradonorte.pt">
            bilheteira@teatrofeiticeiradonorte.pt
          </a>
        </p>

        <h3 className="mt-10">Morada</h3>
        <p>
          Rua António Maria Cardoso, 54
          <br />
          1200-027 Lisboa
        </p>

        <h3 className="mt-10">Reservas</h3>
        <p>
          Os bilhetes deverão ser levantados até 48h após a reserva.
          <br />
          Só aos portadores do Cartão São Luiz é permitido levantar reservas até
          1h antes do início dos espetáculos.
        </p>

        <h3 className="mt-10">Devoluções</h3>
        <p>
          Não se efetuam trocas ou devoluções exceto nos casos de cancelamentos
          por parte do Teatro.
        </p>
      </PageContainer>
    </>
  );
}

export default bilheteira;
