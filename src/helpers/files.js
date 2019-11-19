
export const fetchAudio = async (verb) => {
  const response = await fetch(`/sounds/${verb}.mp3`);
  return response.blob();
};
