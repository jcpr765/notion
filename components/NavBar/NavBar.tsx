import NavBarMainAction, { NavBarMainActionType } from "./NavBarMainAction";
import styles from "./ Navbar.module.css";
import { Notes } from "@/types/notes";
import NoteListItem from "./NoteListItem";
import useNotes from "@/hooks/useNotes";

const renderNavBarItems = (notes: Notes | null) => {
  if (notes !== null) {
    return notes.map((note) => <NoteListItem key={note.id} note={note} />);
  }
  return null;
};

export default function NavBar() {
  const notes: Notes | null = useNotes();

  return (
    <nav className={styles.nav}>
      <NavBarResizer />
      <div className={styles.mainActions}>
        {/* TODO the whole login popup */}
        <div>Name</div>
        <NavBarMainAction type={NavBarMainActionType.Search} />
        <NavBarMainAction type={NavBarMainActionType.Inbox} />
        <NavBarMainAction type={NavBarMainActionType.NewPage} />
      </div>
      <div>{renderNavBarItems(notes)}</div>
    </nav>
  );
}

function NavBarResizer() {
  return <div className={styles.resizer}></div>;
}
