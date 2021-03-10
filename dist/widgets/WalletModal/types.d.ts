import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
    BSC = "bsc"
}
export declare type Login = (connectorId: ConnectorNames) => void;
export interface Config {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames;
}
