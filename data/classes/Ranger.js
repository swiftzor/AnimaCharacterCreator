var ranger = {
    "info" : {
        "description" : ""
    },
    "char_base": {
        "archetype": "Fighter, Prowler",
        "lpmult": 20,
        "lplvl" : 10,
        "initlvl" : 5,
        "mklvl" : 20,
        "inatepplvl" : 0.33
    },
    "primary": {
        "combat" : {
            "limit" : 60,
            "attack" : 2,
            "block" : 2,
            "dodge" : 2,
            "armor" : 2,
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
        "intelligence" : 3,
        "vigor" : 3,
        "subterfuge" : 2,
        "creative" : 2,
        "reduced" : {
            "int" : {
                "animals" : 1,
                "medicine" : 2,
                "herbalLore" : 2
            },
            "sub" : {
                "trapLore" : 1
            }
        }
    },
    "inate" : {
        "primary" : {
            "combat" : {
                "attack" : {
                    "bonus" : 5,
                    "max" : 50
                }
            }
        },
        "secondary" : {
            "perceptive" : {
                "notice" : 10,
                "search" : 10,
                "track" : 10
            },
            "subterfuge" : {
                "trapLore" : 5
            },
            "intelligence" : {
                "animals" : 5,
                "herbalLore" : 5
            }
        }
    }
}
