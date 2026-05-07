import { Container } from "react-bootstrap";
import { MakeGoheiHeader } from "./Utils";

function NewMenuPage({content}:{content:Record<string, JSX.Element>}) {
    return <>
        <Container fluid="md" className="px-0">
            <div className="p-3">
                <MakeGoheiHeader content={content["header"]}/>
                {content["body"]}
            </div>
        </Container>
    </>;
}

export default NewMenuPage;