export interface Wine {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface Producer {
  id: string;
  name: string;
  wines: Wine[];
}