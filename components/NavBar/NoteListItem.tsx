"use client";
import Link from "next/link";
import Icon from "@mdi/react";
import {
  mdiNoteTextOutline,
  mdiAppleKeyboardControl,
  mdiDotsHorizontal,
  mdiPlus,
} from "@mdi/js";
import { Note } from "@/types/notes";
import styles from "./NoteListItem.module.css";
import { useState } from "react";

interface NoteListItemProps {
  note: Note;
}

export default function NoteListItem({ note }: NoteListItemProps) {
  const [open, setIsOpen] = useState(false);

  return (
    <Link href={`/${note.id}`} className={styles.noteItem}>
      <div className={styles.carat} onClick={() => setIsOpen(!open)}>
        <Icon
          size="24px"
          path={mdiAppleKeyboardControl}
          rotate={open ? 180 : 90}
        />
      </div>
      <div className={styles.noteInfo}>
        <div className={styles.icon}>
          <Icon id={note.id} path={mdiNoteTextOutline} title={note.title} />
        </div>
        <span>{note.title}</span>
      </div>
      <div className={styles.extraActions}>
        <div>
          <Icon id={`${note.id}-options`} path={mdiDotsHorizontal} />
        </div>
        <div>
          <Icon id={`${note.id}-add-child`} path={mdiPlus} />
        </div>
      </div>
    </Link>
  );
}
