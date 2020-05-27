System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao, negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
            };
            exports_1("Negociacao", Negociacao);
            negociacao = new Negociacao(new Date(), 1, 100);
            console.log(negociacao.data);
            console.log(negociacao.volume);
        }
    };
});
