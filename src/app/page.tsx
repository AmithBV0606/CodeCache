import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <div className="flex items-center justify-between">
        <h1>Snippets</h1>

        <Button>New</Button>
      </div>
    </div>
  );
}