var weaponmaster = {
    "info" : {
        "description" : "These are Fighters who have dedicated themselves to perfecting their skill in armed conbat. They are born warriors who have taken their combat skills to limits not reached by any other class. Unlike many other Fighters, they disdain the use of anything but their abilities with weapons in combay. In a fight, they ignore physical energies and everything else except pure weapons skill. This does nothing to detract from their status as the most able of all Fighters and the most strictly devoted to true martial expertise. The great majority of knights and mercenaries are this class."
    },
    "char_base": {
        "archetype": "Fighter",
        "lpmult": 10,
        "lplvl" : 20,
        "initlvl" : 5,
        "mklvl" : 10,
        "inatepplvl" : 0.33
    },
    "primary": {
        "combat" : {
            "limit" : 60,
            "attack" : 2,
            "block" : 2,
            "dodge" : 2,
            "armor" : 1,
            "ki" : 3,
            "kiaccum" : 30
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
        "per" : 2,
        "int" : 3,
        "vig" : 1,
        "sub" : 3,
        "cre" : 2
    },
    "inate" : {
        "primary" : {
            "combat" : {
                "attack" : {
                    "bonus" : 5,
                    "max" : 50
                },
                "block" : {
                    "bonus" : 5,
                    "max" : 50
                },
                "armor" : {
                    "bonus" : 10
                }
            }
        },
        "secondary" : {
            "vig" : {
                "fos" : 5
            }
        }
    }
}
