import { Container } from "react-bootstrap";
import { MakeGoheiHeader } from "./Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function NewMenuPage({content}:{content:Record<string, JSX.Element>}) {
    return <>
        <Container fluid="md" className="px-0">

            <div className="text-center">{content["fluidImage"]}</div>
            <div className="p-3">
                {!("displayTitle" in content) && 
                    <div className="mb-2"><MakeGoheiHeader content={content["header"]} vertical_margin={false} larger_header={true}/></div>
                }

                {"jumplinks" in content && <>
                    <p>Jump directly to:</p>
                    {content["jumplinks"].map((fragment) => {return <>
                        <h5 className="fw-normal"><a href={`#${fragment["fragment_id"]}`} className="text-reset">{fragment["title"]} <FontAwesomeIcon icon={faAngleRight} fixedWidth/></a></h5>
                    </>})}
                </>}

                {content["body"]}
            </div>
        </Container>
    </>;
}

export default NewMenuPage;