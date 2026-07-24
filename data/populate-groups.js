db.sampleGroups.drop();
db.samplegroups.insertMany(EJSON.deserialize(
    [{
        "_id": {
          "$oid": "64a8121cdbaaf276a003b505"
        },
        "title": "Educação Infantil - menos de 6 anos",
        "forms": [
          "Triagem LIVIAHSD-EI",
          "LIVIAHSD-AA / LIVIAHSD-ACC",
          "Nomeação por Colegas",
          "QIIAHSD-R-EI / QIIAHSD-PR-EI"
        ],
        "available": false
      },
      {
        "_id": {
          "$oid": "64a81262dbaaf276a003b506"
        },
        "title": "Ensino Fundamental - 6 a 14 anos",
        "forms": [
          "Triagem LIVIAHSD",
          "QIIAHSD-Aluno",
          "Autonomeação",
          "QIIAHSD-R, QIIAHSD-PR & QCCAE"
        ],
        "available": false
      },
      {
        "_id": {
          "$oid": "64a8a79f1af34251c365ab5a"
        },
        "title": "Ensino Médio - 15 a 17 anos",
        "forms": [
          "Triagem LIVIAHSD",
          "QIIAHSD-Aluno",
          "QIIAHSD-R, QIIAHSD-PR & QCCAE"
        ],
        "available": false
      },
      {
        "_id": {
          "$oid": "64a8a7a91af34251c365ab5b"
        },
        "title": "Adulto - Estudante - maior de 18 anos",
        "forms": [
          "Triagem LIVIAHSD",
          "QIIAHSD-Aluno",
          "QIIAHSD-R, QIIAHSD-PR & QCCAE"
        ],
        "available": false
      },
      {
        "_id": {
          "$oid": "64a8a7c01af34251c365ab5c"
        },
        "title": "Adulto - não estudante - maior de 18 anos",
        "forms": [
          "QIIAHSD-Aluno",
          "QIIAHSD-PR & QCCAE",
          "Adulto - Segunda Fonte"
        ],
        "available": true
      }]
)
)
