import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, Plus, Trash2, LogOut, Image, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { isAdminLoggedIn, adminLogin, adminLogout, getNews, saveNews, getGallery, saveGallery, type NewsItem, type GalleryItem } from "@/lib/data";

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(isAdminLoggedIn());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [news, setNews] = useState<NewsItem[]>(getNews());
  const [gallery, setGallery] = useState<GalleryItem[]>(getGallery());
  const { toast } = useToast();
  const navigate = useNavigate();

  // New item forms
  const [newNews, setNewNews] = useState({ title: "", excerpt: "", content: "", category: "news" as "news" | "event" | "announcement" });
  const [newGallery, setNewGallery] = useState({ title: "", category: "", imageUrl: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(username, password)) {
      setLoggedIn(true);
      toast({ title: "Welcome, Admin!" });
    } else {
      toast({ title: "Invalid credentials", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    adminLogout();
    setLoggedIn(false);
    navigate("/");
  };

  const addNews = (e: React.FormEvent) => {
    e.preventDefault();
    const item: NewsItem = { ...newNews, id: Date.now().toString(), date: new Date().toISOString().slice(0, 10) };
    const updated = [item, ...news];
    setNews(updated);
    saveNews(updated);
    setNewNews({ title: "", excerpt: "", content: "", category: "news" });
    toast({ title: "News item added!" });
  };

  const deleteNews = (id: string) => {
    const updated = news.filter((n) => n.id !== id);
    setNews(updated);
    saveNews(updated);
    toast({ title: "News item deleted." });
  };

  const addGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    const item: GalleryItem = { ...newGallery, id: Date.now().toString(), date: new Date().toISOString().slice(0, 10) };
    const updated = [item, ...gallery];
    setGallery(updated);
    saveGallery(updated);
    setNewGallery({ title: "", category: "", imageUrl: "" });
    toast({ title: "Gallery item added!" });
  };

  const deleteGallery = (id: string) => {
    const updated = gallery.filter((g) => g.id !== id);
    setGallery(updated);
    saveGallery(updated);
    toast({ title: "Gallery item deleted." });
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center section-alt">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md px-4">
          <Card>
            <CardHeader className="text-center">
              <LogIn className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-2xl font-heading text-primary">Admin Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div><Label>Username</Label><Input value={username} onChange={(e) => setUsername(e.target.value)} required /></div>
                <div><Label>Password</Label><Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
                <Button type="submit" className="w-full gold-gradient text-secondary-foreground border-0 hover:opacity-90">Login</Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">Demo: admin / shripal2026</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="section-alt min-h-screen">
      <div className="hero-gradient py-6">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-primary-foreground">Admin Dashboard</h1>
          <Button variant="outline" size="sm" onClick={handleLogout} className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue="news">
          <TabsList className="mb-6">
            <TabsTrigger value="news"><Newspaper className="mr-2 h-4 w-4" /> News & Events</TabsTrigger>
            <TabsTrigger value="gallery"><Image className="mr-2 h-4 w-4" /> Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-lg font-heading text-primary">Add News / Event</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={addNews} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Label>Title</Label><Input value={newNews.title} onChange={(e) => setNewNews({ ...newNews, title: e.target.value })} required /></div>
                    <div>
                      <Label>Category</Label>
                      <Select value={newNews.category} onValueChange={(v) => setNewNews({ ...newNews, category: v as "news" | "event" | "announcement" })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="news">News</SelectItem>
                          <SelectItem value="event">Event</SelectItem>
                          <SelectItem value="announcement">Announcement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div><Label>Excerpt</Label><Input value={newNews.excerpt} onChange={(e) => setNewNews({ ...newNews, excerpt: e.target.value })} required /></div>
                  <div><Label>Content</Label><Textarea value={newNews.content} onChange={(e) => setNewNews({ ...newNews, content: e.target.value })} rows={3} required /></div>
                  <Button type="submit" className="gold-gradient text-secondary-foreground border-0"><Plus className="mr-2 h-4 w-4" /> Add</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {news.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex items-center justify-between py-4">
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.date} · {item.category}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteNews(item.id)} className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-lg font-heading text-primary">Add Gallery Image</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={addGalleryItem} className="space-y-4">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div><Label>Title</Label><Input value={newGallery.title} onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })} required /></div>
                    <div><Label>Category</Label><Input value={newGallery.category} onChange={(e) => setNewGallery({ ...newGallery, category: e.target.value })} placeholder="Events, Campus..." required /></div>
                    <div><Label>Image URL</Label><Input value={newGallery.imageUrl} onChange={(e) => setNewGallery({ ...newGallery, imageUrl: e.target.value })} placeholder="https://..." required /></div>
                  </div>
                  <Button type="submit" className="gold-gradient text-secondary-foreground border-0"><Plus className="mr-2 h-4 w-4" /> Add</Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover" loading="lazy" />
                  <CardContent className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteGallery(item.id)} className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
