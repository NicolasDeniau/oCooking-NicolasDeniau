import { useDocumentTitle } from "../hooks/useDocumentTitle";

const NotFound = () => {
    useDocumentTitle("Page introuvable");

    return (
        <>
            <h1>Page introuvable !</h1>
        </>
    )
};

export default NotFound;
