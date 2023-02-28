import { Button } from "@ui/Button/Button";

export const FacebookButton = () => {
  return (
    <Button intent="facebook">
      <img
        className="h-6"
        src="ui_assets/Button/facebook.svg"
        alt="Inicia sesión con Facebook"
      />
      Iniciar sesión con Facebook
    </Button>
  );
};
