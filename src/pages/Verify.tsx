
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Verify = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const phoneNumber = location.state?.phoneNumber || "";
  const type = location.state?.type || "register"; // register or login

  useEffect(() => {
    if (!phoneNumber) {
      navigate("/register");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phoneNumber, navigate]);

  const handleVerify = async () => {
    if (code.length !== 6) {
      toast({
        title: "Xatolik!",
        description: "6 raqamli kodni to'liq kiriting",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (type === "register") {
        toast({
          title: "Muvaffaqiyatli!",
          description: "Ro'yxatdan o'tish yakunlandi",
        });
        navigate("/");
      } else {
        toast({
          title: "Muvaffaqiyatli!",
          description: "Tizimga muvaffaqiyatli kirdingiz",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Xatolik!",
        description: "Tasdiqlash kodida xatolik",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setCountdown(60);
    toast({
      title: "Kod yuborildi!",
      description: "Yangi tasdiqlash kodi Telegramga yuborildi",
    });
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

      {/* Verification Form */}
      <Card className="w-full max-w-md mt-20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Tasdiqlash Kodi</CardTitle>
          <CardDescription>
            {phoneNumber} raqamiga 6 raqamli kod yuborildi
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={code}
              onChange={(value) => setCode(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button 
            onClick={handleVerify}
            className="w-full" 
            disabled={isLoading || code.length !== 6}
          >
            {isLoading ? "Tekshirilmoqda..." : "Tasdiqlash"}
          </Button>

          <div className="text-center space-y-2">
            {countdown > 0 ? (
              <p className="text-sm text-gray-600">
                Qayta yuborish: {countdown} soniya
              </p>
            ) : (
              <Button
                variant="ghost"
                onClick={handleResendCode}
                className="text-blue-600"
              >
                Kodni qayta yuborish
              </Button>
            )}
          </div>

          <div className="text-center">
            <Link 
              to={type === "register" ? "/register" : "/login"} 
              className="text-sm text-blue-600 hover:underline"
            >
              Orqaga qaytish
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verify;
