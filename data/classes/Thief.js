var thief = {
    "info" : {
        "description" : ""
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
        "ath" : 1,
        "soc" : 2,
        "per" : 2,
        "int" : 3,
        "vig" : 3,
        "sub" : 1,
        "cre" : 2,
        "reduced" : {
            "int" : {
                "apra" : 1
            }
        }
    },
    "inate" : {
        "primary" : {
            "combat" : {
                "dodge" : {
                    "bonus" : 5,
                    "max" : 50
                }
            }
        },
        "secondary" : {
            "per" : {
                "noti" : 5,
                "sech" : 5
            },
            "sub" : {
                "hide" : 5,
                "stel" : 5,
                "trap" : 5,
                "thef" : 10
            },
            "cre" : {
                "sloh" : 5
            }
        }
    }
}
