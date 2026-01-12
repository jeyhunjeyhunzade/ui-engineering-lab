async function loadFeature() {
  try {
    const module = await import("./heavy-feature.js");
    module.initialize();
  } catch (error) {
    console.error("Failed to load feature:", error);
    showErrorMessage("Feature unavailable");
  }
}
