import { motion } from "framer-motion";
import { Target, Eye, Award, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import schoolBuilding from "@/assets/campus-front.jpg";

const leaders = [
  { name: "Shri SitaSaran Tiwari", role: "Chairman", desc: "Ex Principal, KCRCIC. A visionary leader dedicated to quality education." },
  { name: "Dr. Aradhana Tiwari", role: "Principal", desc: "B.A., M.A., Ph.D. in English." },
  { name: "Ms. Sangeeta Tiwari", role: "Vice Principal", desc: "B.Ed in Maths with 10+ years of experience in academic administration." },
  { name: "Mr. Avinash Tiwari", role: "Academic Director", desc: "B.Sc, M.Sc, LLB with 7+ years expertise in curriculum design and pedagogy." },
];

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const AboutPage = () => (
  <div>
    {/* Page Header */}
    <section className="hero-gradient py-20 text-center">
      <div className="container">
        <motion.h1 {...fade} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">About Us</motion.h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">Discover our legacy, values, and the people who make Shripal Public Inter College exceptional.</p>
      </div>
    </section>

    {/* History */}
    <section id="history" className="section-padding container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fade}>
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our History</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Founded in 2005, Shripal Public Inter College began as a small school with a big vision — to provide world-class education accessible to all. Over two decades, we have grown from a single building to a sprawling campus serving over 5,000 students.</p>
          <p className="text-muted-foreground leading-relaxed">Today, we stand as one of the most respected educational institutions in the region, consistently producing top achievers in academics, sports, and arts.</p>
        </motion.div>
        <motion.img {...fade} src={schoolBuilding} alt="School Building" className="rounded-lg shadow-xl w-full" loading="lazy" width={1280} height={720} />
      </div>
    </section>

    {/* Mission & Vision */}
    <section id="mission" className="section-padding section-alt">
      <div className="container grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To provide a nurturing and stimulating environment where every student can discover their potential, develop critical thinking skills, and become responsible global citizens." },
          { icon: Eye, title: "Our Vision", text: "To be a leading educational institution recognized for academic excellence, innovative teaching methods, and holistic development of students who will shape a better tomorrow." },
        ].map((item) => (
          <motion.div key={item.title} {...fade}>
            <Card className="h-full border-t-4 border-t-secondary">
              <CardContent className="pt-6">
                <item.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Leadership */}
    <section id="leadership" className="section-padding container">
      <h2 className="text-3xl font-heading font-bold text-primary text-center mb-10">Our Leadership</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map((person, i) => (
          <motion.div key={person.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-primary">{person.name}</h3>
                <p className="text-secondary font-medium text-sm">{person.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{person.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Infrastructure */}
    <section id="infrastructure" className="section-padding section-alt">
      <div className="container text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">World-Class Infrastructure</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">Our 2-acre campus features modern facilities designed to support every aspect of student development.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Smart Classrooms", "Science Laboratories", "Computer Labs", "Library & Media Center", "Sports Complex", "Auditorium"].map((item) => (
            <Card key={item} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center gap-3 py-4">
                <Building className="h-5 w-5 text-secondary shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
