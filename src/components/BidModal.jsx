import {
  ButtonGroup,
  Form,
  FormControl,
  FormLabel,
  Modal,
  Stack,
  Button,
} from "react-bootstrap";
import React from "react";

export default function BidModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal className="mt-5" onHide={handleClose} show={show}>
        <Modal.Header>
          <Modal.Title className="p-3">Request a Free Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-3">
            <Stack gap={4}>
              <FormLabel>
                {" "}
                Name
                <FormControl type="text" />
              </FormLabel>
              <FormLabel>
                {" "}
                Email
                <FormControl type="email" />
              </FormLabel>
              <FormLabel>
                {" "}
                Type of Organization
                <FormControl as="select">
                  <option>Company</option>
                  <option>Individual</option>
                  <option>Government</option>
                </FormControl>
              </FormLabel>
              <FormLabel>
                {" "}
                Please describe the work you need done
                <FormControl as="textarea" rows={4} />
              </FormLabel>
            </Stack>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button>Get a Bid</Button>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
}
