import { app } from './app';
import { config } from './config/env';

app.listen(config.app_port, () => {
    console.log(`Servidor "${config.app_name}" iniciado na porta: ${config.app_port}`);
});
