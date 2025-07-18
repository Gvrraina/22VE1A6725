import React from 'react'

export const mockShortenedUrl = (originalUrl) => {
    const hash = btoa(originalUrl).substring(0, 6); 
    return `https://short.ly/${hash}`;
  }

function Shortener({url}) {
  const [shortenedUrl, setShortenedUrl] = React.useState('');

  const newShorten = () => {
    const originalUrl = document.querySelector('input[placeholder="Enter Original URL here"]').value;
    if (originalUrl) {
      const newShortenedUrl = mockShortenedUrl(originalUrl);
      setShortenedUrl(newShortenedUrl);
    }
  };

  return (
    <div className="shortener-container">
        <h3>{url}</h3>
        <input type="text" placeholder="Shortened URL will appear here" value={shortenedUrl} readOnly />
        <button onClick={newShorten}>Copy</button>
    </div>
  )
}
// const Shortener = ({url}) => {

//   return (
//     <div>
//         <h3>{url}</h3>
//         <input type="text" placeholder="Shortened URL will appear here" readOnly />
//         <script>
//           if (shortenedUrl) {}
//         </script>
//         <button>Copy</button>



//     </div>
//   )
// }

export default Shortener
