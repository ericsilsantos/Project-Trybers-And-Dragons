import Race from './Race';

class Halfling extends Race {
  static instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 60;
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.instances;
  }
}

export default Halfling;