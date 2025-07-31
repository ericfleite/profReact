import { use, useState } from "react";
import Box from "./components/Box";
import Button from "./components/Button";
import Divider from "./components/Divider";
import Steps from "./components/Steps";
import Input from "./components/Input";
import Textarea from "./components/Textarea";

const listaDeSteps = [
            { nome: "Contato", ordem: 1 },
            { nome: "Empresa", ordem: 2 },
            { nome: "Projeto", ordem: 3 },
          ]

function App() {
  const [passoAtual, setPassoAtual] = useState(1);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [func, setFunc] = useState('');
  const [sobre, setSobre] = useState('');
  const [objetivo, setObjetivo] = useState('');

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box>
        <Steps
          steps={listaDeSteps}
        />
        <Divider />

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: 24,
          }}
        >
          {passoAtual === 1 && (
            <>
              <Input label="Nome" placeholder="Digite seu nome" value={nome} onChange={setNome} />
              <Input label="Telefone" placeholder="Digite seu telefone" value={telefone} onChange={setTelefone} />
              <Input label="Email" placeholder="Email" value={email} onChange={setEmail}/>
            </>
          )}

          {passoAtual === 2 && (
            <>
              <Input
                label="Nome da Empresa"
                placeholder="Informe o nome da empresa"
                value={empresa}
                onChange={setEmpresa}
              />
              <Input
                label="Nº de Funcionários"
                placeholder="Informe o número de funcionários"
                value={func}
                onChange={setFunc}
              />

              <Textarea
                label="Sobre o negócio"
                placeholder="Fale um pouco sobre o negócio"
                ehExpandivel={false}
                value={sobre}
                onChange={setSobre}
              />
            </>
          )}

          {passoAtual === 3 && (
            <>
              <Textarea
                label="Objetivo do Projeto"
                placeholder="Descreva quais são os objetivos do projeto"
                ehExpandivel={false}
                value={objetivo}
                onChange={setObjetivo}
              />
            </>
          )}

          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            {
              passoAtual > 1 &&
              <Button
                textoBtn={"Voltar"}
                onClick={() => setPassoAtual(passoAtual - 1)}
              />
            }
            
              
              <div
              style={{ display: "flex", justifyContent: "end", width: "100%" }}
            >
              <Button
                textoBtn={"Continuar"}
                onClick={() => {
                  if (passoAtual === listaDeSteps.length) {
                    alert("Formulário Concluído!");
                  }
                  setPassoAtual(passoAtual + 1);
                }}
              />
            </div>
            
            
          </div>
        </form>
      </Box>
    </div>
  );
}

export default App;
