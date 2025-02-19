import axios from 'axios';

const getDexScreenerData = async (mintAddress: string) => {
  try {
    const url = `https://api.dexscreener.com/latest/dex/tokens/${mintAddress}`;
    const response = await axios.get(url);

    if (response.data.pairs && response.data.pairs.length > 0) {
      for (let i = 0; i < response.data.pairs.length; i++) {
        if (response.data.pairs[i].baseToken.address == mintAddress) {
          const pair = response.data.pairs[i];  // Get first trading pair
          console.log("✅ DexScreener Price (USD):", pair.priceUsd);
          console.log("📊 Trading Volume (24h):", pair.volume.h24);
          console.log("💧 Liquidity:", pair.liquidity.usd);
          return pair;
        }
      }
    } else {
      console.log("❌ Token not found on Dexscreener.");
    }
  } catch (error: any) {
    console.error("❌ Error fetching Dexscreener price:", error.message);
  }
};

export {
  getDexScreenerData,
}