
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, BookOpen, Users, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Auto Test</h1>
          </div>
          <nav className="flex space-x-4">
            <Link to="/about">
              <Button variant="ghost">Biz haqimizda</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">Kirish</Button>
            </Link>
            <Link to="/register">
              <Button>Ro'yxatdan o'tish</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Haydovchilik Guvohnomasi Imtihoniga
            <span className="text-blue-600 block mt-2">Tayyorgarlik Ko'ring</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Auto Test platformasi orqali haydovchilik guvohnomasi olish uchun nazariy bilimlaringizni sinab ko'ring va imtihonga mukammal tayyorgarlik ko'ring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Bepul Boshlash
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Batafsil Ma'lumot
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Keng Qamrovli Test</CardTitle>
              <CardDescription>
                Yo'l harakati qoidalari bo'yicha 1000+ savol bilan amaliyot qiling
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Real Imtihon Sharoiti</CardTitle>
              <CardDescription>
                Haqiqiy imtihon kabi vaqt chegarasi va savollar bilan mashq qiling
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Statistika va Tahlil</CardTitle>
              <CardDescription>
                O'z natijalaringizni kuzatib boring va zaif tomonlaringizni aniqlang
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-gray-600">Foydalanuvchilar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-gray-600">Muvaffaqiyat Darajasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">1,000+</div>
              <div className="text-gray-600">Test Savollari</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Onlayn Qo'llab-quvvatlash</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="h-6 w-6" />
            <span className="text-lg font-semibold">Auto Test</span>
          </div>
          <p className="text-gray-400">© 2024 Auto Test. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
