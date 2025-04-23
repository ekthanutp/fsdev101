import { useMemo, useState } from "react"

const Emplist=()=>{
    const [name,setName] = useState("")
    const [amount,setAmount] = useState(0)
    const [filterAmount, setFilterAmount] = useState(0)
    const [sorted,setSorted] = useState(true)
    const [data,setData] = useState([
        { id: 1, name: "john", amount: 50000 },
        { id: 2, name: "cena", amount: 22000 },
        { id: 3, name: "bob", amount: 30000 },
        { id: 4, name: "alice", amount: 28000 },
        { id: 5, name: "mark", amount: 45000 },
        { id: 6, name: "susan", amount: 36000 },
        { id: 7, name: "kevin", amount: 39000 },
        { id: 8, name: "lisa", amount: 25000 },
    ]);

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(!name || !amount){
            alert("ไม่พบข้อมูล")
            return;
        }

        const newItem = {
            id: data.length + 1,
            name,
            amount,
        }

        setData([...data,newItem]);
        setName("");
        setAmount(0);
    }

    //const filteredData = data.filter((item)=>item.amount >= filterAmount)

    const filteredData = useMemo(()=>{
        return data.filter((item)=>item.amount >= filterAmount);
    },[data, filterAmount]);

    const sortedData = useMemo(() => {
        const sortedArr = filteredData.slice().sort((a, b) => {
            return sorted ? a.amount - b.amount : b.amount - a.amount;
        });
        return sortedArr;
    }, [filteredData, sorted]);

    return(
        <>
            <label>รายการพนักงาน</label>
            <form onSubmit={handleSubmit}>
            <div>
                <label>ชื่อ : 
                    <input 
                     type="text"
                     value={name}
                     onChange={(e)=>setName(e.currentTarget.value)}/>
                </label>
                <label>เงิน : 
                    <input 
                    type="number" 
                    value={amount}
                    onChange={(e)=>setAmount(parseFloat(e.currentTarget.value))}/>
                </label>
                <button type="submit">เพิ่มข้อมูล</button>
            </div>
            </form>
            <div>
                <label>ตัวกรองเงินเดือนขั้นต่ำ</label>
                <input 
                type="number"
                value={filterAmount}
                onChange={(e)=>setFilterAmount(e.currentTarget.value)}
                />
            </div>
            <button onClick={() => setSorted(!sorted)}>Toggle</button>
            <ul>
                {sortedData.map((e)=><li key={e.id}>name : {e.name} - amount : {e.amount}</li>)}
            </ul>
        </>
    )
}

export default Emplist