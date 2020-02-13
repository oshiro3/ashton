import http from '../lib/http';

export function fetchTemperature(token) {
    return http.get('/enviroments/temperature', token)
    // return 28.5
}

export function fetchHumidity(token) {
    return http.get('/enviroments/humidity', token)
    // return 80
}
