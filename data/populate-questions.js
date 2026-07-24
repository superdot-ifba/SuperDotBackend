db.sourcequestionsgroups.drop();
db.sourcequestionsgroups.insertMany(EJSON.deserialize(
    [{
        "_id": {
          "$oid": "64da2422c99ce2f9b2b3395e"
        },
        "source": 0,
        "groups": [
          {
            "groupName": "Características Gerais",
            "questions": [
              {
                "statement": "5 - Com quantos anos você começou a ler (Não só o seu nome, mas frases)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "3 anos ou menos",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a101"
                    }
                  },
                  {
                    "value": "4 anos",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a102"
                    }
                  },
                  {
                    "value": "5 anos",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a103"
                    }
                  },
                  {
                    "value": "6 anos",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a104"
                    }
                  },
                  {
                    "value": "7 anos ou mais",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a105"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a29e"
                }
              },
              {
                "statement": "6 - Lê por seu próprio interesse? Quantas horas/semana?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Não leio",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a107"
                    }
                  },
                  {
                    "value": "Sim, entre 1 e 2 horas",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a108"
                    }
                  },
                  {
                    "value": "Sim, entre 2 e 4 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a109"
                    }
                  },
                  {
                    "value": "Sim, entre 4 e 6 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a10a"
                    }
                  },
                  {
                    "value": "Sim, mais de 6 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a10b"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a29f"
                }
              },
              {
                "statement": "7.1 - Sobre quais assuntos mais gosta de conversar? (Informe 4 opções por favor)",
                "questionType": 1,
                "required": true,
                "options": [],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a0"
                }
              },
              {
                "statement": "7.2 - Sobre quais assuntos mais gosta de estudar? (Informe 4 opções por favor)",
                "questionType": 1,
                "required": true,
                "options": [],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a1"
                }
              },
              {
                "statement": "7.3 - Quais as atividades que mais gosta de fazer? (Informe 4 opções por favor)",
                "questionType": 1,
                "required": true,
                "options": [],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a2"
                }
              },
              {
                "statement": "8 - Que idade têm seus/suas 4 melhores amigos(a)s?",
                "questionType": 1,
                "required": true,
                "options": [],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a3"
                }
              },
              {
                "statement": "9.1 - Em quais áreas você era ou é um/uma dos/das melhores da sua turma? Indique as 4 primeiras, por ordem de importância",
                "questionType": 4,
                "required": true,
                "options": [
                  {
                    "value": "Memória",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a111"
                    }
                  },
                  {
                    "value": "Dança",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a112"
                    }
                  },
                  {
                    "value": "História",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a113"
                    }
                  },
                  {
                    "value": "Química",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a114"
                    }
                  },
                  {
                    "value": "Física",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a115"
                    }
                  },
                  {
                    "value": "Pintura",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a116"
                    }
                  },
                  {
                    "value": "Biologia",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a117"
                    }
                  },
                  {
                    "value": "Esportes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a118"
                    }
                  },
                  {
                    "value": "Astronomia",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a119"
                    }
                  },
                  {
                    "value": "Liderança",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a11a"
                    }
                  },
                  {
                    "value": "Música",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a11b"
                    }
                  },
                  {
                    "value": "Criatividade",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a11c"
                    }
                  },
                  {
                    "value": "Cinema",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a11d"
                    }
                  },
                  {
                    "value": "Observação",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a11e"
                    }
                  },
                  {
                    "value": "Matemática",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a11f"
                    }
                  },
                  {
                    "value": "Abstração",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a120"
                    }
                  },
                  {
                    "value": "Comunicação",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a121"
                    }
                  },
                  {
                    "value": "Português",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a122"
                    }
                  },
                  {
                    "value": "Planejamento",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a123"
                    }
                  },
                  {
                    "value": "Fotografia",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a124"
                    }
                  },
                  {
                    "value": "Geografia",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a125"
                    }
                  },
                  {
                    "value": "Línguas estrangeiras",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a126"
                    }
                  },
                  {
                    "value": "Escultura",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a127"
                    }
                  },
                  {
                    "value": "Política",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a128"
                    }
                  },
                  {
                    "value": "Mitologia",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a129"
                    }
                  },
                  {
                    "value": "Arqueologia",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a12a"
                    }
                  },
                  {
                    "value": "Outro",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a12b"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a4"
                }
              },
              {
                "statement": "9.2 - Caso tenha seleciona OUTRO na questão 9.1. Por favor informe abaixo a categoria",
                "questionType": 0,
                "parentQuestion": {
                  "parentId": {
                    "$oid": "6501dff1380f8339c3d1a2a4"
                  },
                  "isRequiredOnParentValue": "Outro"
                },
                "options": [],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a5"
                }
              },
              {
                "statement": "10 - Sente-se deslocado(a) ou percebe-se diferente das demais pessoas no pensar, sentir ou agir?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a12e"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a12f"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a130"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a131"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a132"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a6"
                }
              },
              {
                "statement": "11 - Prefere trabalhar/estudar/treinar/praticar sozinho(a)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a134"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a135"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a136"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a137"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a138"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a7"
                }
              },
              {
                "statement": "12 - Quando criança você preferia ler livros mais difíceis, ou enciclopédias, biografias ou atlas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a13a"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a13b"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a13c"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a13d"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a13e"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a8"
                }
              },
              {
                "statement": "13 - É independente na sua forma de pensar e agir?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a140"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a141"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a142"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a143"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a144"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2a9"
                }
              },
              {
                "statement": "14 - Tem senso de humor e às vezes encontra humor em stuações que não são humorísticas para os demais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a146"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a147"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a148"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a149"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a14a"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2aa"
                }
              },
              {
                "statement": "15 - Preocupa-se muito com questões éticas, morais, sociais, políticas ou ambientais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a14c"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a14d"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a14e"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a14f"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a150"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2ab"
                }
              },
              {
                "statement": "16 - É perfeccionista?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a152"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a153"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a154"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a155"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a156"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2ac"
                }
              },
              {
                "statement": "17 - É mais observador(a) que as demais pessoas, percebendo coisas que os demais não percebem?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a158"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a159"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a15a"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a15b"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a15c"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2ad"
                }
              },
              {
                "statement": "18 - Gosta e prefere jogar xadrez ou jogos que exijam estratégia?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a15e"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a15f"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a160"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a161"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a162"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2ae"
                }
              },
              {
                "statement": "19 - Tem princípios éticos e morais próprios que aplica a todas suas ações e pensamentos?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a164"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a165"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a166"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a167"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a168"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2af"
                }
              },
              {
                "statement": "20 - Considera seu conceito de amizade ou seu(s) amigo(s) diferentes ao das demais pessoas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a16a"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a16b"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a16c"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a16d"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a16e"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b0"
                }
              },
              {
                "statement": "21 - É intolerante com pessoas ou atitudes que você não considera corretas ou adequadas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a170"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a171"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a172"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a173"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a174"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b1"
                }
              },
              {
                "statement": "22 - Quando criança preferia ter amigos mais velhos e/ou mais novos que você a amigos da sua idade?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a176"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a177"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a178"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a179"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a17a"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b2"
                }
              }
            ],
            "sequence": 0
          },
          {
            "questions": [
              {
                "statement": "23 - Tem memória muito destacada, especialmente em assuntos que lhe interessam, comparado a outras pessoas de sua idade?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a17d"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a17e"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a17f"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a180"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a181"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b3"
                }
              },
              {
                "statement": "24 - Tem muitas informações sobre os temas que são de seu interesse?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a183"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a184"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a185"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a186"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a187"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b4"
                }
              },
              {
                "statement": "25 - Tem vocabulário muito mais avançado e rico que seus colegas ou demais pessoas de sua idade, especialmente em relação a temas de interesse?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a189"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a18a"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a18b"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a18c"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a18d"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b5"
                }
              },
              {
                "statement": "26 - Tenta entender coisas complicadas examinando-as parte por parte?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a18f"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a190"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a191"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a192"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a193"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b6"
                }
              },
              {
                "statement": "27 - Aprende rapidamente as relações entre as partes e todo?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a195"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a196"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a197"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a198"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a199"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b7"
                }
              },
              {
                "statement": "28 - Percebe rapidamente as relações entre as partes e o todo?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a19b"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a19c"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a19d"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a19e"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a19f"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b8"
                }
              },
              {
                "statement": "29 - Normalmente aprende mais de uma história, um filme, etc do que as outras pessoas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1a1"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1a2"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1a3"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1a4"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1a5"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2b9"
                }
              },
              {
                "statement": "30 - Tenta descobrir o 'como' e o 'porquê' das coisas fazendo perguntas inteligentes?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0
                  },
                  {
                    "value": "Raramente",
                    "points": 1
                  },
                  {
                    "value": "Às vezes",
                    "points": 2
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3
                  },
                  {
                    "value": "Sempre",
                    "points": 4
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2ba"
                }
              },
              {
                "statement": "31 - Suas notas ou conceitos na escola eram melhores que as dos demais colegas de sua turma?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1a8"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1a9"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1aa"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ab"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ac"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2bb"
                }
              },
              {
                "statement": "32 - Aprende mais rápido que as demais pessoas, especialmente aquilo que lhe interessa?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ae"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1af"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1b0"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1b1"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1b2"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2bc"
                }
              },
              {
                "statement": "33 - Adapta-se facilmente a situações novas ou as modifica?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1b4"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1b5"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1b6"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1b7"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1b8"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2bd"
                }
              },
              {
                "statement": "34 - Tem um pensamento abstrato muito desenvolvido?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ba"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1bb"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1bc"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1bd"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1be"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2be"
                }
              }
            ],
            "sequence": 1,
            "groupName": "Habilidade Acima da Média"
          },
          {
            "questions": [
              {
                "statement": "35 - As ideias que propõe são vistas como diferentes ou esquisitas pelos demais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1c1"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1c2"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1c3"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1c4"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1c5"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2bf"
                }
              },
              {
                "statement": "36 - É muito curioso(a)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1c7"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1c8"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1c9"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ca"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1cb"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c0"
                }
              },
              {
                "statement": "37 - Tem muitas ideias, soluções e respostas incomuns, diferentes e inteligentes?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1cd"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ce"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1cf"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1d0"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1d1"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c1"
                }
              },
              {
                "statement": "38 - Gosta de arriscar para conseguir algo que quer?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1d3"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1d4"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1d5"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1d6"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1d7"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c2"
                }
              },
              {
                "statement": "39 - Gosta de enfrentar desafios?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1d9"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1da"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1db"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1dc"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1dd"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c3"
                }
              },
              {
                "statement": "40 - É muito imaginativo(a) e inventivo(a)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1df"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e0"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e1"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e2"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e3"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c4"
                }
              },
              {
                "statement": "41 - É sensível às coisas bonitas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e5"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e6"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e7"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e8"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1e9"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c5"
                }
              },
              {
                "statement": "42 - É inconformista e não se importa em ser diferente?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1eb"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ec"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ed"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ee"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ef"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c6"
                }
              },
              {
                "statement": "43 - Sabe compreender ideias diferentes das suas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1f1"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1f2"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1f3"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1f4"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1f5"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c7"
                }
              },
              {
                "statement": "44 - Fica chateado(a) quando tem que repetir um exercício ou uma tarefa relacionada a algo que já sabe?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1f7"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1f8"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1f9"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1fa"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1fb"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c8"
                }
              },
              {
                "statement": "45 - Descobre novos e diferentes caminhos para solucionar problemas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1fd"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1fe"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a1ff"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a200"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a201"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2c9"
                }
              },
              {
                "statement": "46 - Gosta de criticar construtivamente e não aceita autoritatismo sem criticá-lo?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a203"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a204"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a205"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a206"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a207"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2ca"
                }
              },
              {
                "statement": "47 - Presta atenção, mesmo que o assunto não lhe interesse?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a209"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a20a"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a20b"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a20c"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a20d"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2cb"
                }
              },
              {
                "statement": "48 - Seus cadernos escolares eram completos e organizados?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a20f"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a210"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a211"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a212"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a213"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2cc"
                }
              },
              {
                "statement": "49 - Gosta de cumprir regras?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a215"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a216"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a217"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a218"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a219"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2cd"
                }
              }
            ],
            "sequence": 2,
            "groupName": "Criatividade"
          },
          {
            "questions": [
              {
                "statement": "50 - Dedica muito mais tempo e energia a algum tema ou atividade que gosta ou lhe interessa?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a21c"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a21d"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a21e"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a21f"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a220"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2ce"
                }
              },
              {
                "statement": "51 - É muito exigente e crítico(a) consigo mesmo(a), e nunca fica satisfeito(a) com o que faz?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a222"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a223"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a224"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a225"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a226"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2cf"
                }
              },
              {
                "statement": "52 - Insiste em buscar soluções para os problemas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a228"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a229"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a22a"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a22b"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a22c"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d0"
                }
              },
              {
                "statement": "53 - Tem sua própria organização?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a22e"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a22f"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a230"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a231"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a232"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d1"
                }
              },
              {
                "statement": "54 - É muito seguro(a) e, às vezes, teimoso(a), em suas convicções?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a234"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a235"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a236"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a237"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a238"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d2"
                }
              },
              {
                "statement": "55 - Precisa de muito estímulo para terminar um trabalho que lhe interessa?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a23a"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a23b"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a23c"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a23d"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a23e"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d3"
                }
              },
              {
                "statement": "56 - Deixa de fazer outras coisas para envolver-se numa atividade que lhe interessa?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a240"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a241"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a242"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a243"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a244"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d4"
                }
              },
              {
                "statement": "57 - Reconhece os aabstáculos quando planeja?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a246"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a247"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a248"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a249"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a24a"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d5"
                }
              },
              {
                "statement": "58 - Sabe estabelecer prioridades com facilidade?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a24c"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a24d"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a24e"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a24f"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a250"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d6"
                }
              },
              {
                "statement": "59 - Sabe definir etapas, detalhes e métodos para desenvolver uma atividade?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a252"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a253"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a254"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a255"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a256"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d7"
                }
              },
              {
                "statement": "60 - É persistente nas atividades que lhe interessam e busca concluir as tarefas a elas relacionadas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a258"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a259"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a25a"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a25b"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a25c"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d8"
                }
              },
              {
                "statement": "61 - É interessado(a) e eficiente na organização de tarefas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a25e"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a25f"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a260"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a261"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a262"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2d9"
                }
              },
              {
                "statement": "62 - Sabe distinguir as consequências e os efeitos de suas ações?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a264"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a265"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a266"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a267"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a268"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2da"
                }
              }
            ],
            "sequence": 3,
            "groupName": "Comprometimento da Tarefa"
          },
          {
            "questions": [
              {
                "statement": "63 - Você se considera autossuficiente?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a26b"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a26c"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a26d"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a26e"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a26f"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2db"
                }
              },
              {
                "statement": "64 - Você é escolhido(a) ou preferido(a) pelas demais pessoas para funções de liderança (lider de grupo, coordenador(a))?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a271"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a272"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a273"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a274"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a275"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2dc"
                }
              },
              {
                "statement": "65 - Você é cooperativo(a) com os demais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a277"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a278"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a279"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a27a"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a27b"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2dd"
                }
              },
              {
                "statement": "66 - Você tende a organizar o grupo?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a27d"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a27e"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a27f"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a280"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a281"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2de"
                }
              },
              {
                "statement": "67 - Você é persuasivo(a) em seus argumentos e sabe convencer os outros?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a283"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a284"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a285"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a286"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a287"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2df"
                }
              }
            ],
            "sequence": 4,
            "groupName": "Liderança"
          },
          {
            "questions": [
              {
                "statement": "68.1 - Você se destaca em alguma atividade artística e/ou esportiva? Qual ou quais?",
                "questionType": 3,
                "required": false,
                "options": [
                  {
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a28a"
                    },
                    "value": "Artes visuais (Pintura, desenho, escultura, fotografia, etc.)"
                  },
                  {
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a28b"
                    },
                    "value": "Música, canto?"
                  },
                  {
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a28c"
                    },
                    "value": "Dança?"
                  },
                  {
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a28d"
                    },
                    "value": "Informática?"
                  },
                  {
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a28e"
                    },
                    "value": "Esportes, artes marciais, ginástica"
                  },
                  {
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a28f"
                    },
                    "value": "Teatro"
                  },
                  {
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a290"
                    },
                    "value": "Outro"
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2e0"
                }
              },
              {
                "statement": "68.2 - Caso tenha marcado 'OUTRO'. Por favor informe qual ou quais",
                "questionType": 0,
                "parentQuestion": {
                  "parentId": {
                    "$oid": "6501dff1380f8339c3d1a2e0"
                  },
                  "isRequiredOnParentValue": "Outro"
                },
                "options": [],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2e1"
                }
              },
              {
                "statement": "69 - Já obteve alguma distinção/premiação nessa(s) atividade(s) informadas acima?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Não",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a293"
                    }
                  },
                  {
                    "value": "Sim, até 5 premiações no total",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a294"
                    }
                  },
                  {
                    "value": "Sim, de 6 à 10 premiações no total",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a295"
                    }
                  },
                  {
                    "value": "Sim, 11 à 20 premiações no total",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a296"
                    }
                  },
                  {
                    "value": "Sim, mais de 20 premiações no total",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a297"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2e2"
                }
              },
              {
                "statement": "70 - Quantas horas por semana dedica a essa(s) atividade(s)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Não me dedico a nenhuma atividade",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a299"
                    }
                  },
                  {
                    "value": "Menos de 5 horas",
                    "points": 0,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a29a"
                    }
                  },
                  {
                    "value": "De 5 a 9 horas",
                    "points": 1,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a29b"
                    }
                  },
                  {
                    "value": "De 10 a 20 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a29c"
                    }
                  },
                  {
                    "value": "Mais de 20 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501dff1380f8339c3d1a29d"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501dff1380f8339c3d1a2e3"
                }
              }
            ],
            "sequence": 5,
            "groupName": "Atividades Artísticas e Esportivas"
          }
        ],
        "updatedAt": {
          "$date": "2023-09-13T16:14:42.063Z"
        },
        "__v": 1
      },
      {
        "_id": {
          "$oid": "64da2422c99ce2f9b2b3395f"
        },
        "source": 1,
        "groups": [
          {
            "questions": [
              {
                "statement": "1 - Você considera que a pessoa que está sendo avaliada tem alguma(s) habilidade(s) especial(is) ou se destaca das demais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Sim",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408a9f4"
                    }
                  },
                  {
                    "value": "Não",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408a9f5"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408aba4"
                }
              },
              {
                "statement": "2 - Ele(a) demostra ser diferente para as demais pessoas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Sim",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408a9f7"
                    }
                  },
                  {
                    "value": "Não",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408a9f8"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408aba5"
                }
              },
              {
                "statement": "3 - Você considera que ele(a) tem atitudes diferentes às demais pessoas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Sim",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408a9fa"
                    }
                  },
                  {
                    "value": "Não",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408a9fb"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408aba6"
                }
              },
              {
                "statement": "4 - Você considera que ele(a) é uma pessoa tímida?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Sim",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408a9fd"
                    }
                  },
                  {
                    "value": "Não",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408a9fe"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408aba7"
                }
              },
              {
                "statement": "5 - Você considera que ele(a) é uma pessoa extrovertida?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Sim",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa00"
                    }
                  },
                  {
                    "value": "Não",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa01"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408aba8"
                }
              },
              {
                "statement": "6 - Ele(a) lê por seu próprio interesse? Quantas horas/semanas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Não lê",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa03"
                    }
                  },
                  {
                    "value": "Sim, entre 1 e 2 horas",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa04"
                    }
                  },
                  {
                    "value": "Sim, entre 2 e 4 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa05"
                    }
                  },
                  {
                    "value": "Sim, entre 4 e 6 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa06"
                    }
                  },
                  {
                    "value": "Sim, mais de 6 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa07"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408aba9"
                }
              },
              {
                "statement": "7.1 - Sobre quais assuntos ele(a) mais gosta de conversar? (Informe 4 opções por favor)",
                "questionType": 1,
                "required": true,
                "options": [],
                "_id": {
                  "$oid": "6501e017d4db58355408abaa"
                }
              },
              {
                "statement": "7.2 - Sobre quais assuntos ele(a) mais gosta de estudar? (Informe 4 opções por favor)",
                "questionType": 1,
                "required": true,
                "options": [],
                "_id": {
                  "$oid": "6501e017d4db58355408abab"
                }
              },
              {
                "statement": "7.3 - Quais as atividades ele(a) que mais gosta de fazer? (Informe 4 opções por favor)",
                "questionType": 1,
                "required": true,
                "options": [],
                "_id": {
                  "$oid": "6501e017d4db58355408abac"
                }
              },
              {
                "statement": "8 - Que idade têm seus/suas 4 melhores amigos(a)s?",
                "questionType": 1,
                "required": true,
                "options": [],
                "_id": {
                  "$oid": "6501e017d4db58355408abad"
                }
              },
              {
                "statement": "9.1 - Em quais áreas ele(a) era ou é um/uma dos/das melhores da sua turma? Indique as 4 primeiras, por ordem de importância.",
                "questionType": 4,
                "required": true,
                "options": [
                  {
                    "value": "Memória",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa0d"
                    }
                  },
                  {
                    "value": "Dança",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa0e"
                    }
                  },
                  {
                    "value": "História",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa0f"
                    }
                  },
                  {
                    "value": "Química",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa10"
                    }
                  },
                  {
                    "value": "Física",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa11"
                    }
                  },
                  {
                    "value": "Pintura",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa12"
                    }
                  },
                  {
                    "value": "Biologia",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa13"
                    }
                  },
                  {
                    "value": "Esportes",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa14"
                    }
                  },
                  {
                    "value": "Astronomia",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa15"
                    }
                  },
                  {
                    "value": "Liderança",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa16"
                    }
                  },
                  {
                    "value": "Música",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa17"
                    }
                  },
                  {
                    "value": "Criatividade",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa18"
                    }
                  },
                  {
                    "value": "Cinema",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa19"
                    }
                  },
                  {
                    "value": "Observação",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa1a"
                    }
                  },
                  {
                    "value": "Matemática",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa1b"
                    }
                  },
                  {
                    "value": "Abstração",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa1c"
                    }
                  },
                  {
                    "value": "Comunicação",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa1d"
                    }
                  },
                  {
                    "value": "Português",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa1e"
                    }
                  },
                  {
                    "value": "Planejamento",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa1f"
                    }
                  },
                  {
                    "value": "Fotografia",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa20"
                    }
                  },
                  {
                    "value": "Geografia",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa21"
                    }
                  },
                  {
                    "value": "Línguas estrangeiras",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa22"
                    }
                  },
                  {
                    "value": "Escultura",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa23"
                    }
                  },
                  {
                    "value": "Política",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa24"
                    }
                  },
                  {
                    "value": "Mitologia",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa25"
                    }
                  },
                  {
                    "value": "Arqueologia",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa26"
                    }
                  },
                  {
                    "value": "Outro",
                    "_id": {
                      "$oid": "6501e017d4db58355408aa27"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abae"
                }
              },
              {
                "statement": "9.2 - Caso tenha seleciona OUTRO na questão 9.1. Por favor informe abaixo a categoria",
                "questionType": 0,
                "parentQuestion": {
                  "parentId": {
                    "$oid": "6501e017d4db58355408abae"
                  },
                  "isRequiredOnParentValue": "Outro"
                },
                "_id": {
                  "$oid": "6501e017d4db58355408abaf"
                }
              },
              {
                "statement": "10 - Ele(a) sente-se deslocado(a) ou percebe-se diferente das demais pessoas no pensar, sentir ou agir?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa2f"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa30"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa31"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa32"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa33"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb0"
                }
              },
              {
                "statement": "11 - Ele(a) prefere trabalhar/estudar/treinar/praticar sozinho(a)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa35"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa36"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa37"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa38"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa39"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb1"
                }
              },
              {
                "statement": "12 - Quando criança ele(a) preferia ler livros mais difíceis, ou enciclopédias, biografias ou atlas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa3b"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa3c"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa3d"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa3e"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa3f"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb2"
                }
              },
              {
                "statement": "13 - Ele(a) é independente na sua forma de pensar e agir?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa41"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa42"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa43"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa44"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa45"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb3"
                }
              },
              {
                "statement": "14 - Ele(a) tem senso de humor e às vezes encontra humor em stuações que não são humorísticas para os demais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa47"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa48"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa49"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa4a"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa4b"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb4"
                }
              },
              {
                "statement": "15 - Ele(a) preocupa-se muito com questões éticas, morais, sociais, políticas ou ambientais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa4d"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa4e"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa4f"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa50"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa51"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb5"
                }
              },
              {
                "statement": "16 - Ele(a) é perfeccionista?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa53"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa54"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa55"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa56"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa57"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb6"
                }
              },
              {
                "statement": "17 - Ele(a) é mais observador(a) que as demais pessoas, percebendo coisas que os demais não percebem?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa59"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa5a"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa5b"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa5c"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa5d"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb7"
                }
              },
              {
                "statement": "18 - Ele(a) gosta e prefere jogar xadrez ou jogos que exijam estratégia?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa5f"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa60"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa61"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa62"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa63"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb8"
                }
              },
              {
                "statement": "19 - Ele(a) tem princípios éticos e morais próprios que aplica a todas suas ações e pensamentos?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa65"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa66"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa67"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa68"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa69"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abb9"
                }
              },
              {
                "statement": "20 - Ele(a) considera seu conceito de amizade ou seu(s) amigo(s) diferentes ao das demais pessoas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa6b"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa6c"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa6d"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa6e"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa6f"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abba"
                }
              },
              {
                "statement": "21 - Ele(a) é intolerante com pessoas ou atitudes que você não considera corretas ou adequadas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa71"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa72"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa73"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa74"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa75"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abbb"
                }
              },
              {
                "statement": "22 -  Quando criança, ele(a) preferia ter amigos mais velhos e/ou mais novos do que ele(a), em vez de amigos da mesma idade?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa77"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa78"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa79"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa7a"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa7b"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abbc"
                }
              }
            ],
            "sequence": 0,
            "groupName": "Características Gerais"
          },
          {
            "questions": [
              {
                "statement": "23 - Ele(a) tem memória muito destacada, especialmente em assuntos que lhe interessam, comparado a outras pessoas de sua idade?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa7e"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa7f"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa80"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa81"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa82"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abbd"
                }
              },
              {
                "statement": "24 - Ele(a) tem muitas informações sobre os temas que são de seu interesse?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa84"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa85"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa86"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa87"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa88"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abbe"
                }
              },
              {
                "statement": "25 - Ele(a) tem vocabulário muito mais avançado e rico que seus colegas ou demais pessoas de sua idade, especialmente em relação a temas de interesse?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa8a"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa8b"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa8c"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa8d"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa8e"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abbf"
                }
              },
              {
                "statement": "26 - Ele(a) tenta entender coisas complicadas examinando-as parte por parte?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa90"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa91"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa92"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa93"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa94"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc0"
                }
              },
              {
                "statement": "27 - Ele(a) aprende rapidamente as relações entre as partes e todo?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa96"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa97"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa98"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa99"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa9a"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc1"
                }
              },
              {
                "statement": "28 - Ele(a) percebe rapidamente as relações entre as partes e o todo?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa9c"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa9d"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa9e"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aa9f"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaa0"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc2"
                }
              },
              {
                "statement": "29 - Ele(a) normalmente aprende mais de uma história, um filme, etc do que as outras pessoas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaa2"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaa3"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaa4"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaa5"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaa6"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc3"
                }
              },
              {
                "statement": "30 - Ele(a) tenta descobrir o 'como' e o 'porquê' das coisas fazendo perguntas inteligentes?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaa8"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaa9"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaaa"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaab"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaac"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc4"
                }
              },
              {
                "statement": "31 - Ele(a) possui notas ou conceitos na escola melhores que os dos demais colegas de sua turma?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaae"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaaf"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aab0"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aab1"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aab2"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc5"
                }
              },
              {
                "statement": "32 - Ele(a) aprende mais rápido que as demais pessoas, especialmente aquilo que lhe interessa?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aab4"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aab5"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aab6"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aab7"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aab8"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc6"
                }
              },
              {
                "statement": "33 - Ele(a) adapta-se facilmente a situações novas ou as modifica?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaba"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aabb"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aabc"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aabd"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aabe"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc7"
                }
              },
              {
                "statement": "34 - Ele(a) tem um pensamento abstrato muito desenvolvido?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aac0"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aac1"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aac2"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aac3"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aac4"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc8"
                }
              }
            ],
            "sequence": 1,
            "groupName": "Habilidade Acima da Média"
          },
          {
            "questions": [
              {
                "statement": "35 - As ideias que ele(a) propõe são vistas como diferentes ou esquisitas pelos demais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aac7"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aac8"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aac9"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaca"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aacb"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abc9"
                }
              },
              {
                "statement": "36 - Ele(a) é muito curioso(a)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aacd"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aace"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aacf"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aad0"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aad1"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abca"
                }
              },
              {
                "statement": "37 - Ele(a) tem muitas ideias, soluções e respostas incomuns, diferentes e inteligentes?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aad3"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aad4"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aad5"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aad6"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aad7"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abcb"
                }
              },
              {
                "statement": "38 - Ele(a) gosta de arriscar para conseguir algo que quer?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aad9"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aada"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aadb"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aadc"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aadd"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abcc"
                }
              },
              {
                "statement": "39 - Ele(a) gosta de enfrentar desafios?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aadf"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae0"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae1"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae2"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae3"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abcd"
                }
              },
              {
                "statement": "40 - Ele(a) é muito imaginativo(a) e inventivo(a)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae5"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae6"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae7"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae8"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aae9"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abce"
                }
              },
              {
                "statement": "41 - Ele(a) é sensível às coisas bonitas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaeb"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaec"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaed"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaee"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaef"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abcf"
                }
              },
              {
                "statement": "42 - Ele(a) é inconformista e não se importa em ser diferente?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaf1"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaf2"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaf3"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaf4"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaf5"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd0"
                }
              },
              {
                "statement": "43 - Ele(a) sabe compreender ideias diferentes das suas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaf7"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaf8"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaf9"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408aafa"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408aafb"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd1"
                }
              },
              {
                "statement": "44 - Ele(a) fica chateado(a) quando tem que repetir um exercício ou uma tarefa relacionada a algo que já sabe?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aafd"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aafe"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aaff"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab00"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab01"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd2"
                }
              },
              {
                "statement": "45 - Ele(a) descobre novos e diferentes caminhos para solucionar problemas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab03"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab04"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab05"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab06"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab07"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd3"
                }
              },
              {
                "statement": "46 - Ele(a) gosta de criticar construtivamente e não aceita autoritatismo sem criticá-lo?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab09"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab0a"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab0b"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab0c"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab0d"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd4"
                }
              },
              {
                "statement": "47 - Ele(a) presta atenção, mesmo que o assunto não lhe interesse?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab0f"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab10"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab11"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab12"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab13"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd5"
                }
              },
              {
                "statement": "48 - Os cadernos escolares dele(a) eram completos e organizados?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab15"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab16"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab17"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab18"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab19"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd6"
                }
              },
              {
                "statement": "49 - Ele(a) gosta de cumprir regras?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab1b"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab1c"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab1d"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab1e"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab1f"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd7"
                }
              }
            ],
            "sequence": 2,
            "groupName": "Criatividade"
          },
          {
            "questions": [
              {
                "statement": "50 - Ele(a) dedica muito mais tempo e energia a algum tema ou atividade que gosta ou lhe interessa?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab22"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab23"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab24"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab25"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab26"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd8"
                }
              },
              {
                "statement": "51 - Ele(a) é muito exigente e crítico(a) consigo mesmo(a), e nunca fica satisfeito(a) com o que faz?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab28"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab29"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab2a"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab2b"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab2c"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abd9"
                }
              },
              {
                "statement": "52 - Ele(a) insiste em buscar soluções para os problemas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab2e"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab2f"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab30"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab31"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab32"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abda"
                }
              },
              {
                "statement": "53 - Ele(a) tem sua própria organização?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab34"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab35"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab36"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab37"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab38"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abdb"
                }
              },
              {
                "statement": "54 - Ele(a) é muito seguro(a) e, às vezes, teimoso(a), em suas convicções?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab3a"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab3b"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab3c"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab3d"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab3e"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abdc"
                }
              },
              {
                "statement": "55 - Ele(a) precisa de muito estímulo para terminar um trabalho que lhe interessa?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab40"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab41"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab42"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab43"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab44"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abdd"
                }
              },
              {
                "statement": "56 - Ele(a) deixa de fazer outras coisas para envolver-se numa atividade que lhe interessa?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab46"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab47"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab48"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab49"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab4a"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abde"
                }
              },
              {
                "statement": "57 - Ele(a) reconhece os obstáculos quando planeja?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab4c"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab4d"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab4e"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab4f"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab50"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abdf"
                }
              },
              {
                "statement": "58 - Ele(a) sabe estabelecer prioridades com facilidade?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab52"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab53"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab54"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab55"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab56"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe0"
                }
              },
              {
                "statement": "59 - Ele(a) sabe definir etapas, detalhes e métodos para desenvolver uma atividade?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab58"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab59"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab5a"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab5b"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab5c"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe1"
                }
              },
              {
                "statement": "60 - Ele(a) é persistente nas atividades que lhe interessam e busca concluir as tarefas a elas relacionadas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab5e"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab5f"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab60"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab61"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab62"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe2"
                }
              },
              {
                "statement": "61 - Ele(a) é interessado(a) e eficiente na organização de tarefas?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab64"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab65"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab66"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab67"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab68"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe3"
                }
              },
              {
                "statement": "62 - Ele(a) sabe distinguir as consequências e os efeitos de suas ações?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab6a"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab6b"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab6c"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab6d"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab6e"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe4"
                }
              }
            ],
            "sequence": 3,
            "groupName": "Comprometimento da Tarefa"
          },
          {
            "questions": [
              {
                "statement": "63 - Você considera ele(a) autossuficiente?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab71"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab72"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab73"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab74"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab75"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe5"
                }
              },
              {
                "statement": "64 - Ele(a) é escolhido(a) ou preferido(a) pelas demais pessoas para funções de liderança (lider de grupo, coordenador(a))?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab77"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab78"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab79"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab7a"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab7b"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe6"
                }
              },
              {
                "statement": "65 - Ele(a) é cooperativo(a) com os demais?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab7d"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab7e"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab7f"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab80"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab81"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe7"
                }
              },
              {
                "statement": "66 - Ele(a) tende a organizar o grupo?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab83"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab84"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab85"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab86"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab87"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe8"
                }
              },
              {
                "statement": "67 - Ele(a) é persuasivo(a) em seus argumentos e sabe convencer os outros?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Nunca",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab89"
                    }
                  },
                  {
                    "value": "Raramente",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab8a"
                    }
                  },
                  {
                    "value": "Às vezes",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab8b"
                    }
                  },
                  {
                    "value": "Frequentemente",
                    "points": 3,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab8c"
                    }
                  },
                  {
                    "value": "Sempre",
                    "points": 4,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab8d"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abe9"
                }
              }
            ],
            "sequence": 4,
            "groupName": "Liderança"
          },
          {
            "questions": [
              {
                "statement": "68.1 - Ele(a) se destaca em alguma atividade artística e/ou esportiva? Qual ou quais?",
                "questionType": 3,
                "required": false,
                "options": [
                  {
                    "value": "Artes visuais (Pintura, desenho, escultura, fotografia, etc.)",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab90"
                    }
                  },
                  {
                    "value": "Música, canto?",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab91"
                    }
                  },
                  {
                    "value": "Dança?",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab92"
                    }
                  },
                  {
                    "value": "Informática?",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab93"
                    }
                  },
                  {
                    "value": "Esportes, artes marciais, ginástica",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab94"
                    }
                  },
                  {
                    "value": "Teatro",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab95"
                    }
                  },
                  {
                    "value": "Outro",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab96"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abea"
                }
              },
              {
                "statement": "68.2 - Caso tenha marcado 'OUTRO'. Por favor informe qual ou quais",
                "questionType": 0,
                "parentQuestion": {
                  "parentId": {
                    "$oid": "6501e017d4db58355408abea"
                  },
                  "isRequiredOnParentValue": "Outro"
                },
                "options": [],
                "_id": {
                  "$oid": "6501e017d4db58355408abeb"
                }
              },
              {
                "statement": "69 - Ele(a) já obteve alguma distinção/premiação nessa(s) atividade(s) informadas acima?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Não",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab99"
                    }
                  },
                  {
                    "value": "Sim, até 5 premiações no total",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab9a"
                    }
                  },
                  {
                    "value": "Sim, de 6 à 10 premiações no total",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab9b"
                    }
                  },
                  {
                    "value": "Sim, 11 à 20 premiações no total",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab9c"
                    }
                  },
                  {
                    "value": "Sim, mais de 20 premiações no total",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab9d"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abec"
                }
              },
              {
                "statement": "70 - Quantas horas por semana ele(a) dedica a essa(s) atividade(s)?",
                "questionType": 2,
                "required": true,
                "options": [
                  {
                    "value": "Não se dedica a nenhuma atividade",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408ab9f"
                    }
                  },
                  {
                    "value": "Menos de 5 horas",
                    "points": 0,
                    "_id": {
                      "$oid": "6501e017d4db58355408aba0"
                    }
                  },
                  {
                    "value": "De 5 a 9 horas",
                    "points": 1,
                    "_id": {
                      "$oid": "6501e017d4db58355408aba1"
                    }
                  },
                  {
                    "value": "De 10 a 20 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aba2"
                    }
                  },
                  {
                    "value": "Mais de 20 horas",
                    "points": 2,
                    "_id": {
                      "$oid": "6501e017d4db58355408aba3"
                    }
                  }
                ],
                "_id": {
                  "$oid": "6501e017d4db58355408abed"
                }
              }
            ],
            "sequence": 5,
            "groupName": "Atividades Artísticas e Esportivas"
          }
        ],
        "updatedAt": {
          "$date": "2023-09-13T16:15:19.465Z"
        },
        "__v": 1
      }]
)
)
