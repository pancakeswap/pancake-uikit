import React from "react";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import useWalletModal from "./index";

export default {
  title: "WalletModal",
  argTypes: {},
};

export const Connected: React.FC = () => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    () => null,
    () => null,
    "0xbdda50183d817c3289f895a4472eb475967dc980"
  );
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal</Button>
      <Button onClick={onPresentAccountModal}>Open account modal</Button>
    </Flex>
  );
};
