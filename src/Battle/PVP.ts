import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private _lutador1: Fighter, private _lutador2: Fighter) {
    super(_lutador1);
  }

  fight(): number {
    while (this._lutador2.lifePoints > 0 && this._lutador1.lifePoints > 0) {
      this._lutador1.attack(this._lutador2);
      
      this._lutador2.attack(this._lutador1);
    }
    if (this._lutador2.lifePoints < 0) return 1;
    if (this._lutador1.lifePoints < 0) return -1;
    return 0;
  }
}

export default PVP;