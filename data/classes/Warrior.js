var warrior = {
    "info" : {
        "description" : "The Warrior is the virtual embodiment of the Fighter Archetype. This class covers those who have completely dedicated their lives to combat, and it includes those who are best able to fully exploit their warlike talents. this inclination leads them not only to master the use of weapons, but also to use their spiritual energy in a fight.  Warriors find it easy to develop great knowledge in the field of military tactics and become leaders of armies.  Traditionally, Warriors can end up in a wide variety of occupations, from mere mercenaries to sworn knights."
    },
    "char_base": {
        "archetype": "Fighter",
        "lpmult": 15,
        "lplvl" : 15,
        "initlvl" : 5,
        "mklvl" : 25,
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
            "kiaccum" : 20
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
        "vig" : 2,
        "sub" : 2,
        "cre" : 2,
        "reduced" : {
            "vig" : {
                "fos" : 1
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
                "block" : {
                    "bonus" : 5,
                    "max" : 50
                },
                "armor" : {
                    "bonus" : 5
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
