import { Login } from "./server_login.js";
import { Cxmsg } from "./../caixa_mensagem_personalizada/cxmsg.js";

const callback_ok=()=>{

}    

const callback_nao_ok=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
        textos: null,
        comando_sn:()=>{}
    }
    Cxmsg.mostrar(config,"Erro","Usuário ou senha incorretos");
}

const configlogin={
    cor:"048", //não precisa do #
    img:"logo.png",
    endpoint:"https://00cc0f3a-b1f5-4243-8188-1c42b776a6d0-00-14em5c9k2xfgs.spock.replit.dev"
}

Login.login(callback_ok,callback_nao_ok,configlogin);