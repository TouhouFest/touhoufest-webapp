import { faToriiGate, faBroom, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { COLORSTATUS } from "./Utils";

export default function DarkModeSelector({oppositecolorState, setOppositeColorState}: {oppositecolorState:IconDefinition, setOppositeColorState:Function}) {
    
    let output:string = oppositecolorState === faBroom ? "Enable Dark Mode" : "Enable Light Mode";

    function handleOnClick() {
        if(oppositecolorState === faBroom) {
            // todo: enable dark mode
            document.documentElement.setAttribute('data-bs-theme','dark');
            localStorage.setItem(COLORSTATUS, "dark");
            setOppositeColorState(faToriiGate);
        }
        else {
            // todo: enable light mode
            document.documentElement.setAttribute('data-bs-theme','light');
            localStorage.setItem(COLORSTATUS, "light");
            setOppositeColorState(faBroom);
        }
    }

    return (<><span onClick={handleOnClick}><FontAwesomeIcon fixedWidth icon={oppositecolorState}/> {output}</span></>);
}