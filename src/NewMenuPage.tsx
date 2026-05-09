import { Container } from "react-bootstrap";
import { MakeGoheiHeader } from "./Utils";

function NewMenuPage({content}:{content:Record<string, JSX.Element>}) {
    return <>
        <Container fluid="md" className="px-0">

            <div className="text-center">{content["fluidImage"]}</div>
            <div className="p-3">
                {!("displayTitle" in content) && 
                    <div className="mb-2"><MakeGoheiHeader content={content["header"]} vertical_margin={false} larger_header={true}/></div>
                }
                {content["body"]}
            </div>
        </Container>
    </>;
}

export default NewMenuPage;