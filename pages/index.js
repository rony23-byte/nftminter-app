import {
  useContract,
  useNFTs,
  useMintNFT,
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";
const contractAddress="0x87eC7E74D831463FE8DcB3594FC8a19fE5605CBE";
export default function Home() {
  const { contract } = useContract("0x87eC7E74D831463FE8DcB3594FC8a19fE5605CBE");
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
  const { mutate: mintNFT, isLoading: isMintingNFT } = useMintNFT(contract);

  return (
    <div>
      <h2>My NFTs</h2>
      {isReadingNfts ? (
        <p>Loading...</p>
      ) : (
        <div>
          {nfts.map((nft) => (
            <ThirdwebNftMedia
              key={nft.tokenId}
              metadata={nft.metadata}
              height={200}
            />
             
          
          ))}
        </div>
      )}
            
      <Web3Button
        contractAddress={contractAddress}
        action={(contract) =>
          contract.erc721.mint({
            name: "RONYPUNK NFT",
            image:'https://photos.google.com/share/AF1QipOm6jLLVUoU0vFMN1mbFI-y7bTU4oyE_9Wi82SXNxY9YelXDWefqyZGMKyp_eYynQ/photo/AF1QipNOQlYs8AdL9qww7lkF2aq8DzK8Eh50ER2bKTYD?key=bURyeWtXVmloaFlCRnhQbzNTdG5fRVllUDUxY2dR'
              
          })
        }
      >
        Mint NFT
      </Web3Button>
    </div>
  );
}