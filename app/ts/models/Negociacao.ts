export class Negociacao {
  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {}
  get volume() {
    return this.quantidade * this.valor;
  }
}

const negociacao = new Negociacao(new Date(), 1, 100);
console.log(negociacao.data);
console.log(negociacao.volume);
