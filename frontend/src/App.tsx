import React from 'react';

// Componente de Card (Não mexa aqui, ele cuida do visual)
const AulaCard = ({ titulo, descricao, imagemRobo }) => {
  return (
    <div className="aula-card bg-white rounded-lg shadow-lg p-6 text-center">
      <img
        src={imagemRobo}
        alt="Robô Instrutor"
        className="robo-icon w-32 h-32 object-contain mx-auto mb-4"
        onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" }}
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
      <p className="text-gray-600 mb-4">{descricao}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        INICIAR JORNADA
      </button>
    </div>
  );
};

function App() {
  const roboUrl = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png";
  
  // --- ADICIONE SEUS MÓDULOS AQUI ---
  const meusModulos = [
    { id: 1, titulo: "MÓDULO 01", descricao: "Descubra como os robôs pensam e aprenda a falar com eles!" },
    { id: 2, titulo: "MÓDULO 02", descricao: "Crie suas próprias artes e histórias usando Inteligência Artificial." },
    { id: 3, titulo: "MÓDULO 03", descricao: "O laboratório secreto onde a tecnologia encontra a diversão." },
    { id: 4, titulo: "MÓDULO 04", descricao: "Insira aqui a descrição do seu quarto módulo." },
    { id: 5, titulo: "MÓDULO 05", descricao: "Insira aqui a descrição do seu quinto módulo." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">A.I KIDS LABS</h1>
        <p className="text-xl text-gray-600">O Futuro da Educação chegou</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {meusModulos.map((modulo) => (
          <AulaCard 
            key={modulo.id}
            titulo={modulo.titulo}
            descricao={modulo.descricao}
            imagemRobo={roboUrl} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
