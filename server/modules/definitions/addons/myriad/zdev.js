const { combineStats, makeAuto, makeTurret, makeOver, makeDeco, weaponArray, menu } = require('../../facilitators.js')
const { base, statnames } = require('../../constants.js')
const g = require('../../gunvals.js')

// menus
// important stuff
Class.myriad_dev = menu("Myriad Developer", "green")
Class.myriad_beta = menu("Myriad Beta Tester", "gray")
Class.myriad_shiny = menu("Myriad Shiny Member", "shiny")
// fun
Class.myriad_fun = menu("Fun", "green")

// tanks
// fun
Class.myriad_fucked_up_turret = makeTurret({
  	GUNS: [
      	{
          	POSITION: [16, 8, 1, 0, 0, 0, 0],
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0}]),
              	TYPE: "bullet"
            }
        }
    ]
})
Class.myriad_fucked_up_bullet = {
  	PARENT: "bullet",
  	BODY: {
      	RANGE: 180
    },
  	TURRETS: []
}
for (let i = 0; i < 8; i++) {
  	Class.myriad_fucked_up_bullet.TURRETS.push(
      	{
      			POSITION: [17 - (i * 1.5), 0, 0, 0, 180 * (i + 1), i + 1],
          	TYPE: ["myriad_fucked_up_turret", {INDEPENDENT: true}]
    		}
    )
}
Class.myriad_WTFITGprop = makeDeco(10)
Class.myriad_WTFITG = {
  	PARENT: "genericTank",
  	LABEL: "What The Fuck Is This Garbage",
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 20,
              	WIDTH: 14
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
              	TYPE: "myriad_fucked_up_bullet"
            }
        }
    ],
  	PROPS: [
      	{
          	POSITION: [10, 0, 0, 0, 1],
          	TYPE: "myriad_WTFITGprop"
        }
    ]
}
Class.myriad_omniBasicDeco = makeDeco(6, 0)
Class.myriad_omniBasicDeco2 = makeDeco(-3, 0)
Class.myriad_omniBasicDeco.FACING_TYPE = ["spin", {independent: true, speed: 0.25}]
Class.myriad_omniBasicDeco2.FACING_TYPE = ["spin", {independent: true, speed: -0.25}]
Class.myriad_omnipotentBasic = {
  	PARENT: "genericTank",
  	LABEL: "𝕺𝖒𝖓𝖎𝖕𝖔𝖙𝖊𝖓𝖙 𝕭𝖆𝖘𝖎𝖈",
  	DANGER: 10,
  	GUNS: [
      	{
          	POSITION: {},
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0.1}]),
              	TYPE: "bullet"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 0,
              	WIDTH: 26,
              	X: 10
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {health: 10**100, pen: 10**100, damage: 0.5, speed: 0, reload: 5, spray: 0, shudder: 0}]),
              	TYPE: ["bullet", {MOTION_TYPE: "fastgrow", ALPHA: 0.5}],
              	ALPHA: 0,
              	ALT_FIRE: true
            }
        }
    ],
  	TURRETS: [
      	{
          	POSITION: [10, 0, 0, 0, 0, 2],
          	TYPE: "myriad_omniBasicDeco"
        },
      	...weaponArray({
          	POSITION: [12, 0, 0, 0, 0, 1],
          	TYPE: "myriad_omniBasicDeco2"
        }, 2)
    ]
}
Class.myriad_0sc = {
  	PARENT: "sunchip",
  	NECRO: [0],
  	SHAPE: 0
}
Class.myriad_4sc = {
  	PARENT: "sunchip",
  	NECRO: [4, 0],
  	SHAPE: 3
}
Class.myriad_3sc = {
  	PARENT: "sunchip",
  	NECRO: [4, 3, 0],
  	SHAPE: 4
}
Class.myriad_5sc = {
  	PARENT: "sunchip",
  	NECRO: [5, 3, 4, 0],
  	SHAPE: 5
}
Class.myriad_6sc = {
  	PARENT: "sunchip",
  	NECRO: [6, 5, 3, 4, 0],
  	SHAPE: 6
}
Class.myriad_allInOne = {
  	PARENT: "genericTank",
  	LABEL: "All In One",
  	SHAPE: 5,
  	GUNS: [
      	// egg spawner
      	{
          	POSITION: {
              	LENGTH: 15,
              	WIDTH: 6,
              	ASPECT: 1.2,
              	ANGLE: 36 + (72 * 0)
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 0.9, damage: 0.8, pen: 0.8, health: 0.9}]),
              	TYPE: "myriad_0sc",
              	AUTOFIRE: true,
              	SYNCS_SKILLS: true,
              	STAT_CALCULATOR: 'necro',
              	WAIT_TO_CYCLE: true,
              	DELAY_SPAWN: false
            }
        },
      	// square spawner
      	{
          	POSITION: {
              	LENGTH: 15,
              	WIDTH: 6.5,
              	ASPECT: 1.2,
              	ANGLE: 36 + (72 * 1)
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 1.1, damage: 1.4, pen: 1.2, health: 1.5, size: 1.5}]),
              	TYPE: "myriad_4sc",
              	AUTOFIRE: true,
              	SYNCS_SKILLS: true,
              	STAT_CALCULATOR: 'necro',
              	WAIT_TO_CYCLE: true,
              	DELAY_SPAWN: false
            }
        },
      	// triangle spawner
      	{
          	POSITION: {
              	LENGTH: 15,
              	WIDTH: 7,
              	ASPECT: 1.2,
              	ANGLE: 36 + (72 * 2)
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 1.2, damage: 1.7, pen: 1.7, health: 1.75, size: 1.45}]),
              	TYPE: "myriad_3sc",
              	AUTOFIRE: true,
              	SYNCS_SKILLS: true,
              	STAT_CALCULATOR: 'necro',
              	WAIT_TO_CYCLE: true,
              	DELAY_SPAWN: false
            }
				},
      	// pentagon spawner
      	{
          	POSITION: {
              	LENGTH: 15,
              	WIDTH: 7.5,
              	ASPECT: 1.2,
              	ANGLE: 36 + (72 * 3)
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 1.4, damage: 2.3, pen: 2.2, health: 2.4, size: 2.2}]),
              	TYPE: "myriad_5sc",
              	AUTOFIRE: true,
              	SYNCS_SKILLS: true,
              	STAT_CALCULATOR: 'necro',
              	WAIT_TO_CYCLE: true,
              	DELAY_SPAWN: false
            }
				},
      	// hexagon spawner
      	{
          	POSITION: {
              	LENGTH: 15,
              	WIDTH: 8,
              	ASPECT: 1.2,
              	ANGLE: 36 + (72 * 4)
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 2, damage: 2.6, pen: 2.9, health: 3, size: 3}]),
              	TYPE: "myriad_6sc",
              	AUTOFIRE: true,
              	SYNCS_SKILLS: true,
              	STAT_CALCULATOR: 'necro',
              	WAIT_TO_CYCLE: true,
              	DELAY_SPAWN: false
            }
				}
    ]
}
Class.myriad_mageBulletExplosion = {
  	PARENT: "bullet",
  	SHAPE: 'M 0 1 A 1 1 0 0 1 0 -1 A 1 1 0 0 1 0 1 M 0 -1.4 A 1 1 0 0 0 0 1.4 A 1 1 0 0 0 0 -1.4'
}
Class.myriad_mageBullet = {
  	PARENT: "bullet",
  	SHAPE: 'M 0 -1 A 1 1 0 0 0 0 1 A 1 1 0 0 0 0 -1 M 0 0.8 L -0.8 0 L 0 -0.8 L 0.6 0 L 0 0.8',
  	INDEPENDENT: true,
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 0,
              	WIDTH: 26,
              	X: 10
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {speed: 0, shudder: 0, spray: 0, health: 2, damage: 1.5, pen: 20, range: 0.5}]),
              	TYPE: ["myriad_mageBulletExplosion", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "fastgrow"}],
              	SHOOT_ON_DEATH: true,
              	ALPHA: 0
            }
        }
    ]
}
Class.myriad_mage = {
  	PARENT: "genericTank",
  	LABEL: "Mage",
  	SHAPE: 4,
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 20,
              	WIDTH: 7
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {range: 0.8}]),
              	TYPE: "myriad_mageBullet"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 16,
              	WIDTH: 10,
              	ASPECT: -0.6
            }
        }
    ]
}

Class.developer.UPGRADES_TIER_0.push("myriad_dev")
		Class.myriad_dev.UPGRADES_TIER_0 = ["myriad_beta", "myriad_shiny", "myriad_fun"]
		Class.myriad_beta.UPGRADES_TIER_0 = ["myriad_shiny", "myriad_fun"]
		Class.myriad_shiny.UPGRADES_TIER_0 = ["myriad_fun"]
    		Class.myriad_fun.UPGRADES_TIER_0 = ["myriad_WTFITG", "myriad_omnipotentBasic", "myriad_allInOne", "myriad_mage"]