import 'whatwg-fetch'

const header = {
    'Content-Type':'application/json;charset=UTF-8'
}

export default function request(url = "",options = {}){
    console.log("options = " + JSON.stringify(options))
    return fetch(url,options)
        .then(res => res.json)
        .catch(err => console.log(err))

}