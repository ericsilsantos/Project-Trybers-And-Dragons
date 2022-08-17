import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _lutador: Fighter,
    private _monster: SimpleFighter[],
  ) {
    super(_lutador);
  }

  fight(): number {
    for (let i = this._monster.length - 1; i > 0; i -= 1) {
      while (this._lutador.lifePoints > 0 && this._monster[i].lifePoints > 0) {
        this._lutador.attack(this._monster[i]);
        this._monster[i].attack(this.player);
      }
    }
    if (this._lutador.lifePoints < 0) {
      return -1;
    }
    return 1;
  }
}

export default PVE;