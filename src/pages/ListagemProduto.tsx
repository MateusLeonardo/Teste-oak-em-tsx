import { Link } from "react-router-dom";
import { useProduto } from "../context/ProdutosContext";

const ListagemProduto = () => {
  const { produtos } = useProduto();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div>
        <Link
          className="text-xl py-2 px-5 bg-slate-400 block w-max rounded-lg mb-2"
          to="/"
        >
          Voltar
        </Link>
        {produtos.length > 0 ? (
          <table>
            <thead className="bg-slate-600 text-white ">
              <tr>
                <th className="p-4">Nome</th>
                <th className="p-4">Valor</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((item) => (
                <tr key={item.nomeProduto} className=" border-stone-950">
                  <td className="p-4 border">{item.nomeProduto}</td>
                  <td className="p-4 border">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(item.valorProduto))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h1 className="text-2xl ">Nenhum produto cadastrado ainda!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListagemProduto;
