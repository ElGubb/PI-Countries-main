const axios = require('axios');
const { Country, Activity } = require('../db');


function getApiInfo() {

    axios.get('https://restcountries.com/v3.1/all')
        .then(resp => {
            resp.data.map(el => {
                Country.findOrCreate({
                    where: {
                        ID: el.cca3,
                        name: el.name.common,
                        flag: el.flags.png,
                        region: el.region,
                        capital: el.capital ? el.capital[0] : 'No hay capital',
                        subregion: el.subregion ? el.subregion : 'No hay subregion',
                        area: el.area,
                        population: el.population
                    }
                })
            })

        })
        .catch(error => console.log(error))
}

module.exports = { getApiInfo }