import { Card } from '@/components/ui/card';

export const ColorPalettes = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Color Palettes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Card className="h-20 dayz-style-1"></Card>
          <p className="text-sm font-medium">Gray Gradient</p>
        </div>
        <div className="space-y-2">
          <Card className="h-20 dayz-style-2"></Card>
          <p className="text-sm font-medium">Green Gradient</p>
        </div>
        <div className="space-y-2">
          <Card className="h-20 dayz-style-3"></Card>
          <p className="text-sm font-medium">Blue Gradient</p>
        </div>
        <div className="space-y-2">
          <Card className="h-20 dayz-style-4"></Card>
          <p className="text-sm font-medium">Red Gradient</p>
        </div>
      </div>
    </section>
  );
};