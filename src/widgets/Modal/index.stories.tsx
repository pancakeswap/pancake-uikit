import React from "react";
import { ModalProvider, Modal, useModal } from ".";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {},
};

const CustomModal = ({ title }) => (
  <Modal>
    <Heading>{title}</Heading>
    <Button>This button Does nothing</Button>
  </Modal>
);

const ModalConsumer = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />);
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />);
  return (
    <div>
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
    </div>
  );
};

export const Default: React.FC = () => {
  return (
    <ModalProvider>
      <ModalConsumer />
    </ModalProvider>
  );
};
