export interface ITodo {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  desc?: string;
  isCompleted?: boolean;
  isFavourite?: boolean;
  isDeleted?: boolean;
}
