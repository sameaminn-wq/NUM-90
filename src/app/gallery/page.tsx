import React from 'react';
import { galleryImages } from '@/data/portfolioData';
import GalleryImageComponent from '@/components/GalleryImage';
import SectionHeader from '@/components/sections/SectionHeader';

export default function GalleryPage() {
  const certificates = galleryImages.filter(img => img.category === 'certificate');
  const projects = galleryImages.filter(img => img.category === 'project');
  const volunteer = galleryImages.filter(img => img.category === 'volunteer');

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <SectionHeader
        title="Gallery"
        subtitle="Visual Documentation"
        description="Authentic photographic and digital verification cards"
      />

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((img) => (
            <GalleryImageComponent key={img.id} image={img} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Certifications</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {certificates.map((img) => (
            <GalleryImageComponent key={img.id} image={img} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Volunteer Work</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {volunteer.map((img) => (
            <GalleryImageComponent key={img.id} image={img} />
          ))}
        </div>
      </section>
    </div>
  );
}