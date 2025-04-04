"use client";

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as action from "@/actions/action";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function CodeEditor({ snippet }: { snippet: Snippet }) {
  const [heading, setHeading] = useState(snippet.title);
  const [program, setProgram] = useState(snippet.code);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  const handleCodeChange = (updatedCode: string = "") => {
    setProgram(updatedCode);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await action.updateSnippet(snippet.id, heading, program);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="font-bold text-4xl">Edit Snippet</h1>

      <div className="space-y-2">
        <Label className="text-xl font-medium">Title : </Label>

        <Input
          type="text"
          name="title"
          id="title"
          className="border-black h-14 bg-[#EBEBEB]"
          defaultValue={heading}
          onChange={handleTitleChange}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-xl font-medium">Code : </Label>

        <Editor
          height="40vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={program}
          onChange={handleCodeChange}
        />
      </div>

      <Button type="submit" className="bg-green-700">
        Update
      </Button>
    </form>
  );
}