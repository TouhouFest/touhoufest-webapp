import { faToriiGate, faBroom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const COLORSTATUS:string = "COLORSTATUS";

export default function DarkModeSelector() {
    
    const [oppositecolorState, setOppositeColorState] = useState(getColorState());

    let output:string = oppositecolorState === faBroom ? "Enable Dark Mode" : "Enable Light Mode";

    function getColorState() {
        let status:string|null = localStorage.getItem(COLORSTATUS);
        if(status === "light" || status === null) {
            return faBroom;
        }
        else {
            return faToriiGate;
        }
    }

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