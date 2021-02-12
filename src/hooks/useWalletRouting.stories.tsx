import useWalletRouting from './useWalletRouting';
import Text from "../components/Text/Text";

const imagePath = "https://via.placeholder.com/10";

export default {
    title: "Hooks/useWalletRouting",
    argTypes: {},
};

export const Default: React.FC = () => {
    useWalletRouting({imgSrc: imagePath});

    return (
      <div style={{ padding: "32px" }}>
          <Text>WalletRouting Initialized</Text>
      </div>
    );
  };
  