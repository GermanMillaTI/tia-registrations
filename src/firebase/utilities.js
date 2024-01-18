import { realtimeDb } from "./config";
import { ref, update } from "firebase/database"

const writeRegistry = (path, input) => {

    update(ref(realtimeDb, `/participants/${path}/`), input);
}


const writeRegistryICF = (path, input) => {

    update(ref(realtimeDb, `/participants/${path}/icf`), input);
}


export {
    writeRegistry,
    writeRegistryICF
};

