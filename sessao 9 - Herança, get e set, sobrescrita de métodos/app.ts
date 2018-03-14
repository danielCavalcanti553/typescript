import { Professor } from "./professor";
import { Aluno } from "./aluno";

let prof = new Professor();
prof.nome = "Daniel";
prof.endereco= "Rua x";
prof.area = "Informática;";
prof.idade = 9;
prof.telefone = "2222222";
prof.email = "daniel@email";

prof.getDados();
console.log("----------");

let al = new Aluno("Ana","Rua x","2321321","daniel@email",22,"2017.10");
al.getDados()

