import React, { useState, useEffect } from 'react';

// Component for admin upload
const AdminUpload = ({ onUpload, onDelete, hasImage }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setFile(null); // Clear the input after upload
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-2xl font-bold mb-4">Admin Upload</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2"
      >
        Upload Timetable
      </button>
      {hasImage && (
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete Timetable
        </button>
      )}
    </div>
  );
};

// Component to display the timetable
const TimetableDisplay = ({ image }) => {
  if (!image) return <p className="text-lg">No timetable uploaded yet.</p>;

  return (
    <div className="flex justify-center">
      <img src={URL.createObjectURL(image)} alt="Timetable" className="rounded-lg shadow-lg" />
    </div>
  );
};

// Main Timetable component
const Timetable = () => {
  const [timetableImage, setTimetableImage] = useState(null);

  // Load timetable image from local storage on mount
  useEffect(() => {
    const storedImage = localStorage.getItem('timetableImage');
    if (storedImage) {
      const imageFile = new File([new Blob([storedImage])], "timetable.png", { type: "image/png" });
      setTimetableImage(imageFile);
    }
  }, []);

  // Handle upload of the timetable image
  const handleUpload = (file) => {
    setTimetableImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem('timetableImage', reader.result); // Store base64 image string
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  };

  // Handle deletion of the timetable image
  const handleDelete = () => {
    setTimetableImage(null);
    localStorage.removeItem('timetableImage'); // Remove image from local storage
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Timetable Page</h1>
      <AdminUpload onUpload={handleUpload} onDelete={handleDelete} hasImage={!!timetableImage} />
      <TimetableDisplay image={timetableImage} />
    </div>
  );
};

export default Timetable;
