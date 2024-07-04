// it is taking a relative path which we passed to it taking base url of website appending this path & passing us back
// here we are dynamically importing the images
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};