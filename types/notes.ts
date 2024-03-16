export interface Notes {
  [id: string]: Note;
}

export interface Note {
  title: string;
  content: string;
  children: Notes;
}
