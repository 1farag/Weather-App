const request = require('postman-request');

const geocode = (address,callback)=>{
   
    url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWhtZWRlbGdvaGFyeSIsImEiOiJja3Z5NXZlMG8wb3d4Mm9sY2ZtbWU5NW40In0.LHAulPOkFCgJuuXMap3Lew`
    request({ url, json: true}, (error, {body}) => {
             if (error) {
                 callback('Enable to connect to location server!',undefined)
             } else if (body.features.length === 0) {
                 callback('Enable to find location, Try another search.', undefined)
             } else {
                callback(undefined,{
                    latitude : body.features[0].center[0],
                    longitude : body.features[0].center[1],
                    location : body.features[0].place_name
                })
             } 
    })

}
module.exports = geocode