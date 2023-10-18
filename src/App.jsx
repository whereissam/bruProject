import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Canvas from './canvas';
import './App.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [ethToUsdRate, setEthToUsdRate] = useState(0);

  const publicProvider = new ethers.JsonRpcProvider("https://eth.public-rpc.com");
  const address = '0x7FE76e93398fFa540c5de59f2F517c1406F469eA';

  useEffect(() => {
    async function getBalance() {
      try {
        const balance = await publicProvider.getBalance(address);
        setBalance(ethers.formatEther(balance))
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    }

    async function getETHtoUSDRate() {

      const address = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419'; // ETH/USD Chainlink Price Feed contract address
      const abi = ['function latestAnswer() view returns (int256)']; // ETH/USD Chainlink Price Feed ABI
      const contracts = new ethers.Contract(address, abi, publicProvider);
      const price = await contracts.latestAnswer();
      const ethPriceRate = ethers.formatUnits(price, 8);
      setEthToUsdRate(ethPriceRate);
    }

    getBalance();
    getETHtoUSDRate();
  }, [address]);

  // Calculate the product of balance and ETH to USD rate
  const calculatedValue = balance !== null && ethToUsdRate !== null ? balance * ethToUsdRate : null;

  return (
    <>
      <div className='root'>
        <h1>Bru 救護車計畫</h1>
        <Canvas className='canvas'/>
        <h3>Balance: {Number(balance).toFixed(4)} ETH</h3>
        <h3>Value: {(calculatedValue).toFixed(2)} USD</h3>
      </div>
    </>
  )
}

export default App
