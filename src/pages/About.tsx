
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Target, Award, Clock, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Auto Test</h1>
          </Link>
          <nav className="flex space-x-4">
            <Link to="/">
              <Button variant="ghost">Bosh sahifa</Button>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Biz Haqimizda
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Auto Test - bu haydovchilik guvohnomasi olish uchun eng yaxshi onlayn tayyorgarlik platformasi.
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-12">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <CardTitle className="text-center text-2xl">Bizning Maqsadimiz</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600">
                Har bir foydalanuvchiga haydovchilik guvohnomasi imtihonida muvaffaqiyat qozonish uchun 
                eng sifatli va samarali ta'lim materiallarini taqdim etish. Biz yo'l xavfsizligini ta'minlash 
                va malakali haydovchilar tayyorlash uchun ishlaymiz.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle>Keng Qamrovli Materiallar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yo'l harakati qoidalari, belgilar, xavfsizlik choralari va amaliy mashqlar bo'yicha 
                  to'liq ta'lim materiallari.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Moslashuvchan Jadval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  24/7 mavjud bo'lgan platforma orqali istalgan vaqtda o'qish va mashq qilish imkoniyati.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>Yuqori Sifat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rasmiy imtihon talablariga mos keladigan savollar va eng oxirgi yangilanishlar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-orange-600 mb-4" />
                <CardTitle>Tajribali Jamoa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Avtomobil ta'limi sohasida ko'p yillik tajribaga ega mutaxassislar tomonidan yaratilgan.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Bizning Yutuqlarimiz</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Muvaffaqiyatli Bitiruvchilar</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600">Birinchi Urinishda O'tish</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">1,000+</div>
                  <div className="text-gray-600">Test Savollari</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
                  <div className="text-gray-600">Yillik Tajriba</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Bugun O'qishni Boshlang!
            </h2>
            <p className="text-gray-600 mb-6">
              Haydovchilik guvohnomasi olish yo'lida birinchi qadamni tashlang
            </p>
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Bepul Ro'yxatdan O'tish
              </Button>
            </Link>
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

export default About;
