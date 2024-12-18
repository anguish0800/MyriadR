const { combineStats, weaponArray, makeDeco } = require('../../facilitators.js')
const { base, statnames } = require('../../constants.js')
const g = require('../../gunvals.js')
//wave 2
Class.myriad_shield = {
  	PARENT: "genericTank",
  	LABEL: "Shield",
  	SHAPE: 'M 0 -2 Q 1 0 0 2 0.5 0 0 -2',
  	MIRROR_MASTER_ANGLE: true,
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 5,
              	WIDTH: 5,
              	X: 5,
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic]),
              	TYPE: "bullet"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 5,
              	WIDTH: 5,
              	X: 7,
              	Y: 5,
              	ANGLE: 22.5,
              	DELAY: 0.5
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic]),
              	TYPE: "bullet"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 5,
              	WIDTH: 5,
              	X: 7,
              	Y: -5,
              	ANGLE: -22.5,
              	DELAY: 0.5
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic]),
              	TYPE: "bullet"
            }
        }
    ]
}
