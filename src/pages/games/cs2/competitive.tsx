import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const CS2Competitive = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Compétitif CS2</h1>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Gestion de Compétitif CS2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Page de gestion de Compétitif CS2 en construction...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};