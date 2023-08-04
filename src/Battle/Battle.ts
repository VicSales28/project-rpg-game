import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected player: Fighter) { }

  // Deve retornar 1 se o jogador vencer, -1 caso contrário
  fight(): number {
    // Verifica se o jogador tem pontos de vida iguais a -1 (considerado derrotado)
    // Se sim, retorna -1, caso contrário, retorna 1 (considerado vitorioso)
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
