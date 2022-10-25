import axios from "axios"

export const update = (inout, code, counter) => {
    if (inout)
        axios.post("http://localhost:9000/add", {
            barcode: code,
            incBy: counter === "" ? 1 : counter,
        }).then(res => console.log(res.data));
    else
        axios.post("http://localhost:9000/add", {
            barcode: code,
            decBy: counter === "" ? 1 : counter,
        }).then(res => console.log(res.data));
}

