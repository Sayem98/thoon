import { BrowserProvider, Contract, formatUnits, parseUnits } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";

import {
  TOKEN_CONTRACT_ADDRESS,
  PRESALE_CONTRACT_ADDRESS,
  TOKEN_ABI,
  PRESALE_ABI,
} from "../contracts/contract";

function useContract() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  const getProvider = () => {
    return new BrowserProvider(walletProvider);
  };
  const getSigner = async (provider) => {
    return provider.getSigner();
  };

  const getContract = async (address, abi, signer) => {
    const contract = new Contract(address, abi, signer);
    return contract;
  };

  const buy = async (amount, ref) => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    // print singer address
    const contract = await getContract(
      PRESALE_CONTRACT_ADDRESS,
      PRESALE_ABI,
      signer
    );
    // check if referral is valid
    if (!ref) {
      ref = "0x0000000000000000000000000000000000000000";
    }
    const transaction = await contract.buyFromNative(ref, {
      value: parseUnits(amount.toString(), 18),
    });
    const receipt = await transaction.wait();
    return receipt;
  };

  const getData = async () => {
    // console.log(address);
    const provider = getProvider();
    const signer = await getSigner(provider);
    const token = await getContract(TOKEN_CONTRACT_ADDRESS, TOKEN_ABI, signer);
    const balance = await token.balanceOf(address);
    const balanceInEth = formatUnits(balance, 18);

    // contract token balance
    const contractBalanceInEth = await token.balanceOf(
      PRESALE_CONTRACT_ADDRESS
    );
    const contractBalance = formatUnits(contractBalanceInEth, 18);

    // get contract eth balance and convert to eth
    let contractEthBalance = await provider.getBalance(
      PRESALE_CONTRACT_ADDRESS
    );

    contractEthBalance = formatUnits(contractEthBalance, 18);
    return {
      balanceInEth,
      contractBalance,
      contractEthBalance,
    };
  };

  const totalSold = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(
      PRESALE_CONTRACT_ADDRESS,
      PRESALE_ABI,
      signer
    );
    const totalSold = await contract.totalSold();
    return Number(formatUnits(totalSold, 18));
  };

  return { buy, getData, totalSold };
}

export default useContract;
