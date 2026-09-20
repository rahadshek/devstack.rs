type Category =  "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";

type Difficulty = "Beginner-Friendly" | "Intermediate" | "Advanced"

interface Technology {
  id: number;
  name: string;
  category: Category
  description: string;
  icon: string;
  rating: number;
  difficulty: Difficulty  ;
  badge: string;
}