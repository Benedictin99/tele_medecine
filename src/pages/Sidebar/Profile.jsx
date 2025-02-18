import React, { useState } from "react";
import Button from "../../composants/Button";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Lamine Yamal",
    email: "lamine.yamal@example.com",
    maladie: "Diabétique",
    phone: "+261 32 34 567 89",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("/docteur.png");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Modifications enregistrées !");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        👤 Mon Profil
      </h2>

      {/* Image de profil */}
      <div className="flex flex-col items-center mb-4">
        <img
          src={profileImage}
          alt="Profil"
          className="w-24 h-24 rounded-full border-4 border-blue-400"
        />
        {isEditing && (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="profile-image-input"
            />
            <label
              htmlFor="profile-image-input"
              className="mt-2 cursor-pointer text-sm text-blue-600 hover:underline"
            >
              Choisir une photo
            </label>
          </>
        )}
      </div>

      {/* Informations utilisateur */}
      <div className="space-y-4">
        <div>
          <label className="text-gray-700 font-medium">Nom :</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-2 mt-1 border rounded ${
              isEditing
                ? "border-blue-400 bg-gray-50"
                : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Email :</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-2 mt-1 border rounded ${
              isEditing
                ? "border-blue-400 bg-gray-50"
                : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">
            Maladie génétique :
          </label>
          <input
            type="text"
            name="speciality"
            value={user.maladie}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-2 mt-1 border rounded ${
              isEditing
                ? "border-blue-400 bg-gray-50"
                : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Téléphone :</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-2 mt-1 border rounded ${
              isEditing
                ? "border-blue-400 bg-gray-50"
                : "border-gray-300 bg-gray-100"
            }`}
          />
        </div>
      </div>

      {/* Boutons */}
      <div className="flex justify-end mt-6 space-x-4">
        {isEditing ? (
          <Button
            text={"Enregistrer"}
            onClick={handleSave}
            bgColor="bg-green-500"
            hoverColor="hover:bg-green-600"
          />
        ) : (
          <Button
            text={"Modifier"}
            onClick={() => setIsEditing(true)}
            bgColor="bg-blue-500"
            hoverColor="hover:bg-blue-600"
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
