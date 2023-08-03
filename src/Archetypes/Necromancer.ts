import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _typeEnergy: EnergyType;
  static _count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Necromancer._count += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._count;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }
}

export default Necromancer;