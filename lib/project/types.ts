export interface Project {
  id: string;
  order: number;
  name: string;
  about: string;
  small_description?: string;
  type: "contractor" | "freelance";
  icon_url?: string;
  tech_stack: [];
  images: [];
  google_play_url?: string;
  appstore_url?: string;
}
