houses = [];

module.exports = {
    get: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.get_houses([params])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send())
    },
    post: (req, res, next) => {
        const dbInstance = req.app.post
        const {name, address, city, state, zip} = req.body;

        houses.push({id, name, address, city, state, zip});
        id++;

        res.status(200).send(req.body);
    },
    put: (req, res, next) => {
        const {houses} = req.body;
        const updateHouse = req.query.id;
        const houseIndex = houses.findIndex(house => house.id == updateHouse);
        let house = houses[houseIndex];

        houses[houseIndex] = {
            id: house.id,
            houses: houses || house.houses,
        };

        res.status(200).send(houses);
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.delete
        const {name, address, city, state, zip} = req.body;

        houses.splice({id, name, address, city, state, zip});

        res.status(200).send(req.body);
    }
}