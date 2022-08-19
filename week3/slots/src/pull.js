export default function chance(props){
    return(
    <div id="mainChance">
    <div id="chanceBox">
        <div className="chance">
            <h1>{props.chance1}</h1>
        </div>
        <div className="chance">
            <h1>{props.chance2}</h1>
        </div>
    </div>
    <div id="btnBox">
        <button onClick = {props.pull} >PUll!</button>
    </div>
</div>
    );
}