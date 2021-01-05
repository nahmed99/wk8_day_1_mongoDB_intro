use zoo;

db.dropDatabase();

// database.collections.insertMany (records?)
db.animals.insertMany ([
    {
        name: "Janet",
        species: "Gannet"
    },
    {
        name: "Amanda",
        species: "Panda",
        age: 32
    }
])