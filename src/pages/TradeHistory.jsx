const trades = [
  { id: 1, date: "2023-01-01", instrument: "EUR/USD", amount: "$100", result: "Win" },
  { id: 2, date: "2023-02-01", instrument: "GBP/USD", amount: "$200", result: "Loss" },
];

const TradeHistory = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Trade History</h1>
      <div className="grid gap-4">
        {trades.map((trade) => (
          <div key={trade.id} className="border p-4 rounded">
            <p><strong>Date:</strong> {trade.date}</p>
            <p><strong>Instrument:</strong> {trade.instrument}</p>
            <p><strong>Amount:</strong> {trade.amount}</p>
            <p><strong>Result:</strong> {trade.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeHistory;