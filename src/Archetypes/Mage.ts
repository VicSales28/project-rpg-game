import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _typeEnergy: EnergyType;
  static _count = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Mage._count += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._count;
  }

  get energyType(): EnergyType {
    return this._typeEnergy;
  }
}

export default Mage;