import { useDocumentTitle } from "../hooks/useDocumentTitle";

const About = () => {
    useDocumentTitle("A propos");

    return (
        <>
            <h1>A propos</h1>
        </>
    )
};

export default About;