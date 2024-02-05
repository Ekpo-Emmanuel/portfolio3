
const ImageGallery = ({ images, projectTitle }) => {
  return (
    <div className='all_images_container'>
      {images.length > 0 && (
        <>
          <p>Images</p>
          <div className='images lightbox-wrapper'>
            {images.map((image, index) => (
              <div className='image' key={index}>
                <img
                  src={`/assets/images/projects/${image}`}
                  alt={`${projectTitle} Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
