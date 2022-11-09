import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

// Here we can specify the chainId our app should run on
// In this example, we'll use the Ethereum Goerli Testnet
const desiredChainId = ChainId.Goerli;

export const MyApp = () => {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
};