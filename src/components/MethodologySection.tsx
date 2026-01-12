import { Workflow, Code2, Database, HardDrive, Cpu } from "lucide-react";

const methodologyItems = [
  {
    icon: Workflow,
    title: "Development Approach",
    description: "Agile methodology with iterative sprints, enabling continuous feedback integration from speech therapy experts and end-user testing sessions.",
  },
  {
    icon: Code2,
    title: "Tools & Frameworks",
    description: "Cross-platform mobile development using React Native, with Python-based backend services for AI model serving and data processing.",
  },
  {
    icon: Database,
    title: "Speech Datasets",
    description: "Curated datasets including UCLASS, SEP-28k, and custom recordings from partner clinics, with proper ethical approval and data anonymization.",
  },
  {
    icon: HardDrive,
    title: "Hardware Requirements",
    description: "Standard mobile devices with microphone access; cloud GPU instances for model training and inference optimization.",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="bg-muted/30 border-y border-border">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-highlight/10 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-highlight" />
          </div>
          <h2 className="section-title mb-0">Methodology</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Methodology Items */}
          <div className="space-y-6">
            {methodologyItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-card shadow-soft flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: System Architecture Placeholder */}
          <div className="card-soft">
            <h3 className="font-semibold text-foreground mb-4">System Architecture</h3>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 via-highlight/5 to-success/5 border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Workflow className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">
                  System Architecture Diagram
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  (Insert diagram here)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
