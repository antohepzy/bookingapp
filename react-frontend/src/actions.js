import serverUrl from './config';

export const getDrivers = (token) =>{
    
    return new Promise(async (resolve, rejects) => {
        let resp = await fetch(serverUrl+'/driver', {
            method: 'get',
             headers: { "Authorization": `Bearer ${token}` }
        })
        const json = await resp.json();
        resolve(json);
    })
}

export const getUser = (token) =>{
    
    return new Promise(async (resolve, rejects) => {
        let resp = await fetch(serverUrl+'/user', {
            method: 'get',
             headers: { "Authorization": `Bearer ${token}` }
        })
        const json = await resp.json();
        resolve(json);
    })
}

export const loginUser = (newUser) =>{
    return new Promise(async (resolve, rejects) => {
        let resp = await fetch(serverUrl+'/login', {
            method: 'post',
            body: JSON.stringify({ newUser }),
         headers: { 'Content-Type': 'application/json' }
        })
        const json = await resp.json();
        resolve(json);
    })
}

export const getTrip = (userId) =>{
    return new Promise(async (resolve, rejects) => {
        let resp = await fetch(serverUrl+'/getTrip', {
            method: 'post',
            body: JSON.stringify({ userId }),
         headers: { 'Content-Type': 'application/json' }
        })
        const json = await resp.json();
        resolve(json);
    })
}