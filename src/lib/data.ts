export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  category: "news" | "event" | "announcement";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
}

const defaultNews: NewsItem[] = [
  { id: "1", title: "Annual Science Exhibition 2026", date: "2026-04-01", excerpt: "Students showcased innovative projects at our annual science exhibition.", content: "The Annual Science Exhibition saw participation from over 200 students across all grades. Projects ranged from renewable energy models to AI-powered solutions for everyday problems.", category: "event" },
  { id: "2", title: "Board Exam Results – 98% Pass Rate", date: "2026-03-25", excerpt: "Shripal Public Inter College achieves outstanding board examination results.", content: "We are proud to announce a 98% pass rate in this year's board examinations, with 45 students scoring above 95%.", category: "announcement" },
  { id: "3", title: "Inter-School Sports Championship", date: "2026-03-15", excerpt: "Our athletes dominated the regional inter-school sports championship.", content: "Shripal Public Inter College secured the overall championship trophy at the Regional Inter-School Sports Meet, winning gold medals in athletics, basketball, and swimming.", category: "event" },
  { id: "4", title: "New Computer Lab Inauguration", date: "2026-03-10", excerpt: "State-of-the-art computer lab with 60 workstations now operational.", content: "The new computer lab, equipped with the latest hardware and software, was inaugurated by the Chief Guest. The lab features 60 high-performance workstations.", category: "news" },
  { id: "5", title: "Admissions Open for 2026-27", date: "2026-03-01", excerpt: "Applications are now being accepted for the upcoming academic session.", content: "Shripal Public Inter College is accepting applications for classes Nursery through XII for the academic session 2026-27. Early bird discounts available until April 30.", category: "announcement" },
];

const defaultGallery: GalleryItem[] = [
  { id: "1", title: "Annual Day Celebrations", category: "Events", imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", date: "2026-02-15" },
  { id: "2", title: "Science Lab", category: "Campus", imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", date: "2026-01-20" },
  { id: "3", title: "Sports Day", category: "Events", imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600", date: "2026-02-01" },
  { id: "4", title: "Library", category: "Campus", imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600", date: "2026-01-10" },
  { id: "5", title: "Art Exhibition", category: "Events", imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600", date: "2026-03-05" },
  { id: "6", title: "Computer Lab", category: "Campus", imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600", date: "2026-01-15" },
  { id: "7", title: "Republic Day", category: "Events", imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600", date: "2026-01-26" },
  { id: "8", title: "Playground", category: "Campus", imageUrl: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=600", date: "2025-12-01" },
];

const STORAGE_KEYS = { news: "shripal_news", gallery: "shripal_gallery" };

export function getNews(): NewsItem[] {
  const stored = localStorage.getItem(STORAGE_KEYS.news);
  return stored ? JSON.parse(stored) : defaultNews;
}

export function saveNews(items: NewsItem[]) {
  localStorage.setItem(STORAGE_KEYS.news, JSON.stringify(items));
}

export function getGallery(): GalleryItem[] {
  const stored = localStorage.getItem(STORAGE_KEYS.gallery);
  return stored ? JSON.parse(stored) : defaultGallery;
}

export function saveGallery(items: GalleryItem[]) {
  localStorage.setItem(STORAGE_KEYS.gallery, JSON.stringify(items));
}

export function isAdminLoggedIn(): boolean {
  return localStorage.getItem("shripal_admin") === "true";
}

export function adminLogin(username: string, password: string): boolean {
  if (username === "admin" && password === "shripal2026") {
    localStorage.setItem("shripal_admin", "true");
    return true;
  }
  return false;
}

export function adminLogout() {
  localStorage.removeItem("shripal_admin");
}
