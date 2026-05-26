import { useEffect, useState } from "react";

type CryptoData = {
  symbol: string;
  price: string;
};

const initialCoins: CryptoData[] = [
  { symbol: "BTCUSDT", price: "0" },
  { symbol: "ETHUSDT", price: "0" },
  { symbol: "BNBUSDT", price: "0" },
];

export default function DemoTest() {
  const [coins, setCoins] = useState<CryptoData[]>(initialCoins);

  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com:443/stream?streams=btcusdt@trade/ethusdt@trade/bnbusdt@trade"
    );

    ws.onopen = () => {
      setStatus("Connected");
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);

      const data = response.data;

      setCoins((prev) =>
        prev.map((coin) =>
          coin.symbol === data.s
            ? {
                ...coin,
                price: Number(data.p).toFixed(2),
              }
            : coin
        )
      );
    };

    ws.onerror = () => {
      setStatus("Error");
    };

    ws.onclose = () => {
      setStatus("Closed");
    };

    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
        <h1 className="text-3xl font-bold text-center mb-6">
          Live Crypto Prices
        </h1>

        <div className="flex justify-center mb-6">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              status === "Connected" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="space-y-4">
          {coins.map((coin) => (
            <div
              key={coin.symbol}
              className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 flex justify-between items-center"
            >
              <div>
                <p className="text-zinc-400 text-sm">Currency</p>

                <h2 className="text-2xl font-bold text-yellow-400">
                  {coin.symbol}
                </h2>
              </div>

              <div className="text-right">
                <p className="text-zinc-400 text-sm">Live Price</p>

                <h2 className="text-3xl font-bold text-green-400">
                  ${coin.price}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
