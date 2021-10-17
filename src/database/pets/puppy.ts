import { Ability, Trigger, Pet } from "..";

function puppyAbility(level: number): Ability {
  return {
    description: `End turn: If you have 2 or more gold, gain +${level * 2}/+${
      level * 2
    }`,
    trigger: Trigger.EndOfTurnWith2PlusGold,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "Self",
      },
      attackAmount: level * 2,
      healthAmount: level * 2,
      untilEndOfBattle: false,
    },
  };
}

export const puppy = {
  name: "Puppy",
  tier: 3,
  baseAttack: 1,
  baseHealth: 1,
  packs: ["ExpansionPack1"],
  level1Ability: puppyAbility(1),
  level2Ability: puppyAbility(2),
  level3Ability: puppyAbility(3),
} as Pet;
