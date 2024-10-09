export function processImageString(imageString: string) {
  if (imageString.includes("-jpg")) {
    // Remove "image-" and replace "-jpg" with ".jpg" for JPG images
    return imageString.replace("image-", "").replace("-jpg", ".jpg");
  } else if (imageString.includes("-png")) {
    // Remove "image-" and replace "-png" with ".png" for PNG images
    return imageString.replace("image-", "").replace("-png", ".png");
  } else {
    // If it's neither JPG nor PNG, return the original string
    return imageString;
  }
}
// Function to generate a slug based on the title
export function generateSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function formatCityName(cityName: any) {
  return cityName
    .split("-") // Split the string by hyphen
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back with spaces
}

export function getCityFromPath(url: any) {
  // Extract the last part of the path after the last '/'
  const citySlug = url.substring(url.lastIndexOf("/") + 1);

  // Call the formatCityName function to format it properly
  return citySlug;
}
