import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy, BookOpen, ArrowRight, Calendar, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getNews } from "@/lib/data";
import heroImage from "@/assets/campus-front.jpg";
import schoolBuilding from "@/assets/campus-courtyard.jpg";

const stats = [
  { icon: GraduationCap, value: "5000+", label: "Students" },
  { icon: Users, value: "50+", label: "Teachers" },
  { icon: Trophy, value: "150+", label: "Awards" },
  { icon: BookOpen, value: "20+", label: "Years" },
];

const highlights = [
  { title: "UP Board Affiliated", description: "Recognized and affiliated with the Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP)." },
  { title: "Smart Classrooms", description: "Technology-enabled learning with interactive smart boards in every classroom." },
  { title: "Holistic Development", description: "Focus on academics, sports, arts, and character building." },
  { title: "Experienced Faculty", description: "50+ highly qualified teachers with 7+ years of experience." },
];

const HomePage = () => {
  const news = getNews().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Shripal Public Inter College Campus" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="gold-gradient text-secondary-foreground border-0 text-sm px-4 py-1 mb-6">Admissions Open 2026-27</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 text-balance leading-tight">
              Welcome to<br />Shripal Public Inter College
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nurturing minds, building character, and shaping the leaders of tomorrow since 2005.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gold-gradient text-secondary-foreground border-0 hover:opacity-90 font-semibold text-base px-8">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base px-8">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <Card className="text-center py-6 shadow-lg border-0">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 mx-auto text-secondary mb-2" />
                  <p className="text-3xl font-bold font-heading text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">A Legacy of Excellence</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For over two decades, Shripal Public Inter College has been at the forefront of quality education, combining rigorous academics with comprehensive extracurricular programs to produce well-rounded individuals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our sprawling campus, state-of-the-art facilities, and dedicated faculty create an environment where students thrive and discover their true potential.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={schoolBuilding} alt="School Building" className="rounded-lg shadow-xl w-full" loading="lazy" width={1280} height={720} />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding section-alt">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">Why Choose Shripal Public Inter College</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
                  <CardContent className="pt-6">
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding container">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Latest News & Events</h2>
          <Button asChild variant="ghost" className="text-primary">
            <Link to="/news">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    {item.category === "event" ? <Calendar className="h-4 w-4 text-secondary" /> : <Megaphone className="h-4 w-4 text-secondary" />}
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    <span className="text-xs text-muted-foreground ml-auto">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Begin Your Journey With Us</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Admissions are open for the 2026-27 academic session. Join a community dedicated to excellence.</p>
          <Button asChild size="lg" className="gold-gradient text-secondary-foreground border-0 hover:opacity-90 font-semibold px-10">
            <Link to="/admissions">Apply for Admission</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
