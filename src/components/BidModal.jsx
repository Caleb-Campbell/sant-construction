import {
  ButtonGroup,
  Form,
  FormControl,
  FormLabel,
  Modal,
  Stack,
} from "react-bootstrap";
import React from "react";

export default function BidModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal onHide={handleClose} show={show}>
        <Modal.Header>
          <Modal.Title>Request a Free Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          <ButtonGroup></ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
}
