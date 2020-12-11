import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../App.css"


import { getSmurfs, addSmurf } from "../actions";
import AddForm from "./AddForm";

const SmurfList = props =>{
    const initSmurfs = props.getSmurfs;

    useEffect(() =>{
        initSmurfs()
    }, [initSmurfs]);

    return (
        <div>
        <div data-testid="smurf" className="card">
            <div className = "smurfList">
                {props.smurf.map(smurf =>(
                    <div className ="eachSmurf" key={smurf.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Position: {smurf.position}</p> 
                        <p>NickName: {smurf.nickname}</p> 
                        <p>Description: {smurf.description}</p>
                    </div>
                ))}
            </div>
            </div>
            <AddForm addSmurf = {props.addSmurf}/>
        </div>
    );
};

const mapStateToProps = state =>{
    return({
        isFetching: state.isFetching,
        smurf: state.smurf,
        error:state.error
    })
};

export default connect (mapStateToProps,{getSmurfs, addSmurf})(SmurfList); 

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.