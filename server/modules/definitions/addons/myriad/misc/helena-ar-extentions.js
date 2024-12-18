// few ar tanks that ill give to helena cause im so niec

const { combineStats, makeAuto, weaponArray } = require("../../../facilitators.js")
const { base, statnames } = require("../../../constants.js")
const g = require("../../../gunvals.js")

// single brach

const makeSingleGun = ({ length = 0, width = 0, aspect = 0, x = 0, y = 0, angle = 0, delay = 0, stats = 0, enableDeco = true, bullet = ""}) => {
  	let guhs = []
    guhs.push(
      	{
          	POSITION: [19 + length, 8 + width, 1 + aspect, x, y, angle, delay],
          	POSITION: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.stats, ...stats]),
              	TYPE: bullet
            }
        }
    )
  	if (bullet === "drone") {
      	guhs[0].PROPERTIES.SHOOT_SETTINGS.splice(0, 1, g.drone)
      	guhs[0].PROPERTIES.AUTOFIRE = true
      	guhs[0].PROPERTIES.SYNCS_SKILLS = true
      	guhs[0].PROPERTIES.STAT_CALCULATOR = "drones"
      	guhs[0].PROPERTIES.MAX_CHILDREN = 6
      	guhs[0].PROPERTIES.WAIT_TO_CYCLE = true
    }
  	if (bullet === "trap")
  	if (enableDeco) {
      	guhs.push(
          	{
              	POSITION: [5.5, 8 + width, -1.8, 6.5, y, angle, 0]
            }
        )
    }
  	return guhs
}