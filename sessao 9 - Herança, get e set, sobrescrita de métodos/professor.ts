import { Pessoa } from "./pessoa";

export class Professor extends Pessoa{
    private _area : string;

	public get area(): string {
		return this._area;
	}

	public set area(value: string) {
		this._area = value;
	}

}