import Image from "next/image";
import GoogleImg from "public/ui_assets/Button/google.svg";
import { Button } from "./Button";

export const GoogleButton = () => {
  return (
    <Button intent="google">
      <Image className="h-6" src={GoogleImg} alt="Inicia sesión con Google" />
      Iniciar sesión con Google
    </Button>
  );
};
