const PhoneInput = ({value,onChange}) =>{
    return(
        <>
            <input
                type="text"
                value={value}
                onChange={(e)=>onChange(e.currentTarget.value)}
            />
        </>
    )
}

export default PhoneInput