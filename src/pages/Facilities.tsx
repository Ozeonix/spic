import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Dumbbell, Bus, Laptop, Theater } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  { icon: FlaskConical, title: "Science Laboratories", desc: "Fully equipped Physics, Chemistry, and Biology labs with modern apparatus for hands-on experimentation." },
  { icon: BookOpen, title: "Library & Resource Center", desc: "Over 25,000 books, digital resources, reading rooms, and a research section for senior students." },
  { icon: Dumbbell, title: "Sports Complex", desc: "Cricket ground, basketball & tennis courts, swimming pool, indoor games, and professional coaching." },
  { icon: Bus, title: "Transport", desc: "3 GPS-enabled buses covering all major routes with trained drivers and attendants." },
  { icon: Laptop, title: "Computer & IT Labs", desc: "Modern computer lab with high-speed internet and coding classes." },
  { icon: Theater, title: "Auditorium & Arts", desc: "Dedicated auditorium, music rooms, and art studios for performing arts." },
];

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const FacilitiesPage = () => (
  <div>
    <section className="hero-gradient py-20 text-center">
      <div className="container">
        <motion.h1 {...fade} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Facilities</motion.h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">State-of-the-art infrastructure designed to support every aspect of student life.</p>
      </div>
    </section>

    <section className="section-padding container">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
            <Card className="h-full hover:shadow-lg transition-shadow group">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <f.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding section-alt">
      <div className="container text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Campus at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[{ v: "2 Acres", l: "Campus Area" }, { v: "20+", l: "Classrooms" }, { v: "4+", l: "Laboratories" }, { v: "3", l: "Buses" }].map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-heading font-bold text-secondary">{s.v}</p>
              <p className="text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default FacilitiesPage;
