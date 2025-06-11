
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface PhoneInputProps {
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  error?: string;
}

const countryCodes = [
  { code: "+998", country: "🇺🇿 O'zbekiston", flag: "🇺🇿" },
  { code: "+996", country: "🇰🇬 Qirg'iziston", flag: "🇰🇬" },
  { code: "+992", country: "🇹🇯 Tojikiston", flag: "🇹🇯" },
  { code: "+993", country: "🇹🇲 Turkmaniston", flag: "🇹🇲" },
  { code: "+7", country: "🇰🇿 Qozog'iston", flag: "🇰🇿" },
  { code: "+7", country: "🇷🇺 Rossiya", flag: "🇷🇺" },
  { code: "+90", country: "🇹🇷 Turkiya", flag: "🇹🇷" },
  { code: "+1", country: "🇺🇸 AQSh", flag: "🇺🇸" },
  { code: "+44", country: "🇬🇧 Angliya", flag: "🇬🇧" },
];

const PhoneInput = ({ 
  countryCode, 
  phoneNumber, 
  onCountryCodeChange, 
  onPhoneNumberChange, 
  error 
}: PhoneInputProps) => {
  return (
    <div className="flex space-x-2">
      <Select value={countryCode} onValueChange={onCountryCodeChange}>
        <SelectTrigger className={`w-32 ${error ? "border-red-500" : ""}`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((item, index) => (
            <SelectItem key={`${item.code}-${index}`} value={item.code}>
              <span className="flex items-center space-x-2">
                <span>{item.flag}</span>
                <span>{item.code}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={phoneNumber}
        onChange={(e) => onPhoneNumberChange(e.target.value)}
        placeholder="901234567"
        className={`flex-1 ${error ? "border-red-500" : ""}`}
        maxLength={9}
      />
    </div>
  );
};

export default PhoneInput;
