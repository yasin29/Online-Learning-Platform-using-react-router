import { useAccordionButton, Button } from "react-bootstrap";


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button
            type="button"
            onClick={decoratedOnClick}
            className="w-50 mx-auto mb-3"
        >
            {children}
        </Button>
    );
}
export default CustomToggle;