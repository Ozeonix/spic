import { motion } from "framer-motion";
import { BookOpen, Users, FlaskConical, Calculator, Globe, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const departments = [
  { icon: FlaskConical, name: "Science", subjects: "Physics, Chemistry, Biology" },
  { icon: Calculator, name: "Mathematics", subjects: "Pure & Applied Mathematics" },
  { icon: Globe, name: "Social Studies", subjects: "History, Geography, Civics" },
  { icon: BookOpen, name: "Languages", subjects: "English, Hindi, Sanskrit" },
  { icon: Palette, name: "Arts & Music", subjects: "Visual Arts, Music, Theatre" },
  { icon: Users, name: "Physical Education", subjects: "Sports, Yoga, Health" },
];

const classes = [
  { level: "Pre-Primary", grades: "Nursery, LKG, UKG", focus: "Play-based learning, motor skills, socialization" },
  { level: "Primary", grades: "Classes I – V", focus: "Foundation in literacy, numeracy, and exploration" },
  { level: "Middle School", grades: "Classes VI – VIII", focus: "Critical thinking, project-based learning" },
  { level: "Secondary", grades: "Classes IX – X", focus: "UP Board preparation, career guidance" },
  { level: "Senior Secondary", grades: "Classes XI – XII", focus: "Specialization in Science, Commerce, or Humanities" },
];

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const AcademicsPage = () => (
  <div>
    <section className="hero-gradient py-20 text-center">
      <div className="container">
        <motion.h1 {...fade} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Academics</motion.h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">A comprehensive curriculum designed to inspire curiosity and academic excellence.</p>
      </div>
    </section>

    <section id="curriculum" className="section-padding container">
      <h2 className="text-3xl font-heading font-bold text-primary mb-4">UP Board Curriculum</h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">Shripal Public Inter College follows the UP Board (UPMSP) curriculum enriched with activity-based learning, technology integration, and continuous assessment. Our teaching methodology focuses on conceptual understanding rather than rote learning.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((c) => (
          <motion.div key={c.level} {...fade}>
            <Card className="h-full border-l-4 border-l-secondary">
              <CardContent className="pt-4">
                <h3 className="font-heading font-semibold text-primary">{c.level}</h3>
                <p className="text-sm text-secondary font-medium">{c.grades}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.focus}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    <section id="departments" className="section-padding section-alt">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-primary text-center mb-10">Departments</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div key={dept.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <dept.icon className="h-10 w-10 mx-auto text-secondary mb-3" />
                  <h3 className="font-heading font-semibold text-primary mb-1">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.subjects}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section id="faculty" className="section-padding container">
      <h2 className="text-3xl font-heading font-bold text-primary text-center mb-4">Our Faculty</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Our team of 50+ experienced educators holds advanced degrees from premier universities with 7+ years of teaching experience. Regular training programs ensure our faculty stays updated with the latest pedagogical practices.</p>
      <div className="grid sm:grid-cols-3 gap-8 text-center">
        {[{ value: "50+", label: "Teachers" }, { value: "85%", label: "Post-Graduate" }, { value: "7+", label: "Avg. Years Experience" }].map((s) => (
          <motion.div key={s.label} {...fade}>
            <p className="text-4xl font-heading font-bold text-primary">{s.value}</p>
            <p className="text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default AcademicsPage;
