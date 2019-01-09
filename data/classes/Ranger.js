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
        "ath" : 2,
        "soc" : 2,
        "per" : 1,
        "int" : 3,
        "vig" : 3,
        "sub" : 2,
        "cre" : 2,
        "reduced" : {
            "int" : {
                "anim" : 1,
                "medi" : 2,
                "herb" : 2
            },
            "sub" : {
                "trap" : 1
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
            "per" : {
                "noti" : 10,
                "sech" : 10,
                "trak" : 10
            },
            "sub" : {
                "trap" : 5
            },
            "int" : {
                "anim" : 5,
                "herb" : 5
            }
        }
    }
}
