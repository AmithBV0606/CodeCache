import { createSnippet } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default async function CreateSnippetPage() {
  await new Promise((res) => setTimeout(res, 3000));
  return (
    <form className="space-y-6" action={createSnippet}>
      <h1 className="font-bold text-4xl">Add New Snippet</h1>

      <div className="space-y-2">
        <Label className="text-xl font-medium">Title : </Label>

        <Input
          type="text"
          name="title"
          id="title"
          className="border-black h-14 bg-[#EBEBEB]"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-xl font-medium">Code : </Label>

        <Textarea
          name="code"
          id="code"
          className="border-black h-96 bg-[#EBEBEB] text-black"
        />
      </div>

      <Button type="submit">Add</Button>
    </form>
  );
}