import { promises as fs } from "fs";
import NavBarMainAction, { NavBarMainActionType } from "./NavBarMainAction";
import styles from "./ Navbar.module.css";
import { Notes } from "@/types/notes";
import NoteListItem from "./NoteListItem";

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
          <NoteListItem key={noteId} note={notes[noteId]} />
        ))}
      </ul>
    </nav>
  );
}
