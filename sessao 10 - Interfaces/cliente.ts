import { ClienteInterface } from "./cliente-interface";

export class Cliente implements ClienteInterface{

	nome : string;
	endereco : string;

	constructor() {
	}

	salvarDados(nome: string, endereco: string): void {
		console.log("Cadastrado com sucesso");
	}
	listarDados(): Cliente[] {
		throw new Error("Method not implemented.");
	}


}

