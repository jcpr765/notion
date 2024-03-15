import Icon from "@mdi/react";
import { mdiNoteTextOutline } from "@mdi/js";
import { promises as fs } from "fs";
import NavBarMainAction, { NavBarMainActionType } from "./NavBarMainAction";
import styles from "./ Navbar.module.css";

interface Notes {
  [id: string]: Note;
}

interface Note {
  title: string;
  content: string;
  children: Notes;
}

export default async function NavBar() {
  const file = await fs.readFile(process.cwd() + "/dummyData.json", "utf8");

  const notes: Notes = JSON.parse(file);

  return (
    <nav className={styles.nav}>
      <div className={styles.mainActions}>
        {/* TODO the whole login popup */}
        <div>Name</div>
        <NavBarMainAction type={NavBarMainActionType.Search} />
        <NavBarMainAction type={NavBarMainActionType.Inbox} />
        <NavBarMainAction type={NavBarMainActionType.NewPage} />
      </div>
      <ul>
        {Object.keys(notes).map((noteId: string) => (
          <li key={noteId}>
            <Icon
              size={1}
              path={mdiNoteTextOutline}
              title={notes[noteId].title}
            />
            <span>{notes[noteId].title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
