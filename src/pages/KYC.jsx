import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const KYC = () => {
  const [document, setDocument] = useState(null);

  const handleFileChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add KYC submission logic here
    console.log("Document submitted:", document);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">KYC</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="document">Upload Document</Label>
          <Input
            id="document"
            type="file"
            onChange={handleFileChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default KYC;