db = new Mongo().getDB("gcp");

db.createUser({
    user: 'root',
    pwd: 'example',
    roles: [
        {
            role: 'readWrite',
            db: 'accessibilityinfo',
        },
    ],
});

db.createCollection('reviews', { capped: false })
db.createCollection('attractions', { capped: false })

db.attractions.createIndex( {location: "2dsphere" })

// TODO: Implement index for text search of names

db.attractions.insertOne({
    name: "Hellhole",
    type: "Hotel",
    street: "Niels Bohrs Allé",
    streetNumber: 23,
    city: "Odense",
    postal: 5230,
    phone: 12345678
})

