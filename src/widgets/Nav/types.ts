import { ConnectCallbackType } from "../WalletModal/types";

export type NavTheme = {
  background: string;
  hover: string;
};

export interface LangType {
  code: string;
  language: string;
}

export interface NavProps {
  account?: string;
  connectCallbacks: ConnectCallbackType[];
  logout: () => void;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  cakePriceUsd?: number;
}
