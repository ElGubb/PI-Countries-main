const { Sequelize } = require("sequelize");
const { Country, Activity } = require("../db");
const Op = Sequelize.Op

async function getCountries(req, res) {
    try {
        const { name } = req.query
        if (name) {
            const countryPick = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: { model: Activity }
            })
            if (countryPick) {
                return res.json(countryPick)
            }

            return res.status(404).json({ error: 'No se encontraron paises con ese nombre' })
        } else {
            const countriesDb = await Country.findAll({
                include: { model: Activity }
            });

            if (countriesDb) {
                return res.json(countriesDb)
            }
            return res.status(404).json({ error: 'No se encontraron paises' })
        }

    } catch (error) {
        console.log(error)
    }

}

async function getCountryById(req, res) {
    try {
        const { id } = req.params

        const countrySelect = await Country.findOne({
            where: { ID: id },
            include: { model: Activity }
        })

        if (countrySelect) {
            return res.json(countrySelect)
        }

        return res.status(404).json({ error: 'No se encontro un pais' })


    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCountries,
    getCountryById,
}