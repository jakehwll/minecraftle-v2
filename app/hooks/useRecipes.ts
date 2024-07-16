export const RECIPES: {
  [key: string]: {
    type: string;
    group: string;
    output: string;
    input: Array<Array<string | null>>;
  };
} = {
  activator_rail: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:activator_rail",
    input: [
      ["minecraft:iron_ingot", "minecraft:stick", "minecraft:iron_ingot"],
      [
        "minecraft:iron_ingot",
        "minecraft:redstone_torch",
        "minecraft:iron_ingot",
      ],
      ["minecraft:iron_ingot", "minecraft:stick", "minecraft:iron_ingot"],
    ],
  },
  barrel: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:barrel",
    input: [
      ["minecraft:planks", "minecraft:oak_slab", "minecraft:planks"],
      ["minecraft:planks", null, "minecraft:planks"],
      ["minecraft:planks", "minecraft:oak_slab", "minecraft:planks"],
    ],
  },
  bow: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:bow",
    input: [
      [null, "minecraft:stick", "minecraft:string"],
      ["minecraft:stick", null, "minecraft:string"],
      [null, "minecraft:stick", "minecraft:string"],
    ],
  },
  bowl: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:bowl",
    input: [
      ["minecraft:planks", null, "minecraft:planks"],
      [null, "minecraft:planks", null],
    ],
  },
  bucket: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:bucket",
    input: [
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
      [null, "minecraft:iron_ingot", null],
    ],
  },
  campfire: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:campfire",
    input: [
      [null, "minecraft:stick", null],
      ["minecraft:stick", "minecraft:coal", "minecraft:stick"],
      ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
    ],
  },
  cauldron: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:cauldron",
    input: [
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    ],
  },
  chain: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:chain",
    input: [
      ["minecraft:iron_nugget"],
      ["minecraft:iron_ingot"],
      ["minecraft:iron_nugget"],
    ],
  },
  chest: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:chest",
    input: [
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", null, "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
    ],
  },
  clock: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:clock",
    input: [
      [null, "minecraft:gold_ingot", null],
      ["minecraft:gold_ingot", "minecraft:redstone", "minecraft:gold_ingot"],
      [null, "minecraft:gold_ingot", null],
    ],
  },
  coal_block: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:coal_block",
    input: [
      ["minecraft:coal", "minecraft:coal", "minecraft:coal"],
      ["minecraft:coal", "minecraft:coal", "minecraft:coal"],
      ["minecraft:coal", "minecraft:coal", "minecraft:coal"],
    ],
  },
  cobblestone_slab: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:cobblestone_slab",
    input: [
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
    ],
  },
  cobblestone_stairs: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:cobblestone_stairs",
    input: [
      ["minecraft:cobblestone", null, null],
      ["minecraft:cobblestone", "minecraft:cobblestone", null],
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
    ],
  },
  cobblestone_wall: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:cobblestone_wall",
    input: [
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
    ],
  },
  comparator: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:comparator",
    input: [
      [null, "minecraft:redstone_torch", null],
      [
        "minecraft:redstone_torch",
        "minecraft:quartz",
        "minecraft:redstone_torch",
      ],
      ["minecraft:stone", "minecraft:stone", "minecraft:stone"],
    ],
  },
  compass: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:compass",
    input: [
      [null, "minecraft:iron_ingot", null],
      ["minecraft:iron_ingot", "minecraft:redstone", "minecraft:iron_ingot"],
      [null, "minecraft:iron_ingot", null],
    ],
  },
  composter: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:composter",
    input: [
      ["minecraft:oak_slab", null, "minecraft:oak_slab"],
      ["minecraft:oak_slab", null, "minecraft:oak_slab"],
      ["minecraft:oak_slab", "minecraft:oak_slab", "minecraft:oak_slab"],
    ],
  },
  crafting_table: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:crafting_table",
    input: [
      ["minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks"],
    ],
  },
  daylight_detector: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:daylight_detector",
    input: [
      ["minecraft:glass", "minecraft:glass", "minecraft:glass"],
      ["minecraft:quartz", "minecraft:quartz", "minecraft:quartz"],
      ["minecraft:oak_slab", "minecraft:oak_slab", "minecraft:oak_slab"],
    ],
  },
  diamond_axe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_axe",
    input: [
      ["minecraft:diamond", "minecraft:diamond"],
      ["minecraft:diamond", "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  diamond_block: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_block",
    input: [
      ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
      ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
      ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
    ],
  },
  diamond_boots: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_boots",
    input: [
      ["minecraft:diamond", null, "minecraft:diamond"],
      ["minecraft:diamond", null, "minecraft:diamond"],
    ],
  },
  diamond_chestplate: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_chestplate",
    input: [
      ["minecraft:diamond", null, "minecraft:diamond"],
      ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
      ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
    ],
  },
  diamond_helmet: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_helmet",
    input: [
      ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
      ["minecraft:diamond", null, "minecraft:diamond"],
    ],
  },
  diamond_hoe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_hoe",
    input: [
      ["minecraft:diamond", "minecraft:diamond"],
      [null, "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  diamond_leggings: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_leggings",
    input: [
      ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
      ["minecraft:diamond", null, "minecraft:diamond"],
      ["minecraft:diamond", null, "minecraft:diamond"],
    ],
  },
  diamond_pickaxe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_pickaxe",
    input: [
      ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
      [null, "minecraft:stick", null],
      [null, "minecraft:stick", null],
    ],
  },
  diamond_shovel: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_shovel",
    input: [["minecraft:diamond"], ["minecraft:stick"], ["minecraft:stick"]],
  },
  diamond_sword: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diamond_sword",
    input: [["minecraft:diamond"], ["minecraft:diamond"], ["minecraft:stick"]],
  },
  diorite: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:diorite",
    input: [
      ["minecraft:cobblestone", "minecraft:quartz"],
      ["minecraft:quartz", "minecraft:cobblestone"],
    ],
  },
  dropper: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:dropper",
    input: [
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
      ["minecraft:cobblestone", null, "minecraft:cobblestone"],
      ["minecraft:cobblestone", "minecraft:redstone", "minecraft:cobblestone"],
    ],
  },
  fishing_rod: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:fishing_rod",
    input: [
      [null, null, "minecraft:stick"],
      [null, "minecraft:stick", "minecraft:string"],
      ["minecraft:stick", null, "minecraft:string"],
    ],
  },
  furnace: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:furnace",
    input: [
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
      ["minecraft:cobblestone", null, "minecraft:cobblestone"],
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
    ],
  },
  glass_bottle: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:glass_bottle",
    input: [
      ["minecraft:glass", null, "minecraft:glass"],
      [null, "minecraft:glass", null],
    ],
  },
  glass_pane: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:glass_pane",
    input: [
      ["minecraft:glass", "minecraft:glass", "minecraft:glass"],
      ["minecraft:glass", "minecraft:glass", "minecraft:glass"],
    ],
  },
  golden_axe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_axe",
    input: [
      ["minecraft:gold_ingot", "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  golden_boots: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_boots",
    input: [
      ["minecraft:gold_ingot", null, "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", null, "minecraft:gold_ingot"],
    ],
  },
  golden_chestplate: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_chestplate",
    input: [
      ["minecraft:gold_ingot", null, "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
    ],
  },
  golden_helmet: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_helmet",
    input: [
      ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", null, "minecraft:gold_ingot"],
    ],
  },
  golden_hoe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_hoe",
    input: [
      ["minecraft:gold_ingot", "minecraft:gold_ingot"],
      [null, "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  golden_leggings: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_leggings",
    input: [
      ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", null, "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", null, "minecraft:gold_ingot"],
    ],
  },
  golden_pickaxe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_pickaxe",
    input: [
      ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
      [null, "minecraft:stick", null],
      [null, "minecraft:stick", null],
    ],
  },
  golden_shovel: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_shovel",
    input: [["minecraft:gold_ingot"], ["minecraft:stick"], ["minecraft:stick"]],
  },
  golden_sword: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:golden_sword",
    input: [
      ["minecraft:gold_ingot"],
      ["minecraft:gold_ingot"],
      ["minecraft:stick"],
    ],
  },
  gold_block: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:gold_block",
    input: [
      ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
    ],
  },
  heavy_weighted_pressure_plate: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:heavy_weighted_pressure_plate",
    input: [["minecraft:iron_ingot", "minecraft:iron_ingot"]],
  },
  iron_axe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_axe",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  iron_bars: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_bars",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    ],
  },
  iron_block: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_block",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    ],
  },
  iron_boots: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_boots",
    input: [
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
    ],
  },
  iron_chestplate: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_chestplate",
    input: [
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    ],
  },
  iron_door: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_door",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot"],
    ],
  },
  iron_helmet: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_helmet",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
    ],
  },
  iron_hoe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_hoe",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot"],
      [null, "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  iron_ingot_from_nuggets: {
    type: "minecraft:crafting_shaped",
    group: "iron_ingot",
    output: "minecraft:iron_ingot",
    input: [
      [
        "minecraft:iron_nugget",
        "minecraft:iron_nugget",
        "minecraft:iron_nugget",
      ],
      [
        "minecraft:iron_nugget",
        "minecraft:iron_nugget",
        "minecraft:iron_nugget",
      ],
      [
        "minecraft:iron_nugget",
        "minecraft:iron_nugget",
        "minecraft:iron_nugget",
      ],
    ],
  },
  iron_leggings: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_leggings",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
    ],
  },
  iron_pickaxe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_pickaxe",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
      [null, "minecraft:stick", null],
      [null, "minecraft:stick", null],
    ],
  },
  iron_shovel: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_shovel",
    input: [["minecraft:iron_ingot"], ["minecraft:stick"], ["minecraft:stick"]],
  },
  iron_sword: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_sword",
    input: [
      ["minecraft:iron_ingot"],
      ["minecraft:iron_ingot"],
      ["minecraft:stick"],
    ],
  },
  iron_trapdoor: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:iron_trapdoor",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot"],
    ],
  },
  item_frame: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:item_frame",
    input: [
      ["minecraft:stick", "minecraft:stick", "minecraft:stick"],
      ["minecraft:stick", "minecraft:leather", "minecraft:stick"],
      ["minecraft:stick", "minecraft:stick", "minecraft:stick"],
    ],
  },
  jukebox: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:jukebox",
    input: [
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:diamond", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
    ],
  },
  ladder: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:ladder",
    input: [
      ["minecraft:stick", null, "minecraft:stick"],
      ["minecraft:stick", "minecraft:stick", "minecraft:stick"],
      ["minecraft:stick", null, "minecraft:stick"],
    ],
  },
  leather_boots: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:leather_boots",
    input: [
      ["minecraft:leather", null, "minecraft:leather"],
      ["minecraft:leather", null, "minecraft:leather"],
    ],
  },
  leather_chestplate: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:leather_chestplate",
    input: [
      ["minecraft:leather", null, "minecraft:leather"],
      ["minecraft:leather", "minecraft:leather", "minecraft:leather"],
      ["minecraft:leather", "minecraft:leather", "minecraft:leather"],
    ],
  },
  leather_helmet: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:leather_helmet",
    input: [
      ["minecraft:leather", "minecraft:leather", "minecraft:leather"],
      ["minecraft:leather", null, "minecraft:leather"],
    ],
  },
  leather_horse_armor: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:leather_horse_armor",
    input: [
      ["minecraft:leather", null, "minecraft:leather"],
      ["minecraft:leather", "minecraft:leather", "minecraft:leather"],
      ["minecraft:leather", null, "minecraft:leather"],
    ],
  },
  leather_leggings: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:leather_leggings",
    input: [
      ["minecraft:leather", "minecraft:leather", "minecraft:leather"],
      ["minecraft:leather", null, "minecraft:leather"],
      ["minecraft:leather", null, "minecraft:leather"],
    ],
  },
  lever: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:lever",
    input: [["minecraft:stick"], ["minecraft:cobblestone"]],
  },
  light_weighted_pressure_plate: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:light_weighted_pressure_plate",
    input: [["minecraft:gold_ingot", "minecraft:gold_ingot"]],
  },
  loom: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:loom",
    input: [
      ["minecraft:string", "minecraft:string"],
      ["minecraft:planks", "minecraft:planks"],
    ],
  },
  minecart: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:minecart",
    input: [
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    ],
  },
  note_block: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:note_block",
    input: [
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:redstone", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
    ],
  },
  oak_boat: {
    type: "minecraft:crafting_shaped",
    group: "boat",
    output: "minecraft:oak_boat",
    input: [
      ["minecraft:planks", null, "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
    ],
  },
  oak_door: {
    type: "minecraft:crafting_shaped",
    group: "wooden_door",
    output: "minecraft:oak_door",
    input: [
      ["minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks"],
    ],
  },
  oak_fence: {
    type: "minecraft:crafting_shaped",
    group: "wooden_fence",
    output: "minecraft:oak_fence",
    input: [
      ["minecraft:planks", "minecraft:stick", "minecraft:planks"],
      ["minecraft:planks", "minecraft:stick", "minecraft:planks"],
    ],
  },
  oak_fence_gate: {
    type: "minecraft:crafting_shaped",
    group: "wooden_fence_gate",
    output: "minecraft:oak_fence_gate",
    input: [
      ["minecraft:stick", "minecraft:planks", "minecraft:stick"],
      ["minecraft:stick", "minecraft:planks", "minecraft:stick"],
    ],
  },
  oak_pressure_plate: {
    type: "minecraft:crafting_shaped",
    group: "wooden_pressure_plate",
    output: "minecraft:oak_pressure_plate",
    input: [["minecraft:planks", "minecraft:planks"]],
  },
  oak_sign: {
    type: "minecraft:crafting_shaped",
    group: "wooden_sign",
    output: "minecraft:oak_sign",
    input: [
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      [null, "minecraft:stick", null],
    ],
  },
  oak_slab: {
    type: "minecraft:crafting_shaped",
    group: "wooden_slab",
    output: "minecraft:oak_slab",
    input: [["minecraft:planks", "minecraft:planks", "minecraft:planks"]],
  },
  oak_stairs: {
    type: "minecraft:crafting_shaped",
    group: "wooden_stairs",
    output: "minecraft:oak_stairs",
    input: [
      ["minecraft:planks", null, null],
      ["minecraft:planks", "minecraft:planks", null],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
    ],
  },
  oak_trapdoor: {
    type: "minecraft:crafting_shaped",
    group: "wooden_trapdoor",
    output: "minecraft:oak_trapdoor",
    input: [
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
    ],
  },
  oak_wood: {
    type: "minecraft:crafting_shaped",
    group: "bark",
    output: "minecraft:oak_wood",
    input: [
      ["minecraft:oak_log", "minecraft:oak_log"],
      ["minecraft:oak_log", "minecraft:oak_log"],
    ],
  },
  observer: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:observer",
    input: [
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
      ["minecraft:redstone", "minecraft:redstone", "minecraft:quartz"],
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
    ],
  },
  painting: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:painting",
    input: [
      ["minecraft:stick", "minecraft:stick", "minecraft:stick"],
      ["minecraft:stick", "minecraft:white_wool", "minecraft:stick"],
      ["minecraft:stick", "minecraft:stick", "minecraft:stick"],
    ],
  },
  piston: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:piston",
    input: [
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      [
        "minecraft:cobblestone",
        "minecraft:iron_ingot",
        "minecraft:cobblestone",
      ],
      ["minecraft:cobblestone", "minecraft:redstone", "minecraft:cobblestone"],
    ],
  },
  powered_rail: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:powered_rail",
    input: [
      ["minecraft:gold_ingot", null, "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", "minecraft:stick", "minecraft:gold_ingot"],
      ["minecraft:gold_ingot", "minecraft:redstone", "minecraft:gold_ingot"],
    ],
  },
  quartz_block: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:quartz_block",
    input: [
      ["minecraft:quartz", "minecraft:quartz"],
      ["minecraft:quartz", "minecraft:quartz"],
    ],
  },
  rail: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:rail",
    input: [
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "minecraft:stick", "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", null, "minecraft:iron_ingot"],
    ],
  },
  redstone_block: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:redstone_block",
    input: [
      ["minecraft:redstone", "minecraft:redstone", "minecraft:redstone"],
      ["minecraft:redstone", "minecraft:redstone", "minecraft:redstone"],
      ["minecraft:redstone", "minecraft:redstone", "minecraft:redstone"],
    ],
  },
  redstone_torch: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:redstone_torch",
    input: [["minecraft:redstone"], ["minecraft:stick"]],
  },
  repeater: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:repeater",
    input: [
      [
        "minecraft:redstone_torch",
        "minecraft:redstone",
        "minecraft:redstone_torch",
      ],
      ["minecraft:stone", "minecraft:stone", "minecraft:stone"],
    ],
  },
  shears: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:shears",
    input: [
      [null, "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", null],
    ],
  },
  shield: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:shield",
    input: [
      ["minecraft:planks", "minecraft:iron_ingot", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      [null, "minecraft:planks", null],
    ],
  },
  smithing_table: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:smithing_table",
    input: [
      ["minecraft:iron_ingot", "minecraft:iron_ingot"],
      ["minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:planks"],
    ],
  },
  stick: {
    type: "minecraft:crafting_shaped",
    group: "sticks",
    output: "minecraft:stick",
    input: [["minecraft:planks"], ["minecraft:planks"]],
  },
  stonecutter: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stonecutter",
    input: [
      [null, "minecraft:iron_ingot", null],
      ["minecraft:stone", "minecraft:stone", "minecraft:stone"],
    ],
  },
  stone_axe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_axe",
    input: [
      ["minecraft:cobblestone", "minecraft:cobblestone"],
      ["minecraft:cobblestone", "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  stone_bricks: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_bricks",
    input: [
      ["minecraft:stone", "minecraft:stone"],
      ["minecraft:stone", "minecraft:stone"],
    ],
  },
  stone_hoe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_hoe",
    input: [
      ["minecraft:cobblestone", "minecraft:cobblestone"],
      [null, "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  stone_pickaxe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_pickaxe",
    input: [
      [
        "minecraft:cobblestone",
        "minecraft:cobblestone",
        "minecraft:cobblestone",
      ],
      [null, "minecraft:stick", null],
      [null, "minecraft:stick", null],
    ],
  },
  stone_pressure_plate: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_pressure_plate",
    input: [["minecraft:stone", "minecraft:stone"]],
  },
  stone_shovel: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_shovel",
    input: [
      ["minecraft:cobblestone"],
      ["minecraft:stick"],
      ["minecraft:stick"],
    ],
  },
  stone_slab: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_slab",
    input: [["minecraft:stone", "minecraft:stone", "minecraft:stone"]],
  },
  stone_stairs: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_stairs",
    input: [
      ["minecraft:stone", null, null],
      ["minecraft:stone", "minecraft:stone", null],
      ["minecraft:stone", "minecraft:stone", "minecraft:stone"],
    ],
  },
  stone_sword: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:stone_sword",
    input: [
      ["minecraft:cobblestone"],
      ["minecraft:cobblestone"],
      ["minecraft:stick"],
    ],
  },
  torch: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:torch",
    input: [["minecraft:coal"], ["minecraft:stick"]],
  },
  tripwire_hook: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:tripwire_hook",
    input: [
      ["minecraft:iron_ingot"],
      ["minecraft:stick"],
      ["minecraft:planks"],
    ],
  },
  white_banner: {
    type: "minecraft:crafting_shaped",
    group: "banner",
    output: "minecraft:white_banner",
    input: [
      ["minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool"],
      ["minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool"],
      [null, "minecraft:stick", null],
    ],
  },
  white_bed: {
    type: "minecraft:crafting_shaped",
    group: "bed",
    output: "minecraft:white_bed",
    input: [
      ["minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool"],
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
    ],
  },
  white_carpet: {
    type: "minecraft:crafting_shaped",
    group: "carpet",
    output: "minecraft:white_carpet",
    input: [["minecraft:white_wool", "minecraft:white_wool"]],
  },
  white_wool_from_string: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:white_wool",
    input: [
      ["minecraft:string", "minecraft:string"],
      ["minecraft:string", "minecraft:string"],
    ],
  },
  wooden_axe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:wooden_axe",
    input: [
      ["minecraft:planks", "minecraft:planks"],
      ["minecraft:planks", "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  wooden_hoe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:wooden_hoe",
    input: [
      ["minecraft:planks", "minecraft:planks"],
      [null, "minecraft:stick"],
      [null, "minecraft:stick"],
    ],
  },
  wooden_pickaxe: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:wooden_pickaxe",
    input: [
      ["minecraft:planks", "minecraft:planks", "minecraft:planks"],
      [null, "minecraft:stick", null],
      [null, "minecraft:stick", null],
    ],
  },
  wooden_shovel: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:wooden_shovel",
    input: [["minecraft:planks"], ["minecraft:stick"], ["minecraft:stick"]],
  },
  wooden_sword: {
    type: "minecraft:crafting_shaped",
    group: "",
    output: "minecraft:wooden_sword",
    input: [["minecraft:planks"], ["minecraft:planks"], ["minecraft:stick"]],
  },
};