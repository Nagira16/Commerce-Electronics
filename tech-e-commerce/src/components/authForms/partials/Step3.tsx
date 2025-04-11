import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, MapPinHouse } from "lucide-react";
import React from "react";

const Step3 = () => {
  return (
    <article className="space-y-10">
      <div className="flex justify-center items-center gap-2">
        <Label htmlFor="address">
          <MapPinHouse />
        </Label>
        <Input
          type="text"
          placeholder="Enter your address"
          name="address"
          required
          className="h-8 ring-2 ring-blue-500 focus:!ring-3 focus:!ring-blue-600"
        />
      </div>

      <div className="flex justify-center items-center gap-2 relative">
        <Label htmlFor="avatarUrl">
          <Image />
        </Label>
        <Input
          type="file"
          placeholder="Enter your username"
          name="avatarFile"
          className="h-8 ring-2 ring-blue-500 focus:!ring-3 focus:!ring-blue-600"
        />
        <p className="absolute top-2 right-2 text-xs">(optional)</p>
      </div>
    </article>
  );
};

export default Step3;
