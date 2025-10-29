export interface Student {
  id: string;
  username: string;
  name: string;
}

export interface Course {
  id: string;
  name: string;
  teacher: string;
  time: string;
  location: string;
  capacity: number;
  enrolled: number;
  description: string;
}

export interface SelectedCourse extends Course {
  selectedAt: Date;
}
