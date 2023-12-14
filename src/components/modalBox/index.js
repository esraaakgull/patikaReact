import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalBox = ({data, setIsDisplayed}) => {
    return (
        <div
            className="modal show"
            style={{display: 'block', position: 'initial'}}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Post Comments</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        {data.map((comment, index) => <li key={index}>{comment.body}</li>)}
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsDisplayed(false)}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalBox;