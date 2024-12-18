const { combineStats, weaponArray, makeDeco, makeTurret } = require('../../facilitators.js')
const { base, statnames } = require('../../constants.js')
const g = require('../../gunvals.js')

// wave based
Class.myriad_ascBosstype = {
  	PARENT: "miniboss",
  	LABEL: "Ascendent",
  	BODY: {
      	FOV: 1.2 * base.FOV,
      	HEALTH: 1.6 * base.HEALTH,
      	SPEED: 0.8 * base.SPEED,
      	DAMAGE: 1.1 * base.DAMAGE
    },
  	SIZE: 48,
  	COLOR: 3,
  	SHAPE: 6
}
Class.myriad_multiTurret = makeTurret("myriad_multiplier")
Class.myriad_multiBoss = {
  	PARENT: "myriad_ascBosstype",
  	GUNS: weaponArray([
      	{
      			POSITION: {
          			LENGTH: 18,
              	WIDTH: 8
        		},
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 1.2, reload: 1.4}]),
              	TYPE: "myriad_multiBullet"
            }
    		},
      	{
          	POSITION: {
              	LENGTH: 12.5,
              	WIDTH: 5
            },
          	PROPERTIES: {
              	COLOR: 12
            }
        },
    ], 6, 1/3),
  	TURRETS: weaponArray(
      	{
          	POSITION: [5, 7.5, 0, 30, 90, 1],
          	TYPE: "myriad_multiTurret"
        }, 6
    )
}
// my buds
Class.myriad_IEtrapTurret = makeTurret({
  	COLOR: "#badbed",
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 17.5,
              	WIDTH: 7
            }
        },
      	{
          	POSITION: {
              	LENGTH: 3,
              	WIDTH: 7,
              	ASPECT: 1.7,
              	X: 17.5
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.trap, {reload: 0.8}]),
              	TYPE: "trap",
              	STAT_CALCULATOR: "trap"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 15,
              	WIDTH: 10,
              	ASPECT: 1.2
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, {reload: 0.9}]),
              	TYPE: "bullet"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 13,
              	WIDTH: 12,
              	ASPECT: 1.15,
              	DELAY: 0.5
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, {reload: 1.2, spray: 1.3}]),
              	TYPE: "bullet"
            }
        }
    ]
})
Class.myriad_IEshotgunTurret = makeTurret("shotgun")
Class.myriad_IEshotgunTurret.COLOR = "#badbed"
Class.myriad_IEoctoTurret = {
  	PARENT: "genericTank",
  	COLOR: "#badbed",
  	FACING_TYPE: ["spin", {speed: 0.3}],
  	GUNS: weaponArray({
      	POSITION: {
          	LENGTH: 14
        },
      	PROPERTIES: {
          	SHOOT_SETTINGS: combineStats([g.basic]),
          	TYPE: "bullet",
          	AUTOFIRE: true
        }
    }, 8, 1/4)
}
Class.myriad_iceElite = {
  	PARENT: "arras_genericElite",
  	COLOR: "#badbed",
  	LABEL: "Ice Elite",
  	DANGER: 10,
  	TURRETS: [
      	...weaponArray(
          	{
              	POSITION: [10, 5.5, 0, 60, 170, 0],
              	TYPE: ["myriad_IEtrapTurret", {COLOR: "#badbed"}]
            }, 3
        ),
      	{
          	POSITION: [15, 0, 0, 0, 360, 1],
          	TYPE: "myriad_IEshotgunTurret"
        },
      	{
          	POSITION: [12, 0, 0, 0, 360, 2],
          	TYPE: "myriad_IEoctoTurret"
        }
    ]
}
Class.developer.UPGRADES_TIER_0.push("myriad_multiBoss", "myriad_iceElite")