import { Ability, Trigger, Pet } from "..";
import { getPetIdentifiers } from "../database";

function mosquitoAbility(level: number): Ability {
  return {
    description: `Start of battle: Deal ${level} damage to a random enemy`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "None",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "RandomEnemy",
        n: 1,
      },
      amount: level,
    },
  };
}

export const mosquito: Pet = {
  ...getPetIdentifiers("Mosquito"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F99F}",
  },
  tier: 1,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: mosquitoAbility(1),
  level2Ability: mosquitoAbility(2),
  level3Ability: mosquitoAbility(3),
};