import React, { useRef, useState } from 'react';

const DatePicker = (props) => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };


  function sumbitDate(e){
    props.addDateProp(date);
    //console.log(date)
    e.preventDefault();
  };

  
  return (
    <div className='dateInputDiv'> 
      <input className='dateInputFeild'
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
      <button className='dateConfirm' onClick={sumbitDate}>Confirm</button>
      <p style={{fontSize:'12px',color:'grey'}} > Selected Date: {date}</p>


    </div>
  );
};

export default DatePicker;