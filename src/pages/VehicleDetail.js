import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

function VehicleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Simulación de datos del vehículo (en un caso real, esto vendría de una API)
  const vehicle = {
    id: 1,
    name: "Toyota Hilux 4x4",
    type: "Pickup",
    brand: "Toyota",
    model: "Hilux",
    year: 2023,
    price: 45000,
    description: "Excelente estado, única mano, servicio oficial al día. Incluye: techo corredizo eléctrico, cámara de retroceso, sensores de estacionamiento, llantas nuevas, kit de herramientas completo.",
    features: [
      "4x4",
      "Aire acondicionado",
      "Bluetooth",
      "GPS",
      "Cámara de retroceso",
      "Sensores de estacionamiento",
      "Techo corredizo eléctrico",
      "Kit de herramientas"
    ],
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
    ],
    specifications: {
      "Motor": "2.8L Diesel",
      "Transmisión": "Automática 6 velocidades",
      "Tracción": "4x4",
      "Kilometraje": "15,000 km",
      "Color": "Gris metálico",
      "Combustible": "Diesel",
      "Puertas": "4",
      "Asientos": "5"
    }
  };

  const formatPrice = (price) => {
    if (currency === 'USD') {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      const arsPrice = price * 1000; // Simulación de conversión
      return `ARS ${arsPrice.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el mensaje
    console.log('Mensaje enviado:', messageForm);
    setShowMessageModal(false);
    setMessageForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-10">
        <button
          onClick={() => navigate(-1)}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Image Gallery Section */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src={vehicle.images[selectedImage]}
                alt={vehicle.name}
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {vehicle.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedImage === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Vehicle Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{vehicle.name}</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-accent">{formatPrice(vehicle.price)}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrency('USD')}
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                        currency === 'USD'
                          ? 'bg-accent text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      USD
                    </button>
                    <button
                      onClick={() => setCurrency('ARS')}
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                        currency === 'ARS'
                          ? 'bg-accent text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ARS
                    </button>
                  </div>
                </div>
                <span className="text-gray-500">Año {vehicle.year}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Descripción</h2>
              <p className="text-gray-600">{vehicle.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Características principales</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Especificaciones técnicas</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(vehicle.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contactar al vendedor</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setShowPhoneModal(true)}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Llamar ahora
                </button>
                <button 
                  onClick={() => setShowMessageModal(true)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-accent border-2 border-accent px-6 py-3 rounded-md hover:bg-accent hover:text-white transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ease-out max-w-md w-full relative overflow-hidden">
            {/* Modal Header */}
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={() => setShowPhoneModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Contacta al vendedor
              </h3>
              
              <p className="text-gray-600 mb-6">
                Para obtener más información sobre este vehículo, comunícate al siguiente número:
              </p>

              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 rounded-lg transform -rotate-1"></div>
                <div className="relative bg-white border-2 border-accent rounded-lg p-4 transform rotate-0">
                  <p className="text-3xl font-bold text-accent tracking-wider">
                    011 4241-5108
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ease-out max-w-md w-full relative overflow-hidden">
            {/* Modal Header */}
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={() => setShowMessageModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <EnvelopeIcon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Enviar mensaje
              </h3>
              
              <form onSubmit={handleMessageSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={messageForm.name}
                    onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={messageForm.email}
                    onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={messageForm.message}
                    onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    required
                  ></textarea>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-accent text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Enviar
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowMessageModal(false)}
                    className="flex-1 bg-white text-accent border-2 border-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors font-medium"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VehicleDetail; 