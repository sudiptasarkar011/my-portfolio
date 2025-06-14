
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my work across Data Science, AI/ML, and Open Source.
          </p>
        </div>

        <Tabs defaultValue="Data Science" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-pink-100/50 dark:bg-pink-900/20 p-1 h-auto">
            {Object.keys(projects).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600 dark:data-[state=active]:text-pink-300 data-[state=active]:shadow-lg rounded-lg transition-all duration-300 py-2.5 text-sm font-medium"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(projects).map(([category, projectList]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 gap-8">
                {projectList.map((project, index) => (
                  <Card key={index} className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-pink-900/10 dark:to-purple-900/10 backdrop-blur-sm border border-pink-100 dark:border-pink-500/20 hover:border-pink-300 dark:hover:border-pink-400/50 transition-all duration-300 shadow-lg hover:shadow-pink-500/10 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl font-medium text-foreground">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a href={project.link} className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 font-medium flex items-center transition-colors">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </CardFooter>
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
