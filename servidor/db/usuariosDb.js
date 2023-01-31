import criaHashESalSenha from "../utils/criaHasESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
  return usuariosColecao.findOne({ nome });
}

function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
}

export { cadastrarUsuario, encontrarUsuario };