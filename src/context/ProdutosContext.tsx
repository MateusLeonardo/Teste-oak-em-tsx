import React from "react";

interface ProdutosContextProps {
  produtos: Produto[]
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
  addProduto: (novoProduto: Produto) => void
}
export interface Produto {
  nomeProduto: string;
  descricaoProduto: string;
  valorProduto: string;
  disponivel: string;
}

const ProdutosContext = React.createContext<ProdutosContextProps | null>(null)

export const useProduto = () => {
  const context = React.useContext(ProdutosContext)
  if(!context) throw new Error('ProdutosContext deve estar dentro de ProdutoProvider')
  return context
}

export const ProdutosProviter = ({children}: React.PropsWithChildren) => {
  const [produtos, setProdutos] = React.useState<Produto[]>([])

  const addProduto = (novoProduto: Produto) => {
    setProdutos([...produtos, novoProduto])
  }

  return <ProdutosContext.Provider value={{produtos, setProdutos, addProduto}}>{children}</ProdutosContext.Provider>
}