import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://root:ribeiro863@websocketribeiro.xpfan1g.mongodb.net/?retryWrites=true&w=majority")


let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");

    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco com sucesso!");

} catch (e) { 
    console.log(e);
}

export { documentosColecao };