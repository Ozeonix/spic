import { useState } from "react";
import { motion } from "framer-motion";
import { getGallery } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import campusFront from "@/assets/campus-front.jpg";
import campusCourtyard from "@/assets/campus-courtyard.jpg";
import campusSide from "@/assets/campus-side.jpg";
import campusWide from "@/assets/campus-wide.jpg";
import republicDay from "@/assets/republic-day.jpg";
import flagHoisting from "@/assets/flag-hoisting.jpg";
import chiefGuest from "@/assets/chief-guest.jpg";
import inauguration from "@/assets/inauguration.jpg";

interface GalleryDisplayItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const localGallery: GalleryDisplayItem[] = [
  { id: "local-1", title: "Campus Front View", category: "Campus", imageUrl: campusFront },
  { id: "local-2", title: "Campus Courtyard", category: "Campus", imageUrl: campusCourtyard },
  { id: "local-3", title: "Campus Side View", category: "Campus", imageUrl: campusSide },
  { id: "local-4", title: "Campus Panorama", category: "Campus", imageUrl: campusWide },
  { id: "local-5", title: "Republic Day Celebration", category: "Events", imageUrl: republicDay },
  { id: "local-6", title: "Flag Hoisting Ceremony", category: "Events", imageUrl: flagHoisting },
  { id: "local-7", title: "Chief Guest Visit", category: "Events", imageUrl: chiefGuest },
  { id: "local-8", title: "Inauguration Ceremony", category: "Events", imageUrl: inauguration },
];

const GalleryPage = () => {
  const cmsGallery = getGallery();
  const allGallery = [...localGallery, ...cmsGallery.map(g => ({ id: g.id, title: g.title, category: g.category, imageUrl: g.imageUrl }))];
  const categories = ["All", ...Array.from(new Set(allGallery.map((g) => g.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? allGallery : allGallery.filter((g) => g.category === active);

  return (
    <div>
      <section className="hero-gradient py-20 text-center">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Gallery</motion.h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Glimpses of life at Shripal Public Inter College.</p>
        </div>
      </section>

      {/* Campus Video */}
      <section className="section-padding container">
        <h2 className="text-2xl font-heading font-bold text-primary text-center mb-6">Campus Tour</h2>
        <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video controls className="w-full" poster={campusFront}>
            <source src="/videos/campus-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="section-padding container pt-0">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={active === cat ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm transition-colors ${active === cat ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary/10"}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-primary-foreground font-heading font-semibold">{item.title}</p>
                  <p className="text-primary-foreground/70 text-xs">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
