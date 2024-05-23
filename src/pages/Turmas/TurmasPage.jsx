import React from "react";
import styles from "./styles";

const { GlobalContainer, ContainerText, Container, Content, ButtonTable } = styles;

const TurmasPage = () => {
  return (
    <section>
      <GlobalContainer>
        <ContainerText>
          <h1>Turmas e Horários</h1>
          <p>
            Abaixo temos a tabela de dias e horários disponíveis para cada turma. Lembrando que aos sábados todas as
            turmas possuem um jogo livre.
          </p>
          <h2>Horários e Dias disponíveis para cada turma </h2>
        </ContainerText>

        <Container>
          <Content>
            <h1>Turma Chute Inicial - Escolha um dia da semana e um horário</h1>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário - Manhã</th>
                  <th>Horário - Tarde</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segunda-feira</td>
                  <td>9h às 10h | 10h30 as 11h30</td>
                  <td>13h às 14h | 14h às 15h</td>
                </tr>
                <tr>
                  <td>Quarta-feira</td>
                  <td>10h30 às 11h30 </td>
                  <td>15h30 às 16h30</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>9h30 às 10h30 (jogo livre)</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h1>Turma Apitão - Escolha um dia da semana e um horário</h1>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário - Manhã</th>
                  <th>Horário - Tarde</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Terça-feira</td>
                  <td>8h00 às 9h00 | 9h30 às 8h30 | 10h00 às 11h00</td>
                  <td>13h00 às 14h00 | 15h00 às 16h00</td>
                </tr>
                <tr>
                  <td>Quinta-feira</td>
                  <td>7h30 às 8h30 | 10h30 às 11h30</td>
                  <td>15h30 às 16h30 | 17h00 às 18h00</td>
                </tr>
                <tr>
                  <td>Sexta-feira</td>
                  <td>10h30 às 11h30</td>
                  <td>13h30 às 14h30</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>9h30 às 10h30 (jogo livre)</td>
                  <td>13h00 às 14h00 (jogo livre)</td>
                </tr>
              </tbody>
            </table>

            <h1>Turma Passa a Bola - Escolha dois dias da semana e um horário</h1>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário - Manhã</th>
                  <th>Horário - Tarde</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segunda-feira</td>
                  <td>7h00 às 8h40 | 9h00 às 10h40</td>
                  <td>13h às 14h40 | 15h00 às 16h40</td>
                </tr>
                <tr>
                  <td>Terça-feira</td>
                  <td>7h30 às 9h10 | 9h30 às 11h10</td>
                  <td>15h00 às 16h40 | 17h00 às 18h40</td>
                </tr>
                <tr>
                  <td>Quarta-feira</td>
                  <td>8h30 às 10h10 | 9h10 às 10h40</td>
                  <td>14h00 às 15h40 | 16h00 às 17h40 </td>
                </tr>
                <tr>
                  <td>Quinta-feira</td>
                  <td>7h00 às 8h40 | 10h00 às 11h40 </td>
                  <td>15h30 às 16h30 | 17h às 18h40</td>
                </tr>
                <tr>
                  <td>Sexta-feira</td>
                  <td>8h00 às 9h40 | 10h00 às 11h40</td>
                  <td>15h00 às 16h40</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>7h00 às 9h00 | 10h00 às 12h00 (jogo livre)</td>
                  <td>13h00 às 15h00 | 16h00 às (jogo livre)</td>
                </tr>
              </tbody>
            </table>
            <ButtonTable>Matricule-se</ButtonTable>
          </Content>
        </Container>
      </GlobalContainer>
    </section>
  );
};

export default TurmasPage;
