0- Criar o Index.html na raiz
1- npm init -y  // cria o packet.json
2- Criar pasta src e main.js dentro
3- <script type="module" src="./src/main.js"></script> // acrescentar no html
4- npm install //nomedabiblioteca
5- criar .gitignore e escrever dentro node_modules/
6- "type": "module" // add no packet.json
7- npm install vite // instala o vite
8- "dev": "vite --open" // adicionar no package.json em scripts - isso add o comando npm run dev 'testa a aplicação'
9- npm init @eslint/config // instala o lint 
10- npx eslint ./src // roda o lint
11- pode add atalho por meio de "lint": "eslint ./src" em scripts no package.json
import "./style.css"; // como importar arquivos de agora em diante.