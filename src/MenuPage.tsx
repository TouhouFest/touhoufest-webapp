// generalized Offcanvas to show pages derived from the menu

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from 'react-bootstrap';

export default function MenuPage({ show_var, hide_fxn, idx, children }: {show_var:any, hide_fxn:Function, idx:any, children:JSX.Element|JSX.Element[]}) {
    
    function handleHide() {
        hide_fxn(idx, false);
    }

    return (
        <Offcanvas show={show_var} onHide={handleHide} placement={"end"} className="w-100">
            {children}
        </Offcanvas>
    );
}

function Header({children}: {children:JSX.Element|JSX.Element[]}) {
    return (
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>{children}</Offcanvas.Title>
        </Offcanvas.Header>
    );
}

function FluidImage({children}: {children:JSX.Element|JSX.Element[]}) {
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