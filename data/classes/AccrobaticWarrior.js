var accroWar = {
    "info" : {
        "description" : "Accrobatic Warriors are Fighters who have specialized in getting the biggest advantage out of their speed and agility. Their greatest benefit lies in being a step ahead of their adversaries and trying to finish them off before tehy can react. They also prefer to dodge attacks, often standing as far as possible from where their enemy's blows actually land. They possess excellent mobility, and they can jump, fall, or run with a fleetness that few can match. Acrobatic Warriors can play almost any role in society, but they generally gravitate toward professions associated with combat - such as duelists or swordsmen."
    },
    "char_base": {
        "archetype": "Fighter",
        "lpmult": 20,
        "lplvl" : 10,
        "initlvl" : 10,
        "mklvl" : 25,
        "inatepplvl" : 0.33
    },
    "primary": {
        "combat" : {
            "limit" : 60,
            "attack" : 2,
            "block" : 3,
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
        "cre" : 2
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
            "ath" : {
                "acro" : 10,
                "jump" : 10,
                "athl" : 10
            },
            "soc" : {
                "style" : 10
            },
            "cre" : {
                "sloh" : 10
            }
        }
    }
}
