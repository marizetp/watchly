const styles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
}

const containerStyles ={
    display: 'flex',
    gap: '4px'
}

const textStyles={
    lineHeight: '1',
    margin: '0',
    fontFamily: 'Arial, Sans-serif'
}


export default function Star({maxRating = 5}){


    return <>
    <div style={styles}>
        <div style={containerStyles}>
            {Array.from({length: maxRating}, ( _, i) => <span style={textStyles}>S{i+1}</span>)}
        </div>

        <p style={textStyles}>10</p>
    </div>
    
    </>
}