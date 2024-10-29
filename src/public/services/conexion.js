import pg from 'pg';
const {Client}  = pg;

 const config = {
    user: 'app_bd_kavd_user',
    host: 'dpg-csfvt28gph6c73cv82rg-a.oregon-postgres.render.com',
    database: 'app_bd_kavd',
    password: '2F5ltZ3a49UQxllq28bFP8ohjKxoxoou',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
 }

export async function Conectar(params){
    const client = new Client(config);
    try{
        await client.connect();
        console.log('Conectado');
    }catch{
        console.log('Error de conexión');
    }
}