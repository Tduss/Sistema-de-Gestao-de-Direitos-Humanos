import React, { useState } from 'react';

export const ContactForm = () => {
  const [files, setFiles] = useState([]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setFiles([...files, ...e.dataTransfer.files]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Abrir um Novo Caso</h1>
      <p className="text-gray-600 mb-6">
        Explique brevemente a situação em que o problema ocorreu, descrevendo com precisão os factos que ocorreram.
        Inclua datas, horários e locais, se possível. Identifique quem está envolvido na situação, mencione nomes e
        cargos, se aplicável. Relate os impactos que a situação causou, tanto em si quanto no ambiente ao seu redor.
        Descreva qualquer tentativa que já tenha feito para resolver a situação.
      </p>
      <form className="space-y-6">
        {/* Assunto */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Assunto *</label>
          <input
            type="text"
            name="title"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-300 focus:border-pink-300"
            placeholder="Digite o assunto"
            required
          />
        </div>

        {/* Detalhes */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Detalhes do Caso *</label>
          <textarea
            name="content"
            rows="5"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-300 focus:border-pink-300"
            placeholder="Descreva a situação detalhadamente"
            required
          />
          <div
            className="mt-4 border-dashed border-2 border-pink-300 p-4 text-center text-gray-500 rounded-lg"
            onDrop={handleFileDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <p>Arraste os ficheiros para aqui ou escolha-os</p>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="mt-2 block text-pink-500 cursor-pointer"
            >
              Selecionar Ficheiros
            </label>
          </div>
          <ul className="mt-2 text-sm text-gray-600">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>

        {/* Idade */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Idade *</label>
          <input
            type="number"
            name="age"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-300 focus:border-pink-300"
            placeholder="Digite sua idade"
            required
          />
        </div>

        {/* Estado Civil */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Estado Civil *</label>
          <select
            name="marital_status"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-300 focus:border-pink-300"
            required
          >
            <option value="">— Selecione —</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="separado">Separado</option>
            <option value="viuvo">Viúvo</option>
            <option value="uniao_estavel">União Estável</option>
          </select>
        </div>

        {/* Sexo */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Sexo *</label>
          <select
            name="gender"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-300 focus:border-pink-300"
            required
          >
            <option value="">— Selecione —</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        {/* Província */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Província *</label>
          <select
            name="province"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-300 focus:border-pink-300"
            required
          >
            <option value="">— Selecione —</option>
            <option value="maputo">Maputo</option>
            <option value="maputo_cidade">Maputo Cidade</option>
            <option value="gaza">Gaza</option>
            <option value="inhambane">Inhambane</option>
            <option value="sofala">Sofala</option>
            <option value="zambezia">Zambézia</option>
            <option value="manica">Manica</option>
            <option value="tete">Tete</option>
            <option value="nampula">Nampula</option>
            <option value="niassa">Niassa</option>
            <option value="cabo_delgado">Cabo Delgado</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-300 focus:border-pink-300"
            placeholder="Digite seu email (opcional)"
          />
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Telefone *</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-300 focus:border-pink-300"
            placeholder="Digite seu número de telefone"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
