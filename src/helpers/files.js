
export const fetchAudio = async (verb) => {
  const response = await fetch(`${process.env.PUBLIC_URL}/sounds/${verb}.mp3`);
  return response.blob();
};
