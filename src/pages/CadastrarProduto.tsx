import React from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import { Produto, useProduto } from "../context/ProdutosContext";
import { Link, useNavigate } from "react-router-dom";

const CadastrarProduto = () => {
  const [nome, setNome] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [valor, setValor] = React.useState("");
  const [disponivel, setDisponivel] = React.useState("");
  const { addProduto } = useProduto();
  const navigate = useNavigate();

  function cadastrarNovoProduto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novoProduto: Produto = {
      nomeProduto: nome,
      descricaoProduto: descricao,
      valorProduto: valor,
      disponivel,
    };

    addProduto(novoProduto);

    navigate("/listagem");

    setNome("");
    setDescricao("");
    setValor("");
    setDisponivel("");
  }

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gray-300">
      <div></div>
      <div>
        <form onSubmit={cadastrarNovoProduto}>
          <Input
            label="Nome produto"
            value={nome}
            onChange={({ currentTarget }) => setNome(currentTarget.value)}
            required
          />
          <Input
            label="Descricao produto"
            value={descricao}
            onChange={({ currentTarget }) => setDescricao(currentTarget.value)}
            required
          />
          <Input
            label="Valor produto"
            type="number"
            value={valor}
            onChange={({ currentTarget }) => setValor(currentTarget.value)}
            required
          />
          <Select
            label="disponivel"
            options={["sim", "nao"]}
            value={disponivel}
            onChange={({ currentTarget }) => setDisponivel(currentTarget.value)}
            required
          />
          <button className="mt-4 text-xl bold bg-slate-400 py-2 px-6 block rounded-lg">
            Cadastrar
          </button>
        </form>
        <div className="mt-8">
          <Link
            to="/listagem"
            className="bg-slate-600 text-white py-1 px-5 rounded"
          >
            Ver produtos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CadastrarProduto;
