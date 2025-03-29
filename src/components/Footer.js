import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Automotores Giugno</h3>
            <p className="text-gray-400">
              Cnel. Pringles 18, B1824 Lanús,<br />
              Provincia de Buenos Aires
            </p>
            <p className="text-gray-400 mt-2">
              Tel: 011 4241-5108
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
            <p className="text-gray-400">
              Lunes a Viernes: 9:00 - 18:00<br />
              Sábados: 9:00 - 13:00<br />
              Domingos: Cerrado
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Automotores Giugno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 