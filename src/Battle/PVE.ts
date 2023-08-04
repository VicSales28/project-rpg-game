import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monsters: SimpleFighter[],
  ) {
    super(_player);
  }

  // Método que realiza a batalha entre o jogador (_player) e os monstros (_monsters)
  fight(): number {
    // Percorre cada monstro presente no array _monsters
    this._monsters.forEach((monster) => {
      // Atribui uma assertiva de tipo para garantir que monster é uma instância de Fighter
      const fighterMonster = monster as Fighter;

      // Continua a batalha enquanto o jogador (_player) e o monstro têm pontos de vida maiores que zero
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        // O jogador (_player) ataca o monstro
        this._player.attack(fighterMonster);

        // Verifica se o monstro ainda tem pontos de vida após o ataque do jogador
        if (monster.lifePoints > 0) {
          // Se o monstro estiver vivo, ele contra-ataca o jogador (_player)
          monster.attack(this._player);
        }
      }
    });

    // Retorna o resultado da batalha chamando o método fight() da classe pai (Battle)
    return super.fight();
  }
}

export default PVE;