import { Container } from "react-bootstrap";

function NewMenuPage({content}:{content:Record<string, JSX.Element>}) {
    return <>
        <Container fluid="md" className="px-0">
            <div className="p-3">
                {content["body"]}
            </div>
        </Container>
    </>;
}

export default NewMenuPage;