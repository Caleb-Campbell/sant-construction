import { Form, FormControl, FormLabel, Modal } from "react-bootstrap";
import React from "react";

export default function BidModal({ show, setShow }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Request a Free Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <FormLabel>
                {" "}
                Name
                <FormControl type="text" />
              </FormLabel>
              <FormLabel>
                <FormControl type="text" />
              </FormLabel>
              <FormLabel>
                <FormControl type="email" />
              </FormLabel>
              <FormLabel>
                <FormControl as="select">
                  <option>Company</option>
                  <option>Individual</option>
                  <option>Government</option>
                </FormControl>
              </FormLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
