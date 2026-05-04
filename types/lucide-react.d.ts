declare module "lucide-react" {
  import type { ComponentType, SVGProps } from "react";

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    absoluteStrokeWidth?: boolean;
    size?: number | string;
  }

  export type LucideIcon = ComponentType<LucideProps>;

  export const BookOpen: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Camera: LucideIcon;
  export const Coffee: LucideIcon;
  export const Droplets: LucideIcon;
  export const Dumbbell: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Heart: LucideIcon;
  export const Home: LucideIcon;
  export const Music2: LucideIcon;
  export const Star: LucideIcon;
  export const User: LucideIcon;
}
