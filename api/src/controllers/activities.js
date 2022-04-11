const { Country, Activity } = require("../db");



async function postActivities(req, res) {
    try {
        const { name, difficulty, duration, season, countries } = req.body
        if (name && difficulty && duration && season && countries) {
            const [newActivity] = await Activity.findOrCreate({
                where: {
                    name: name,
                    difficulty: difficulty,
                    duration: duration,
                    season: season,

                }
            })
            countries.map(async(c) => {
                const countryFind = await Country.findOne({
                        where: {
                            name: c
                        }
                    }

                )
                await countryFind.addActivity(newActivity)
            })
            return res.json(newActivity)
        } else {
            res.status(404).json({ error: 'No se pasaron los parámetros necesarios' })
        }



    } catch (error) {
        console.log(error)
    }
}

async function getActivities(req, res) {
    try {
        const activityFind = await Activity.findAll();
        return res.json(activityFind);
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    postActivities,
    getActivities
}