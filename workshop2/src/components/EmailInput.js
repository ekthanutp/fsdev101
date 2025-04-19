const EmailInput =({value,onChange}) =>{
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

export default EmailInput