import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProdutosProviter } from "./context/ProdutosContext";
import CadastrarProduto from "./pages/CadastrarProduto";
import ListagemProduto from "./pages/ListagemProduto";

const App = () => {
  return (
    <BrowserRouter>
      <ProdutosProviter>
        <Routes>
          <Route path="/" element={<CadastrarProduto />} />
          <Route path="/listagem" element={<ListagemProduto />} />
        </Routes>
      </ProdutosProviter>
    </BrowserRouter>
  );
};

export default App;
