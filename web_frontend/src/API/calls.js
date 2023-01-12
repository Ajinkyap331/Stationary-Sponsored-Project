import axios from "axios"

export const update = async (inout, code, counter) => {
    let response = ""
    if (inout) {
        response = await axios.post("http://localhost:9000/update", {
            barcode: code,
            incBy: counter === "" ? 1 : counter,
        });
        return response
    }
    else {
        response = await axios.post("http://localhost:9000/update", {
            barcode: code,
            decBy: counter === "" ? 1 : counter,
        })
        return response
    }
}

export const login = async (username, password) => {
    console.log({username, password})
    await axios.post("http://localhost:9000/login", {
        username: username,
        password: password
    })
}



