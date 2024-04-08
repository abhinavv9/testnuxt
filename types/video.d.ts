interface Video {
  _path: string;
  title: string;
  description: string;
  type: "single" | "course";
  image: string;
  videos: string[];
  date: string;
  tags: string[];
  source?: string;
  demo?: string;
  content?: string;
}
