"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const typeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchText.trim()) {
      return;
    }

    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={submitHandler} className="w-full sm:w-[580px]">
      <input
        onChange={typeHandler}
        value={searchText}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none focus:ring-primary/50 focus:ring-1 focus:bg-white/10 transition"
        type="text"
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
};
