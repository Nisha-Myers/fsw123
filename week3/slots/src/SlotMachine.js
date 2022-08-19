import { useState } from "react";
import chance from './pull'



const SlotMachine = (props) => {
    const [chance1, setChance1] = useState("1");
    const [chance2, setChance2] = useState("1");
    const [chance3, setChance3] = useState("1");
    const [chance4, setChance4] = useState("1");
    const [chance5, setChance5] = useState("1");
    const [chance6, setChance6] = useState("1");
    const [chance7, setChance7] = useState("1");

    const pull = () => {
        setChance1(Math.floor(Math.random() * 6) + 1);
        setChance2(Math.floor(Math.random() * 6) + 1);
    };


    return(
            <chance 
            chance1={chance1} 
            chance2={chance2}
            chance3={chance3}
            chance4={chance4}
            chance5={chance5}
            chance6={chance6}
            chance7={chance7}

            pull={pull}
            />
    )
};



export default SlotMachine;