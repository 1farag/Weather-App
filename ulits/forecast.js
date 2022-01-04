const request = require('postman-request')
const forecast = (latiude, longtiud, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f4f94196ff6fe26d8545a86507d9aab5&query=${latiude},${longtiud}`
    request({ url, json: true},(error, {body}) => {
        if (error) {
            callback('Enable to connect to location server!',undefined)
        } else if (body.error) {
            callback('Enable to find location, Try another search.', undefined)
        }else {
            callback(undefined,
                `The temperature is ${body.current.temperature}, and you can feel like it ${body.current.feelslike}`
            )
        }
    })
}
module.exports = forecast