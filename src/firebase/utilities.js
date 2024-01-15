import { realtimeDb } from "./config";
import { ref, update } from "firebase/database"

const writeRegistry = (path, input) => {

    update(ref(realtimeDb, `/participants/${path}/`), input);
}


export {
    writeRegistry,
};

