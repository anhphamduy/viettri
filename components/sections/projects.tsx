'use client';

import { useLanguage } from '@/components/language-provider';
import { Card } from '@/components/ui/card';
import { Search, MessageSquare, Workflow, Brain, Rocket, FileText } from 'lucide-react';

const projectIcons = [Search, MessageSquare, Workflow, Brain, Rocket, FileText];

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    { key: 'project1', icon: 0 },
    { key: 'project2', icon: 1 },
    { key: 'project3', icon: 2 },
    { key: 'project4', icon: 3 },
    { key: 'project5', icon: 4 },
    { key: 'project6', icon: 5 },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('projects.title')}
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = projectIcons[project.icon];
            return (
              <Card key={project.key} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#2E8BFE] to-[#11A97D]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {t(`projects.${project.key}.description`)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

