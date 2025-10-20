// pages/gallery.tsx
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-primary mb-4">Gallery</h1>
          <p className="text-gray-600 mb-6">High-resolution skylines and smart homes showcasing modern African architecture.</p>
        </div>
      </section>
      <Gallery />
    </div>
  );
}
