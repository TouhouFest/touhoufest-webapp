import { useState } from "react";
import { Figure } from "react-bootstrap";
import { TransformComponent, TransformWrapper, useTransformEffect } from "react-zoom-pan-pinch";

export function GlobalTransformWrapper({src, caption}: {src:any, caption:string}) : JSX.Element {
   
    const [disablePanned, setDisablePanned] = useState(false);


    const ReturnImageState = ({zoomIn, zoomOut, setTransform, resetTransform, ...rest} : {zoomIn: Function, zoomOut:Function, setTransform: Function, resetTransform: Function}) => {
        useTransformEffect(({state, instance}) => {
            if(state.scale > 1.0) {
                if(disablePanned !== false) {
                    setDisablePanned(false);
                }
            }
            else {
                if(disablePanned !== true) {
                    setDisablePanned(true);
                }
            }

            return() => {}
        });

        return (
            <TransformComponent>
                <Figure.Image src={src} fluid rounded/>
            </TransformComponent>
        );
    }

    return (<>
        <Figure>
            <TransformWrapper panning={{disabled: disablePanned}} >
                {(params) => <ReturnImageState {...params} />}
            </TransformWrapper>
            <Figure.Caption>{caption}</Figure.Caption>
        </Figure>

    </>);
}

