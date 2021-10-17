import { Ability, Pet, Trigger } from "..";

function beetleAbility(level: number): Ability {
  return {
    description: `Eat shop food: Give shop animals +${level} health`,
    trigger: Trigger.EatsShopFood,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      healthAmount: level,
      target: {
        kind: "EachShopAnimal",
      },
      untilEndOfBattle: false,
    },
  };
}

export const beetle = {
  name: "Beetle",
  tier: 1,
  baseAttack: 2,
  baseHealth: 3,
  packs: ["ExpansionPack1"],
  level1Ability: beetleAbility(1),
  level2Ability: beetleAbility(2),
  level3Ability: beetleAbility(3),
} as Pet;