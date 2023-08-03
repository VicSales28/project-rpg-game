import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _typeEnergy: EnergyType;
  static _count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'stamina';
    Warrior._count += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._count;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }
}

export default Warrior;