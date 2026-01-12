import { Target, Mic, Brain, BarChart3, Gamepad2, Users } from "lucide-react";

const objectives = [
  {
    icon: Mic,
    title: "Real-Time Speech Analysis",
    description: "Develop an accurate speech recognition system capable of detecting and classifying various types of disfluencies in children's speech.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "AI-Driven Personalization",
    description: "Implement machine learning models that adapt therapy exercises based on individual progress and specific speech patterns.",
    color: "text-highlight",
    bg: "bg-highlight/10",
  },
  {
    icon: Gamepad2,
    title: "Gamified Therapy Experience",
    description: "Design engaging, age-appropriate interactive exercises that maintain children's motivation throughout their therapy journey.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Progress Tracking",
    description: "Create detailed analytics and reporting features for therapists and parents to monitor improvement over time.",
    color: "text-accent-foreground",
    bg: "bg-accent",
  },
  {
    icon: Users,
    title: "Accessibility & Inclusivity",
    description: "Ensure the application is accessible to children with diverse needs and available to families regardless of geographic location.",
    color: "text-secondary-foreground",
    bg: "bg-secondary",
  },
  {
    icon: Target,
    title: "Clinical Validation",
    description: "Conduct user testing with speech therapists and target users to validate effectiveness and gather improvement feedback.",
    color: "text-primary",
    bg: "bg-muted",
  },
];

const ObjectivesSection = () => {
  return (
    <section id="objectives" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Project Objectives</h2>
        <p className="section-subtitle mx-auto">
          Clear, measurable goals guiding the development of an effective therapeutic solution
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="card-soft group hover:shadow-elevated transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-2xl ${objective.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <objective.icon className={`w-7 h-7 ${objective.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {objective.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {objective.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ObjectivesSection;
