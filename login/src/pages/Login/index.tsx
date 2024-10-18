import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(email && password){
           const isLogged = await auth.signin(email, password);
            if(isLogged){
                navigate('/private');
            } else {
                alert('Email ou senha inválidos');
            }

        } else {
            alert('Preencha todos os campos');
        }
    }

   


    return (
        <div>
            <h2>Página Fechada</h2>

            <input
                type="text" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu email" 
            />

            <input 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite sua senha" 
            />
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}