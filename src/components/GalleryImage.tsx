import React from 'react';
import { GalleryImage } from '@/types/portfolio';

export default function GalleryImageComponent({ image }: { image: GalleryImage }) {
  return (
    <div className="bg-slate-800/30 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-colors duration-200">
      <div className="relative w-full h-48 bg-slate-900 flex items-center justify-center p-4">
        {/* Placeholder styling to survive local environment lack of images */}
        <span className="text-slate-600 font-mono text-xs text-center uppercase tracking-widest">{image.alt}</span>
      </div>
      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <p className="text-sm text-white font-medium line-clamp-1">{image.caption}</p>
        <span className="text-xs text-emerald-400 capitalize">{image.category}</span>
      </div>
    </div>
  );
}
