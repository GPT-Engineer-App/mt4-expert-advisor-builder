const transactions = [
  { id: 1, date: "2023-01-01", amount: "$10", status: "Completed" },
  { id: 2, date: "2023-02-01", amount: "$20", status: "Pending" },
  { id: 3, date: "2023-03-01", amount: "$30", status: "Failed" },
];

const BillingHistory = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Billing History</h1>
      <div className="grid gap-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="border p-4 rounded">
            <p><strong>Date:</strong> {transaction.date}</p>
            <p><strong>Amount:</strong> {transaction.amount}</p>
            <p><strong>Status:</strong> {transaction.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingHistory;