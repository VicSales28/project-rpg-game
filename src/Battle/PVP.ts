import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }
  
  fight(): number {
    // Continua a batalha enquanto ambos os jogadores têm pontos de vida maiores que zero
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      // O lutador _player1 ataca o lutador _player2
      this._player1.attack(this._player2);
  
      // Verifica se o lutador _player2 ainda tem pontos de vida após o ataque de _player1
      if (this._player2.lifePoints > 0) {
        // Se sim, o lutador _player2 contra-ataca o lutador _player1
        this._player2.attack(this._player1);
      }
    }
  
    // Retorna o veredito da batalha chamando o método fight() da classe pai (Battle)
    return super.fight();
  }
}

export default PVP;