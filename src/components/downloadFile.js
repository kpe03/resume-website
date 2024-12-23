'use client';
import React, { useState } from 'react';

const ImagePreviewAndDownload = ({file}) => {
    const [imagePreview, setImagePreview] = useState(null);

    // Handle file selection
    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
        // Set the file for download link
        setFile(selectedFile);

        // Create an image preview using FileReader
        const reader = new FileReader();
        reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview URL
        };
        reader.readAsDataURL(selectedFile); // Read the selected file as a data URL
    }
    };

    // Handle download
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file); // Create a download URL for the file
        link.download = file.name; // Set the download filename
        link.click(); // Trigger the download
    };   

    return (
        <div>
        <h1>Image Preview and Download</h1>

        {/* File input for selecting the image */}
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {/* Image preview */}
        {imagePreview && (
            <div>
            <h2>Image Preview</h2>
            <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
            </div>
        )}

        {/* Download link */}
        {file && (
            <div>
            <button onClick={handleDownload}>Download Image</button>
            </div>
        )}
        </div>
    );
};

export default ImagePreviewAndDownload;
   