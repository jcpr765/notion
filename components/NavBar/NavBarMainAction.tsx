import Icon from "@mdi/react";
import styles from "./NavBarMainAction.module.css";
import { mdiMagnify, mdiInbox, mdiPlusCircle } from "@mdi/js";

export enum NavBarMainActionType {
  Search,
  Inbox,
  NewPage,
}

interface NavBarMainActionProps {
  type: NavBarMainActionType;
}

export default function NavBarMainAction({ type }: NavBarMainActionProps) {
  let path, title;
  switch (type) {
    case NavBarMainActionType.Search:
      path = mdiMagnify;
      title = "Search";
      break;
    case NavBarMainActionType.Inbox:
      path = mdiInbox;
      title = "Inbox";
      break;
    case NavBarMainActionType.NewPage:
      path = mdiPlusCircle;
      title = "New Page";
  }

  return (
    <div className={styles.action}>
      <div>
        <Icon id={title} path={path} title={title} />
      </div>
      <span>{title}</span>
    </div>
  );
}
