// src/sui-sdk/client.ts

/* This file contains the setup for the Sui Client, implemented as a singleton
 */

import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
//import { SuiNetwork } from "../common/types";

// Lazy initialization for the SuiClient instance
let suiClientInstance: SuiClient | null = null;

export function getSuiClient(): SuiClient {
  if (!suiClientInstance) {
    suiClientInstance = new SuiClient({
      //url: "https://api.shinami.com/node/v1/sui_mainnet_67fed6f1843fe0684df885e784ba49e4" as SuiNetwork,
      url: getFullnodeUrl("mainnet"),
    });
  }
  return suiClientInstance;
}
