export class Pessoa{

    private _nome : string;
    private _endereco : string;
    private _telefone : string;
    private _email : string;
    private _idade : number;

    getDados(){
        console.log("Nome: "+ this._nome);   
        console.log("Endereco: "+ this._endereco);
        console.log("Telefone: "+ this._telefone);
        console.log("Email: "+ this._email);
        
    }

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public get endereco(): string {
		return this._endereco;
	}

	public set endereco(value: string) {
		this._endereco = value;
	}

	public get telefone(): string {
		return this._telefone;
	}

	public set telefone(value: string) {
		this._telefone = value;
	}

	public get email(): string {
		return this._email;
	}

	public set email(value: string) {
		this._email = value;
	}

	public get idade(): number {
		return this._idade;
	}

	public set idade(value: number) {
        if(value<16) console.log('IDADE NÃO PERMITIDA')
            this._idade = value;
	}    
    
}