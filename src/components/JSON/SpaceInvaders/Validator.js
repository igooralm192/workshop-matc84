let isIntegerUse = (val) => !val || Number.isInteger(val)
let isIntegerMessage = path => `${path} must be a integer.`

export default ({
    background: {
        color: {
            type: String,
        },
        starsColor: {
            type: String,
        },
        starsNumber: {
            type: Number,
            size: {min: 0, max: 100},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        }
    },
    invader: {
        amount: {
            type: Number,
            size: {min: 1, max: 50},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        },
        lives: {
            type: Number,
            size: {min: 1, max: 30},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        },
        speed: {
            type: Number,
            size: {min: 20, max: 200},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        },
        acceleration: {
            type: Number,
            required: false,
            size: {min: 0, max: 5},
        },
        bombColor: {
            type: String,
            required: false
        },
        bombRate: {
            type: Number,
            required: false,
            size: {min: 0.01, max: 1},
        }
    },
    ship: {
        width: {
            type: Number,
            size: {min: 5, max: 50},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        },
        height: {
            type: Number,
            size: {min: 5, max: 50},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        },
        speed: {
            type: Number,
            size: {min: 20, max: 300},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        },
        shootRate: {
            type: Number,
            size: {min: 0.1, max: 5},
        },
        rocketVelocity: {
            type: Number,
            size: {min: 10, max: 300},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        }
    },
    game: {
        lives: {
            type: Number,
            size: {min: 1, max: 10},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        },
        difficultyMultiplier: {
            type: Number,
            size: {min: 0.01, max: 1},
        },
        pointsPerInvader: {
            type: Number,
            size: {min: 1, max: 1e9},
            use: {isInteger: isIntegerUse},
            message: {isInteger: isIntegerMessage}
        }
    },
    start: {
        type: Boolean
    }   
})