import { createContext, FC, useEffect, useState } from 'react';
import { useEthers } from '~/hooks/useEthers';
import { Closet, EthersContextType, Rat } from '~/types';
import { CONTRACT_ADDRESS, CHAIN_ID, CLOSET_ADDRESS } from '~/config/env';
import { ethers } from 'ethers';

const defaultEthersContext: EthersContextType = {
  connectToMetamask: () => undefined,
};

export const EthersContext = createContext(defaultEthersContext);
