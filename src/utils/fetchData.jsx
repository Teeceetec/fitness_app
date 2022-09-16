export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':  'caf1e30dc2msh454ec14f94731b6p149daejsna3d082c943fb',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
 
 export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'caf1e30dc2msh454ec14f94731b6p149daejsna3d082c943fb',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
 
 export const fetchData = async (url,options) => {
      const response = await fetch (url,options);
      const data = await response.json();
   return data;
 }