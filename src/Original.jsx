import React from 'react'

const Original = ({url}) => {
    const [originalUrl, setOriginalUrl] = React.useState('');
    // const [hasSubmit,setHasSubmit] = useState(initialState => false);
  return (
    <div className="original-container">
      <h3>{url}</h3>
        <input type="text" placeholder="Enter Original URL here" />
        {/* <button onClick={() => setHasSubmit(value => !value)}>
         {hasSubmit ? 'Submitted' : 'Submit'}
        </button> */}
        <button>
            Submit
        </button>
    </div>
  )
}

export default Original
