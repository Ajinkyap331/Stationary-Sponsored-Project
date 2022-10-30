import axios from "axios"

export const update = async (inout, code, counter) => {
    let response = ""
    if (inout) {
        response = await axios.post("http://localhost:9000/add", {
            barcode: code,
            incBy: counter === "" ? 1 : counter,
        });
        return response
    }
    else {
        response = await axios.post("http://localhost:9000/add", {
            barcode: code,
            decBy: counter === "" ? 1 : counter,
        })
        return response
    }
}