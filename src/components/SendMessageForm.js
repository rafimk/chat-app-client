import { Form, Button, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return <Form
        onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <InputGroup className="mb-3">
            <FormControl type="user" placeholder="message..."
                onChange={e => setMessage(e.target.value)} value={message} />
            <Button variant="primary" type="submit" disabled={!message}>Send</Button>
        </InputGroup>
    </Form>
}

export default SendMessageForm;
