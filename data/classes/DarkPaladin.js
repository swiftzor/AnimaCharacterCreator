var darkPaladin = {
    "info" : {
        "description" : "In some ways, this calss is the polar oppostie of the Paladin. Dark Paldins are Fighters who specialize in offense, but who also use some limited mystical abilities. A Dark Paladin's most important power is the control of supernatural beings who, once they submit to his will, are used to his own benefit. Dark Paladins have a real gift for command, but they employ intimidation and fear to bend others to their wishes. If that doesn't work they will use persuasion to get what they want."
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
            "control" : 1,
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
        "soc" : 1,
        "per" : 2,
        "int" : 2,
        "vig" : 2,
        "sub" : 2,
        "cre" : 2,
        "reduced" : {
            "vig" : {
                "comp" : 1
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
                "armor" : {
                    "bonus" : 5
                }
            }
        },
        "secondary" : {
            "soc" : {
                "intm" : 10,
                "style" : 5,
                "pers" : 5
            },"vig" : {
                "comp" : 10
            }
        },
        "toggle" :{
            "one" : {
                "primary" : {
                    "magic" : {
                        "zeon" : {
                            "bonus" : 20
                        },
                        "control" : {
                            "bonus" : 10
                        }
                    }
                }
            },
            "two" : {
                "secondary" : {
                    "vig" : {
                        "witp" : 10
                    }
                }
            }
        }
    }
}
