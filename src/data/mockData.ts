export type Course = {
  id: string;
  title: string;
  teacher: string;
  progress: number;
  color: string;
};
export type Assignment = {
  id: string;
  title: string;
  subject: string;
  deadline: string;
  status: "new" | "submitted" | "late";
};
export const courses: Course[] = [
  {
    id: "1",
    title: "Мобильная разработка",
    teacher: "А. Сейтов",
    progress: 72,
    color: "#B000E8",
  },
  {
    id: "2",
    title: "Базы данных",
    teacher: "Г. Аманова",
    progress: 84,
    color: "#3B82F6",
  },
  {
    id: "3",
    title: "Python",
    teacher: "Д. Омаров",
    progress: 65,
    color: "#22A06B",
  },
];
export const assignments: Assignment[] = [
  {
    id: "1",
    title: "Экран авторизации",
    subject: "Мобильная разработка",
    deadline: "20 октября, 23:59",
    status: "new",
  },
  {
    id: "2",
    title: "SQL SELECT сұраныстары",
    subject: "Базы данных",
    deadline: "22 октября, 18:00",
    status: "new",
  },
  {
    id: "3",
    title: "Pandas тапсырмасы",
    subject: "Python",
    deadline: "15 октября, 20:00",
    status: "submitted",
  },
];
