import { Notes } from "@/types/notes";
import { useEffect, useState } from "react";

export default function useNotes() {
  const [notes, setNotes] = useState<Notes | null>(null);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("notes") || "null");

    setNotes(data);

    const callBack = (ev: StorageEvent) => {
      if (ev.key === "notes") {
        const data = JSON.parse(ev.newValue || "null");
        setNotes(data);
      }
    };

    window.addEventListener("storage", callBack);

    return () => {
      window.removeEventListener("storage", callBack);
    };
  }, [setNotes]);

  return notes;
}
