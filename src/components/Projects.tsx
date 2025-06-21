
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const projects = {
  "Data Science": [
    {
      title: "Predictive Customer Analytics",
      description: "Developed a model to forecast customer lifetime value, improving marketing ROI by 25%.",
      link: "#",
      tags: ["Python", "Scikit-learn", "SQL"],
    },
    {
      title: "Sales Forecasting Engine",
      description: "Built a time-series model to predict sales with 95% accuracy.",
      link: "#",
      tags: ["R", "Prophet", "Tableau"],
    },
  ],
  "AI/ML": [
    {
      title: "Natural Language Processing for Support Tickets",
      description: "Automated ticket classification using NLP, reducing manual effort by 40%.",
      link: "#",
      tags: ["Python", "NLTK", "TensorFlow"],
    },
    {
      title: "Computer Vision for Defect Detection",
      description: "An AI-powered system to detect manufacturing defects in real-time.",
      link: "#",
      tags: ["OpenCV", "PyTorch", "CNN"],
    },
  ],
  "Open Source": [
    {
      title: "Contributor to Pandas",
      description: "Contributed performance improvements to the core pandas library.",
      link: "#",
      tags: ["Python", "Open Source", "Data Engineering"],
    },
    {
      title: "ML-Ops Pipeline Toolkit",
      description: "An open-source toolkit for building and deploying machine learning pipelines.",
      link: "#",
      tags: ["Docker", "Kubernetes", "Airflow"],
    },
  ],
};

const Projects = () => {
  return (
    <section className="py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Floating Algorithm Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {['∑', '∫', 'λ', 'π', '∞', 'α', 'β', 'θ'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-pink-300/10 text-2xl font-bold animate-float-data"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Data Network Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full">
          <defs>
            <radialGradient id="networkGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </radialGradient>
          </defs>
          {/* Network nodes */}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="url(#networkGradient)"
              className="animate-pulse-slow"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4 relative">
            <span className="data-shimmer">My Projects</span>
            <Sparkles className="inline-block ml-2 w-6 h-6 text-pink-400 neural-pulse" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my work across Data Science, AI/ML, and Open Source.
          </p>
        </div>

        <Tabs defaultValue="Data Science" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-pink-100/50 dark:bg-pink-900/20 p-1 h-auto relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 animate-pulse-slow"></div>
            {Object.keys(projects).map((category, index) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600 dark:data-[state=active]:text-pink-300 data-[state=active]:shadow-lg rounded-lg transition-all duration-300 py-2.5 text-sm font-medium neural-stat relative z-10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(projects).map(([category, projectList]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 gap-8">
                {projectList.map((project, index) => (
                  <Card 
                    key={index} 
                    className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-pink-900/10 dark:to-purple-900/10 backdrop-blur-sm border border-pink-100 dark:border-pink-500/20 hover:border-pink-300 dark:hover:border-pink-400/50 transition-all duration-300 shadow-lg hover:shadow-pink-500/10 flex flex-col data-card neural-stat group relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    {/* Data visualization dots */}
                    <div className="absolute top-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl font-medium text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow relative z-10">
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tag} 
                            className="text-xs font-medium bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300 px-2 py-1 rounded-full hover:bg-pink-200 dark:hover:bg-pink-800/50 transition-colors neural-stat"
                            style={{ animationDelay: `${tagIndex * 0.05}s` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="relative z-10">
                      <a 
                        href={project.link} 
                        className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 font-medium flex items-center transition-colors group/link"
                      >
                        View Project 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </CardFooter>

                    {/* Binary pattern overlay */}
                    <div className="absolute bottom-2 left-2 text-xs font-mono text-pink-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Array.from({ length: 8 }, () => Math.round(Math.random())).join('')}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
