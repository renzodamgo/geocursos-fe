export type CourseType = {
  id: number;
  students_quantity: number;
  title: string;
  level: "Basico" | "Intermedio" | "Avanzado";
  description: string;
  price: number;
};
