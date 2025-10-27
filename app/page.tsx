import { ClientSplashCursor } from '@/components/client-splash-cursor'
import {
  AboutSection,
  AchievementsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection
} from '@/components/portfolio-sections'

export default function Home() {
  return (
    <>
      {/* Interactive fluid background */}
      <ClientSplashCursor 
        DENSITY_DISSIPATION={1.2}
        VELOCITY_DISSIPATION={1.5}
        SPLAT_FORCE={8000}
        SPLAT_RADIUS={0.25}
        COLOR_UPDATE_SPEED={12}
        CURL={5}
        PRESSURE={0.15}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-4 md:p-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection />
        </div>
      </main>
    </>
  )
}