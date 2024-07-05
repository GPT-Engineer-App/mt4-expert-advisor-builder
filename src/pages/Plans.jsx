import { Button } from "@/components/ui/button";

const plans = [
  { id: 1, name: "Basic Plan", price: "$10/month" },
  { id: 2, name: "Standard Plan", price: "$20/month" },
  { id: 3, name: "Premium Plan", price: "$30/month" },
];

const Plans = () => {
  const handlePurchase = (plan) => {
    // Add plan purchase logic here
    console.log("Purchased plan:", plan);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Plans</h1>
      <div className="grid gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="mb-4">{plan.price}</p>
            <Button onClick={() => handlePurchase(plan)} className="w-full">Purchase</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;