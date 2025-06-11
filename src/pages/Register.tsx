
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "@/components/PhoneInput";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    countryCode: "+998",
    phoneNumber: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ism kiritish majburiy";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Familiya kiritish majburiy";
    }

    if (!formData.gender) {
      newErrors.gender = "Jinsni tanlash majburiy";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Telefon raqam kiritish majburiy";
    } else if (!/^\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Telefon raqam 9 ta raqamdan iborat bo'lishi kerak";
    }

    if (!formData.password) {
      newErrors.password = "Parol kiritish majburiy";
    } else if (formData.password.length < 6) {
      newErrors.password = "Parol kamida 6 ta belgi bo'lishi kerak";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Muvaffaqiyatli!",
        description: "Tasdiqlash kodi Telegram orqali yuborildi",
      });

      // Navigate to verification page with phone number
      navigate("/verify", { 
        state: { 
          phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
          type: "register" 
        } 
      });
    } catch (error) {
      toast({
        title: "Xatolik!",
        description: "Ro'yxatdan o'tishda xatolik yuz berdi",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Auto Test</h1>
            </Link>
          </div>
        </header>
      </div>

      {/* Registration Form */}
      <Card className="w-full max-w-md mt-20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Ro'yxatdan O'tish</CardTitle>
          <CardDescription>
            Auto Test platformasida akkaunt yarating
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="firstName">Ism</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Ismingizni kiriting"
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName">Familiya</Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Familiyangizni kiriting"
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <Label htmlFor="gender">Jins</Label>
              <Select onValueChange={(value) => handleInputChange("gender", value)}>
                <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                  <SelectValue placeholder="Jinsni tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Erkak</SelectItem>
                  <SelectItem value="female">Ayol</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <p className="text-sm text-red-500 mt-1">{errors.gender}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phoneNumber">Telefon Raqam</Label>
              <PhoneInput
                countryCode={formData.countryCode}
                phoneNumber={formData.phoneNumber}
                onCountryCodeChange={(value) => handleInputChange("countryCode", value)}
                onPhoneNumberChange={(value) => handleInputChange("phoneNumber", value)}
                error={errors.phoneNumber}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500 mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Parol</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Parolni kiriting"
                  className={errors.password ? "border-red-500" : ""}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? "Yuklanmoqda..." : "Ro'yxatdan O'tish"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Allaqachon akkauntingiz bormi?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Kirish
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
