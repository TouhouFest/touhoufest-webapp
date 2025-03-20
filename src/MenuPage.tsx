// generalized Offcanvas to show pages derived from the menu

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from 'react-bootstrap';
import {App} from '@capacitor/app';
import { useEffect } from 'react';

export default function MenuPage({ show_var, hide_fxn, idx, children }) {
   
    function handleHide() {
        App.removeAllListeners().then(() => {
            hide_fxn(idx, false);
        });
    }

    useEffect(() => {
        if(show_var() === true) {
            App.removeAllListeners().then(() => {
                App.addListener('backButton', () => {
                    handleHide();
                });
            });
        }
    }, [show_var]);

    return (
        <Offcanvas show={show_var} onHide={handleHide} placement={"end"} className="w-100">
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

function Body({fluidImage=<></>, mainText}) {
    return (
        <Offcanvas.Body className="p-0">
            <Container fluid="md" className="px-0">
                <div className="text-center">{fluidImage}</div>
                <div className="p-3">
                    {mainText}
                </div>
            </Container>
        </Offcanvas.Body>
    );
}

MenuPage.Header = Header;
MenuPage.FluidImage = FluidImage;
MenuPage.Body = Body;