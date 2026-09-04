<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import CertificationsSection from '@/components/sections/CertificationsSection.vue'
import TestimonialSection from '@/components/sections/TestimonialSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <CertificationsSection />
      <TestimonialSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>
