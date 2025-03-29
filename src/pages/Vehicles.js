import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function Vehicles() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currency, setCurrency] = useState('USD');

  // Simulación de datos de vehículos
  const vehicles = [
    {
      id: 1,
      name: "Toyota Hilux 4x4",
      type: "Camioneta",
      brand: "Toyota",
      year: 2023,
      price: 45000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Excelente estado, única mano, servicio oficial al día."
    },
    {
      id: 2,
      name: "Ford F-150 Raptor",
      type: "Camioneta",
      brand: "Ford",
      year: 2022,
      price: 65000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Versión Raptor, full equipo, techo panorámico."
    },
    {
      id: 3,
      name: "Chevrolet Silverado",
      type: "Camioneta",
      brand: "Chevrolet",
      year: 2023,
      price: 55000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "LTZ, caja larga, techo corredizo."
    },
    {
      id: 4,
      name: "RAM 1500",
      type: "Camioneta",
      brand: "RAM",
      year: 2022,
      price: 60000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Limited, air suspension, panoramic roof."
    },
    {
      id: 5,
      name: "Toyota Corolla",
      type: "Auto",
      brand: "Toyota",
      year: 2023,
      price: 25000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Sedan compacto, económico y confiable."
    },
    {
      id: 6,
      name: "Honda Civic",
      type: "Auto",
      brand: "Honda",
      year: 2023,
      price: 28000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Versión Sport, techo corredizo, ruedas deportivas."
    },
    {
      id: 7,
      name: "Scania R450",
      type: "Camion",
      brand: "Scania",
      year: 2022,
      price: 120000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Camión de larga distancia, caja automática, cabina premium."
    },
    {
      id: 8,
      name: "Volvo FH16",
      type: "Camion",
      brand: "Volvo",
      year: 2023,
      price: 150000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Potencia máxima, tecnología de seguridad avanzada."
    },
    {
      id: 9,
      name: "Honda CB 650R",
      type: "Moto",
      brand: "Honda",
      year: 2023,
      price: 12000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Naked deportiva, ABS, luces LED, display digital."
    },
    {
      id: 10,
      name: "Yamaha MT-07",
      type: "Moto",
      brand: "Yamaha",
      year: 2023,
      price: 10000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      description: "Naked versátil, ligera y divertida de conducir."
    }
  ];

  // Tipos de vehículos disponibles
  const types = ["Auto", "Camioneta", "Camion", "Moto"];

  // Marcas disponibles
  const brands = ["Toyota", "Ford", "Chevrolet", "RAM", "Honda", "Nissan", "Scania", "Volvo", "Yamaha"];

  const formatPrice = (price) => {
    if (currency === 'USD') {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      const arsPrice = price * 1000; // Simulación de conversión
      return `ARS ${arsPrice.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  };

  // Filtrar vehículos
  const filteredVehicles = vehicles
    .filter(vehicle => {
      const matchesType = !selectedType || vehicle.type === selectedType;
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(vehicle.brand);
      return matchesType && matchesBrand;
    })
    .sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtros */}
          <div className="w-full md:w-64 space-y-6">
            {/* Tipo de Vehículo */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tipo de Vehículo</h3>
              <div className="space-y-2">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(selectedType === type ? null : type)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      selectedType === type
                        ? 'bg-accent text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Marca */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Marca</h3>
              <div className="space-y-2">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => {
                      setSelectedBrands(prev =>
                        prev.includes(brand)
                          ? prev.filter(b => b !== brand)
                          : [...prev, brand]
                      );
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      selectedBrands.includes(brand)
                        ? 'bg-accent text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Moneda */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Moneda</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium ${
                    currency === 'USD'
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  USD
                </button>
                <button
                  onClick={() => setCurrency('ARS')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium ${
                    currency === 'ARS'
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ARS
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Vehículos */}
          <div className="flex-1">
            {/* Ordenar por precio */}
            <div className="mb-6 flex justify-end">
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-700">Ordenar por precio</span>
                {sortOrder === 'asc' ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>

            {/* Grid de Vehículos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map(vehicle => (
                <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                      <p className="text-sm text-gray-500">{vehicle.year}</p>
                      <p className="text-xl font-bold text-accent">{formatPrice(vehicle.price)}</p>
                      <Link
                        to={`/vehicle/${vehicle.id}`}
                        className="block w-full bg-accent text-white text-center py-2 rounded-md hover:bg-red-700 transition-colors"
                      >
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicles; 