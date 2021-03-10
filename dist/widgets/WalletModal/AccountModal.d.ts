import React from "react";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
