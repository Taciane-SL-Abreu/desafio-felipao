//Desafio feito com Switch/Case

let nomeDoHeroi = "Link";
let quantidadeDeXp = 9040;
let nivelDoHeroi = "";

switch (true) {
    case quantidadeDeXp <= 1000:
        nivelDoHeroi = "Ferro";
        break;

    case quantidadeDeXp >= 1001 && quantidadeDeXp <= 2000:
        nivelDoHeroi = "Bronze";
        break;

    case quantidadeDeXp >= 2001 && quantidadeDeXp <= 5000:
        nivelDoHeroi = "Prata";
        break;

    case quantidadeDeXp >= 5001 && quantidadeDeXp <= 6000:
        nivelDoHeroi = "Ouro";
        break;

    case quantidadeDeXp >= 6001 && quantidadeDeXp <= 7000:
        nivelDoHeroi = "Platina";
        break;

    case quantidadeDeXp >= 7001 && quantidadeDeXp <= 8000:
        nivelDoHeroi = "Diamente";
        break;

    case quantidadeDeXp >= 8001 && quantidadeDeXp <= 9000:
        nivelDoHeroi = "Ascendente";
        break;

    case quantidadeDeXp >= 9001 && quantidadeDeXp <= 10000:
        nivelDoHeroi = "Imoral";
        break;

    case quantidadeDeXp >= 10001:
        nivelDoHeroi = "Radiante";
        break;
}
console.log("O herói " + nomeDoHeroi + ", tem " + quantidadeDeXp + " de XP" + ", seu nível é " + nivelDoHeroi);
