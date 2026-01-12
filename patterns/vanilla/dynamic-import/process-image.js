// Load image processing library only when needed
async function processImage(imageFile) {
  // User uploads image
  const { default: imageProcessor } = await import("./image-processor.js");

  const processed = await imageProcessor.compress(imageFile);
  return processed;
}

// Usage
uploadButton.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  const result = await processImage(file); // Loads library now
  displayImage(result);
});
