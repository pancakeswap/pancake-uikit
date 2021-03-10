import React from "react";
import { Login, Config } from "./types";
interface Props {
    walletConfig: Config;
    login: Login;
    onDismiss: () => void;
    mb: string;
}
declare const WalletCard: React.FC<Props>;
export default WalletCard;
