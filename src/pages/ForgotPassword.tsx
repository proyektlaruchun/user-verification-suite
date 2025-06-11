
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "@/components/PhoneInput";

const ForgotPassword = () => {
  const [step, setStep] = useState<"phone" | "verify" | "newPassword">("phone");
  const [formData, setFormData] = useState({
    phoneNumber: "",
    countryCode: "+998",
    verificationCode: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const validatePhoneStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Telefon raqam kiritish majburiy";
    } else if (!/^\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Telefon raqam 9 ta raqamdan iborat bo'lishi kerak";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateVerifyStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.verificationCode.trim()) {
      newErrors.verificationCode = "Tasdiqlash kodini kiriting";
    } else if (!/^\d{6}$/.test(formData.verificationCode)) {
      newErrors.verificationCode = "Tasdiqlash kodi 6 ta raqamdan iborat bo'lishi kerak";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePasswordStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.newPassword) {
      newErrors.newPassword = "Yangi parol kiritish majburiy";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Parol kamida 6 ta belgi bo'lishi kerak";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Parolni takrorlash majburiy";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Parollar bir xil emas";
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

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhoneStep()) {
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Kod yuborildi!",
        description: "Tasdiqlash kodi Telegramga yuborildi",
      });
      
      setStep("verify");
    } catch (error) {
      toast({
        title: "Xatolik!",
        description: "Telefon raqam topilmadi",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateVerifyStep()) {
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Kod tasdiqlandi!",
        description: "Yangi parol yarating",
      });
      
      setStep("newPassword");
    } catch (error) {
      toast({
        title: "Xatolik!",
        description: "Tasdiqlash kodi noto'g'ri",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePasswordStep()) {
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Muvaffaqiyatli!",
        description: "Parol muvaffaqiyatli o'zgartirildi",
      });
      
      navigate("/login");
    } catch (error) {
      toast({
        title: "Xatolik!",
        description: "Parolni o'zgartirishda xatolik",
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

      {/* Forgot Password Form */}
      <Card className="w-full max-w-md mt-20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {step === "phone" && "Parolni Unutdim"}
            {step === "verify" && "Tasdiqlash Kodi"}
            {step === "newPassword" && "Yangi Parol"}
          </CardTitle>
          <CardDescription>
            {step === "phone" && "Telefon raqamingizni kiriting"}
            {step === "verify" && `${formData.countryCode}${formData.phoneNumber} raqamiga 6 raqamli kod yuborildi`}
            {step === "newPassword" && "Yangi parolingizni yarating"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "phone" && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
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

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Yuklanmoqda..." : "Davom Etish"}
              </Button>
            </form>
          )}

          {step === "verify" && (
            <form onSubmit={handleVerifySubmit} className="space-y-4">
              <div>
                <Label htmlFor="verificationCode">Tasdiqlash Kodi</Label>
                <Input
                  id="verificationCode"
                  type="text"
                  maxLength={6}
                  value={formData.verificationCode}
                  onChange={(e) => handleInputChange("verificationCode", e.target.value)}
                  placeholder="6 raqamli kodni kiriting"
                  className={errors.verificationCode ? "border-red-500" : ""}
                />
                {errors.verificationCode && (
                  <p className="text-sm text-red-500 mt-1">{errors.verificationCode}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Tekshirilmoqda..." : "Tasdiqlash"}
              </Button>
            </form>
          )}

          {step === "newPassword" && (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <Label htmlFor="newPassword">Yangi Parol</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange("newPassword", e.target.value)}
                    placeholder="Yangi parolni kiriting"
                    className={errors.newPassword ? "border-red-500" : ""}
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
                {errors.newPassword && (
                  <p className="text-sm text-red-500 mt-1">{errors.newPassword}</p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Parolni Takrorlang</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="Parolni qayta kiriting"
                    className={errors.confirmPassword ? "border-red-500" : ""}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Saqlanmoqda..." : "Parolni O'zgartirish"}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-blue-600 hover:underline">
              Loginni eslaysizmi? Kirish
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
