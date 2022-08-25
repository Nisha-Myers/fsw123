import {v4 as uuidv4} from "uuid"



export const toDoArray = [
    {
        id: uuidv4(),
        text: "make coffee",
        isCompleted: false        
    },

    {
        id: uuidv4(),
        text: "turn on computer",
        isCompleted: true
    },

    {
        id: uuidv4(),
        text: "study",
        isCompleted: true
    },

    {
        id: uuidv4(),
        text: "do homework",
        isCompleted: false
    }
];