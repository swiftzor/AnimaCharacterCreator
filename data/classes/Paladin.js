var paladin = {
    "info" : {
        "description" : "Paldins are fighters who are very oriented toward defensive fighting, and also make use of certain mystical capabilities. One of their specialties is that of banishing supernatural beings using their own natural powers. Generally, they guide themselves by codes of conduct based on a religious belief or their own sense of honor - though this is not obligatory. They are natuaral leaders, capable of using their charisma to mobilize a great number of people who may even be willing to give their lives in their service."
    },
    "char_base": {
        "archetype": "Fighter",
        "lpmult": 15,
        "lplvl" : 15,
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
            "kiaccum" : 20
        },
        "magic" : {
            "limit" : 50,
            "5zeon" : 2,
            "mamult" : 60,
            "proj" : 3,
            "summon" : 3,
            "control" : 3,
            "bind" : 3,
            "banish" : 1
        },
        "psychic" : {
            "limit" : 50,
            "point" : 20,
            "proj" : 3            
        }
    },
    "secondary" : {
        "ath" : 2,
        "soc" : 1,
        "per" : 2,
        "int" : 2,
        "vig" : 2,
        "sub" : 3,
        "cre" : 2,
        "reduced" : {
            "vig" : {
                "witp" : 1
            }
        }
    },
    "inate" : {
        "primary" : {
            "combat" : {
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
            "soc" : {
                "lead" : 10,
                "style" : 10
            },"vig" : {
                "witp" : 10
            }
        },
        "toggle" :{
            "one" : {
                "primary" : {
                    "magic" : {
                        "zeon" : {
                            "bonus" : 20
                        },
                        "banish" : {
                            "bonus" : 10
                        }
                    }
                }
            },
            "two" : {
                "secondary" : {
                    "vig" : {
                        "comp" : 10
                    }
                }
            }
        }
    }
}
