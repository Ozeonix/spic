import { motion } from "framer-motion";
import { Calendar, Megaphone, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getNews } from "@/lib/data";

const iconMap = { event: Calendar, announcement: Megaphone, news: Newspaper };

const NewsPage = () => {
  const news = getNews();

  return (
    <div>
      <section className="hero-gradient py-20 text-center">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">News & Events</motion.h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Stay updated with the latest happenings at Shripal Public Inter College.</p>
        </div>
      </section>

      <section className="section-padding container">
        <div className="space-y-6 max-w-3xl mx-auto">
          {news.map((item, i) => {
            const Icon = iconMap[item.category];
            return (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="h-4 w-4 text-secondary" />
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                      <span className="text-xs text-muted-foreground ml-auto">{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-primary mb-2">{item.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
