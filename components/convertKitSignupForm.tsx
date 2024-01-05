"use client";

import { FormEventHandler, useCallback, useState } from "react";

const ConvertkitSignupForm = () => {
  const [message, setMessage] = useState<string>("");

  const onSubmit: FormEventHandler = useCallback(async (event) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const data = new FormData(target);
    const email = data.get("email");

    const body = JSON.stringify({
      email,
    });

    const headers = new Headers({
      "Content-Type": "application/json; charset=utf-8",
    });

    try {
      await fetch(`/api/subscribe`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers,
        body,
      });

      setMessage("You're in! Thank you for subscribing.");
    } catch {
      setMessage(
        "Ouch, something goes wrong! Sent a message to Christian to fix it :)"
      );
    }
  }, []);

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <form
      target="_blank"
      className={`space-y-4 md:space-y-0 md:space-x-4 flex md:flex-row flex-col w-full justify-center`}
      onSubmit={onSubmit}
    >
      <input
        type="email"
        className=" bg-[#1e1e1e] text-white p-4 rounded-xl min-w-[300px]"
        name={"email"}
        aria-label="Enter your email"
        placeholder="Enter your email"
        required
      />

      <button className="bg-lime text-black font-bold py-2 px-4 rounded-xl cursor-pointer min-w-[100px] text-center">
        Join the newsletter!
      </button>
    </form>
  );
};

export default ConvertkitSignupForm;
