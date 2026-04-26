import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import { faAngleRight, faArrowUpRightFromSquare, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { App } from "@capacitor/app";

export default function MainMenuOffcanvas({ mainIcon, menuheader, touhoufest, menunavs, darkModeSelector, showMainMenu, setShowMainMenu }: { mainIcon: JSX.Element, menuheader: JSX.Element | JSX.Element[], touhoufest: any, menunavs: JSX.Element[], darkModeSelector: JSX.Element, showMainMenu: boolean, setShowMainMenu: Function }) {

    useEffect(() => {
        // enable listener for backbutton
        if (showMainMenu === true) {
            App.removeAllListeners().then(() => {
                App.addListener('backButton', () => {
                    setShowMainMenu(false);
                });
            });
        }
        // otherwise destroy app listeners in this class
        else {
            App.removeAllListeners();
        }
    }, [showMainMenu]);

    return (<>
        <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
            show={showMainMenu}
            onHide={() => setShowMainMenu(false)}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                    <span>{mainIcon} {menuheader}</span>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
                <Image src={touhoufest} fluid />
                <div className="p-3">
                    <Nav className="justify-content-end flex-grow-1 pe-3 fs-5">
                        {menunavs}
                        <Nav.Link>{darkModeSelector} <FontAwesomeIcon icon={faAngleRight} className="ms-2"/></Nav.Link>
                        <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQlHDqopPY3Aw9hGe2AfEcD897pmVBKNKgjpz9Hb3sFp9hiA/viewform?usp=dialog" target="_blank"><FontAwesomeIcon icon={faComment} fixedWidth /> Feedback Form <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Nav.Link>
                        <Nav.Link href="https://github.com/kir12/touhoufest-webapp" target="_blank"><FontAwesomeIcon icon={faGithub} fixedWidth></FontAwesomeIcon> About App <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2"/></Nav.Link>
                        <Nav.Link href="https://www.google.com/search?q=marisa+kirisame&client=firefox-b-1-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwioqcvz4fT9AhW2kYkEHTCND3AQ0pQJegQIBBAC&biw=1920&bih=884&dpr=1" target="_blank"><FontAwesomeIcon icon={faHeart} fixedWidth></FontAwesomeIcon> Best Girl <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2"/></Nav.Link>
                    </Nav>
                </div>
            </Offcanvas.Body>
        </Navbar.Offcanvas>

    </>);
}
