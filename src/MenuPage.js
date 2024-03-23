// generalized Offcanvas to show pages derived from the menu

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

export default function MenuPage({ show_var, hide_fxn, idx, children }) {
    
    function handleHide() {
        hide_fxn(idx, false);
    }

    return (
        <Offcanvas show={show_var} onHide={handleHide} placement={"end"}>
            {children}
        </Offcanvas>
    );
}

function Header({children}) {
    return (
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>{children}</Offcanvas.Title>
        </Offcanvas.Header>
    );
}

function FluidImage({children}) {
    return (
        <>{children}</>
    );
}

function Body({fluidImage={}, mainText}) {
    return (
        <Offcanvas.Body className="p-0">
            {fluidImage}
            <div className="p-3">
                {mainText}
            </div>
        </Offcanvas.Body>
    );
}

MenuPage.Header = Header;
MenuPage.FluidImage = FluidImage;
MenuPage.Body = Body;