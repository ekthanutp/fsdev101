const FilterForm =()=>{
    return(
    <>
        <div>
            <label>เลือกจำนวนเงินและเงื่อนไขเพื่อ Filter</label>
            <input type="number"/>
        </div>
        <div>
            <input type="radio" name="filterCon" value="less"/>
            <label>น้อยกว่า</label>
            <input type="radio" name="filterCon" value="more"/>
            <label>มากกว่า</label>
            <input type="radio" name="filterCon" value="eq"/>
            <label>เท่ากับ</label>
            <button>เลือกค่า</button>
        </div>
        <div>
            <input type="number"/> - <input type="number"/>
            <button>เลือกช่วงข้อมูล</button>
        </div>
    </>
    )}
export default FilterForm