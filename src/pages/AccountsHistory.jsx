const accounts = [
  { id: 1, type: "Demo", balance: "$1000", status: "Active" },
  { id: 2, type: "Live", balance: "$5000", status: "Inactive" },
];

const AccountsHistory = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Accounts History</h1>
      <div className="grid gap-4">
        {accounts.map((account) => (
          <div key={account.id} className="border p-4 rounded">
            <p><strong>Type:</strong> {account.type}</p>
            <p><strong>Balance:</strong> {account.balance}</p>
            <p><strong>Status:</strong> {account.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountsHistory;