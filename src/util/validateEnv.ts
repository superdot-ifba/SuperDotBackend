import { cleanEnv, num, str } from "envalid";

const rawNodeEnv = process.env.NODE_ENV;
const isProduction = rawNodeEnv === "production";

export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str({ desc: "URI de conexão com o banco de dados MongoDB" }),
    ACCESS_TOKEN_PRIVATE_KEY: str({ desc: "Chave privada para assinar o access token JWT" }),
    ACCESS_TOKEN_PUBLIC_KEY: str({ desc: "Chave pública para verificar o access token JWT" }),
    REFRESH_TOKEN_PRIVATE_KEY: str({ desc: "Chave privada para assinar o refresh token JWT" }),
    REFRESH_TOKEN_PUBLIC_KEY: str({ desc: "Chave pública para verificar o refresh token JWT" }),
    FRONT_END_URL: str({ desc: "URL do frontend (ex: https://seusite.com)" }),

    // Variáveis com valores padrão
    PORT: num({
        default: 3000,
        desc: "Porta da aplicação (usar porta automática)"
    }),
    SALT_ROUNDS: num({ default: 10 }),
    ACCESS_TOKEN_TTL: num({ default: 3600 }), // 1 hora em segundos
    REFRESH_TOKEN_TTL: num({ default: 2592000 }), // 30 dias em segundos
    PARTICIPANT_TOKEN_TTL: num({ default: 86400 }), // 24 horas em segundos

    // Configuração de ambiente
    NODE_ENV: str({
        choices: ['development', 'test', 'production'],
        default: "production" // Default seguro para ambiente de produção
    }),

    // Em produção preferimos SMTP explícito em vez de depender de presets do provider.

    EMAIL_USER: str({ default: isProduction ? undefined : "" }),
    EMAIL_PASS: str({ default: isProduction ? undefined : "" }),
    EMAIL_SERVICE: str({ default: "gmail" }),
    EMAIL_HOST: str({ default: isProduction ? "smtp.gmail.com" : "" }),
    EMAIL_PORT: num({ default: 465 }),
    EMAIL_SECURE: str({
        choices: ["true", "false"],
        default: "true",
    })
});
