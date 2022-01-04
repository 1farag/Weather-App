document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        return{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }         
    })
})
