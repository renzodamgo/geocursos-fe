import { Button } from './Button';

export const GoogleButton = () => {
	return (
		<Button intent="google">
			<img
				className="h-6"
				src="ui_assets/Button/google.svg"
				alt="Inicia sesión con Google"
			/>
			Iniciar sesión con Google
		</Button>
	);
};
