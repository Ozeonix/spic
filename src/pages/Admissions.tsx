import { motion } from "framer-motion";
import { CheckCircle, Download, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  "Fill the online application form or collect from the school office.",
  "Submit required documents (birth certificate, previous report cards, photographs).",
  "Attend the interaction/assessment session on the scheduled date.",
  "Receive admission confirmation and complete fee payment.",
  "Attend orientation program before the session begins.",
];

const eligibility = [
  { grade: "Nursery", age: "3+ years as of March 31" },
  { grade: "LKG", age: "4+ years as of March 31" },
  { grade: "UKG", age: "5+ years as of March 31" },
  { grade: "Class I", age: "6+ years as of March 31" },
  { grade: "Class II–VIII", age: "Age-appropriate + Transfer Certificate" },
  { grade: "Class IX–XII", age: "Based on previous board results + TC" },
];

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const AdmissionsPage = () => (
  <div>
    <section className="hero-gradient py-20 text-center">
      <div className="container">
        <motion.h1 {...fade} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Admissions</motion.h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">Join Shripal Public Inter College and embark on a journey of academic excellence and holistic growth.</p>
      </div>
    </section>

    <section className="section-padding container">
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div {...fade}>
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Admission Process</h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Button className="gold-gradient text-secondary-foreground border-0 hover:opacity-90">
              <Download className="mr-2 h-4 w-4" /> Download Application Form
            </Button>
            <Button variant="outline" className="border-primary text-primary">
              <Download className="mr-2 h-4 w-4" /> Download Prospectus
            </Button>
          </div>
        </motion.div>

        <motion.div {...fade}>
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Eligibility</h2>
          <div className="space-y-3">
            {eligibility.map((e) => (
              <Card key={e.grade}>
                <CardContent className="flex justify-between items-center py-3">
                  <span className="font-medium text-foreground">{e.grade}</span>
                  <span className="text-sm text-muted-foreground">{e.age}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding section-alt">
      <div className="container">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary text-center">Admission Helpdesk</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">Have questions? Our admission team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-foreground"><Phone className="h-4 w-4 text-secondary" /> +91 9696823803</div>
              <div className="flex items-center gap-2 text-foreground"><Phone className="h-4 w-4 text-secondary" /> +91 8052277522</div>
            </div>
            <div className="flex items-center gap-2 text-foreground justify-center"><Mail className="h-4 w-4 text-secondary" /> info@shripalpubliccollege.com</div>
            <p className="text-xs text-muted-foreground">Office Hours: Mon–Sat, 9:00 AM – 4:00 PM</p>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default AdmissionsPage;
