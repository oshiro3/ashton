import http from '../lib/http';

export function fetchTemperature() {
    return http.get('/enviroments/temperature')
    // return 28.5
}

export function fetchHumidity() {
    // return http.get('/enviroment/temperature')
    return 80
}
