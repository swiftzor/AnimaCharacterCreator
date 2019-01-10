var assassian = {
    "info" : {
        "description" : "Assassians are characters who specialize in subterfuge and intrigue. They move in anonymity and prefer that their victims die not knowing who killed them. The use very refined techniques that help them avoid open combat, as they are very vulnerable in direct confrontations. When their work is done they face once again into the shadows. Of course, characters from this class are not necessarily obligated to perform the roll of hitmen within a society. There are many other ways that their special abilities can be useful - such as in espionage."
    },
    "char_base": {
        "archetype": "Prowler",
        "lpmult": 20,
        "lplvl" : 5,
        "initlvl" : 10,
        "mklvl" : 20,
        "inatepplvl" : 0.33
    },
    "primary": {
        "combat" : {
            "limit" : 50,
            "attack" : 2,
            "block" : 3,
            "dodge" : 2,
            "armor" : 3,
            "ki" : 2,
            "kiaccum" : 25
        },
        "magic" : {
            "limit" : 50,
            "5zeon" : 3,
            "mamult" : 70,
            "proj" : 3,
            "summon" : 3,
            "control" : 3,
            "bind" : 3,
            "banish" : 3
        },
        "psychic" : {
            "limit" : 50,
            "point" : 20,
            "proj" : 3            
        }
    },
    "secondary" : {
        "athletics" : 2,
        "social" : 2,
        "perceptive" : 1,
        "intellectual" : 3,
        "vigor" : 3,
        "subterfuge" : 2,
        "creative" : 2,
		"reduced" : {
			"intellectual": {
				"memorize": 2
			},
			"vigor": {
				"composure": 2
			},
			"subterfuge": {
				"stealth": 1
			}
		}
    },
    "inate" : {
        "primary" : {
            "combat" : {
                "attack" : {
                    "bonus" : 5,
                    "max" : 50
                },
                "dodge" : {
                    "bonus" : 5,
                    "max" : 50
                }
            }
        },
        "secondary" : {
			"perceptive": {
				"notice": 10,
				"search": 10
			}
            "vigor" : {
                "composure" : 10
            },
			"subterfuge": {
				"hide": 10,
				"stealth": 10,
				"trapLore": 10,
				"poisons": 10
			}
        }
    }
}
