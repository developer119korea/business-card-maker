class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET_NAME);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
      {
        method: 'POST',
        body: data,
      }
    );
    return await res.json();
  }
}

export default ImageUploader;