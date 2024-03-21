"use client";
import Icon from "@mdi/react";
import { mdiNoteTextOutline, mdiAppleKeyboardControl } from "@mdi/js";
import { Note } from "@/types/notes";
import styles from "./NoteListItem.module.css";
import { useState } from "react";

interface NoteListItemProps {
  note: Note;
}

export default function NoteListItem({ note }: NoteListItemProps) {
  const [open, setIsOpen] = useState(false);

  return (
    <li className={styles.noteItem}>
      <div className={styles.carat} onClick={() => setIsOpen(!open)}>
        <Icon
          size="24px"
          path={mdiAppleKeyboardControl}
          rotate={open ? 180 : 90}
        />
      </div>
      <div>
        <div className={styles.icon}>
          <Icon id={note.id} path={mdiNoteTextOutline} title={note.title} />
        </div>
        <span>{note.title}</span>
      </div>
    </li>
  );
}
